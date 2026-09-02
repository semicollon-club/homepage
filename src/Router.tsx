import { useEffect, useState, type ReactElement } from 'react'
import App from './App'
import Layout from './layouts/Layout'
import NotFoundPage from './pages/NotFoundPage'
import OrganizationPage from './pages/OrganizationPage'
import RecruitPage from './pages/RecruitPage'
import { LOCATION_CHANGE_EVENT } from './lib/navigation'

const SITE_NAME = '세미콜론 ; 청운대학교 코딩 동아리'

interface Route {
  Component: () => ReactElement
  title: string
}

/** 새 페이지는 여기에 경로와 타이틀을 등록하세요. */
const routes: Record<string, Route> = {
  '/': { Component: App, title: SITE_NAME },
  '/organization': { Component: OrganizationPage, title: `조직도 | ${SITE_NAME}` },
  '/recruit': { Component: RecruitPage, title: `지원 안내 | ${SITE_NAME}` },
}

const getLocationKey = () => window.location.pathname + window.location.hash

function Router() {
  const [locationKey, setLocationKey] = useState(getLocationKey)

  useEffect(() => {
    const onChange = () => setLocationKey(getLocationKey())
    window.addEventListener('popstate', onChange)
    window.addEventListener(LOCATION_CHANGE_EVENT, onChange)
    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener(LOCATION_CHANGE_EVENT, onChange)
    }
  }, [])

  const route = routes[window.location.pathname]

  useEffect(() => {
    document.title = route ? route.title : `페이지를 찾을 수 없어요 | ${SITE_NAME}`
    const { hash } = window.location
    const section = hash ? document.querySelector(hash) : null
    if (section) section.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [locationKey, route])

  const Page = route ? route.Component : NotFoundPage
  return (
    <Layout>
      <Page />
    </Layout>
  )
}

export default Router
