import { useEffect, useState, type ReactElement } from 'react'
import App from './App'
import Layout from './layouts/Layout'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import OrganizationPage from './pages/OrganizationPage'
import RecruitPage from './pages/RecruitPage'
import { findApp } from './data/apps'
import { LOCATION_CHANGE_EVENT } from './lib/navigation'

const SITE_NAME = '세미콜론 ; 청운대학교 코딩 동아리'

interface Route {
  Component: () => ReactElement
  title: string
}

/** 새 페이지(앱)는 여기에 경로와 타이틀을 등록하고, src/data/apps.ts 에 아이콘·틴트를 추가하세요. */
const routes: Record<string, Route> = {
  '/': { Component: App, title: SITE_NAME },
  '/about': { Component: AboutPage, title: `동아리 소개 | ${SITE_NAME}` },
  '/organization': { Component: OrganizationPage, title: `조직도 | ${SITE_NAME}` },
  '/recruit': { Component: RecruitPage, title: `지원 안내 | ${SITE_NAME}` },
  '/login': { Component: LoginPage, title: `로그인 | ${SITE_NAME}` },
}

/** 섹션이 앱으로 나뉘면서 바뀐 옛 주소 → 새 주소 */
const legacyRedirects: Record<string, string> = {
  '/about#program': '/activities',
  '/about#rhythm': '/schedule',
  '/#about': '/about',
  '/#process': '/recruit',
  '/#faq': '/recruit',
}

const getLocationKey = () => window.location.pathname + window.location.hash

/** 옛 주소로 들어왔으면 주소창을 새 주소로 바꿉니다 (뒤로가기 기록은 남기지 않음) */
function readLocation() {
  const redirect = legacyRedirects[getLocationKey()]
  if (redirect) window.history.replaceState(null, '', redirect)
  return getLocationKey()
}

function Router() {
  const [locationKey, setLocationKey] = useState(readLocation)

  useEffect(() => {
    const onChange = () => setLocationKey(readLocation())
    window.addEventListener('popstate', onChange)
    window.addEventListener(LOCATION_CHANGE_EVENT, onChange)
    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener(LOCATION_CHANGE_EVENT, onChange)
    }
  }, [])

  const path = window.location.pathname
  const route = routes[path]

  // 타이틀 갱신, 해시가 있으면 그 섹션으로 스크롤 (홈 화면은 스크롤 위치를 그대로 둡니다)
  useEffect(() => {
    document.title = route ? route.title : `페이지를 찾을 수 없어요 | ${SITE_NAME}`
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [locationKey, route])

  const Page = route ? route.Component : NotFoundPage
  return (
    <Layout
      path={path}
      home={<App />}
      app={path === '/' ? null : { key: path, info: findApp(path), content: <Page /> }}
    />
  )
}

export default Router
