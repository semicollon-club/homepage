import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import AppWindow from '../components/AppWindow'
import Dock from '../components/Dock'
import Shade from '../components/Shade'
import StatusBar from '../components/StatusBar'
import type { AppInfo } from '../data/apps'
import { usePullDown } from '../hooks/usePullDown'
import { setLaunchOrigin } from '../lib/launch'
import './Layout.css'

export interface OpenApp {
  /** 앱 창을 구분하는 값 (주소) */
  key: string
  info: AppInfo
  content: ReactNode
}

interface LayoutProps {
  /** 지금 주소 */
  path: string
  /** 홈 화면 — 앱이 열려도 아래에 그대로 남아 스크롤 위치를 지킵니다 */
  home: ReactNode
  /** 지금 열린 앱. 홈이면 null */
  app: OpenApp | null
}

/** OS 셸 — 검정 프레임 안에 [상태바] / [홈 화면 + 앱 창 + 내려오는 패널] / [독] */
function Layout({ path, home, app }: LayoutProps) {
  const statusRef = useRef<HTMLButtonElement>(null)
  const shadeRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const pullDown = usePullDown(shadeRef, mainRef)

  // 앱 → 홈으로 돌아갈 때는 닫히는 애니메이션 동안만 직전 앱을 더 그립니다.
  const [prevApp, setPrevApp] = useState(app)
  const [closingApp, setClosingApp] = useState<OpenApp | null>(null)
  const [userNavigated, setUserNavigated] = useState(false)
  if ((app?.key ?? null) !== (prevApp?.key ?? null)) {
    setPrevApp(app)
    setClosingApp(app ? null : prevApp)
    setUserNavigated(true)
  }
  const shownApp = app ?? closingApp

  const finishClosing = useCallback(() => setClosingApp(null), [])

  // 앱을 연 링크. 앱이 닫히는 순간 포커스가 사라졌거나 닫히는 창(inert)에 남아 있으면
  // 이 링크로 돌려줍니다 — 키보드 사용자가 처음부터 다시 Tab 하지 않도록.
  const launcherRef = useRef<HTMLElement | null>(null)
  const appOpen = app !== null
  useEffect(() => {
    if (appOpen) return
    const active = document.activeElement
    const focusLost = !active || active === document.body || active.closest('[inert]') !== null
    const launcher = launcherRef.current
    if (focusLost && launcher?.isConnected && !launcher.closest('[inert]')) launcher.focus()
  }, [appOpen])

  // 패널이 열리면 패널로, 닫히면 상태바로 포커스를 옮깁니다.
  // (타일을 눌러 앱이 열리며 닫힌 경우는 앱 제목에 포커스가 가 있으므로 건드리지 않음)
  const shadeWasOpen = useRef(false)
  useEffect(() => {
    if (pullDown.open) {
      shadeRef.current?.focus({ preventScroll: true })
    } else if (shadeWasOpen.current) {
      const active = document.activeElement
      if (!active || active === document.body || shadeRef.current?.contains(active)) {
        statusRef.current?.focus({ preventScroll: true })
      }
    }
    shadeWasOpen.current = pullDown.open
  }, [pullDown.open])

  // 내부 링크를 누르면 그 자리를 기억해 둡니다 — 앱 창이 거기서부터 커집니다
  const rememberLaunchOrigin = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof Element)) return
    const link = event.target.closest<HTMLElement>('a[href^="/"]')
    if (!link) return
    setLaunchOrigin(link)
    if (link.getAttribute('href') !== '/') launcherRef.current = link
  }

  return (
    <div className="os" onClickCapture={rememberLaunchOrigin}>
      <StatusBar
        ref={statusRef}
        shadeOpen={pullDown.open}
        onToggle={pullDown.toggle}
        dragHandlers={pullDown.dragHandlers}
      />
      <div className="os-screen">
        <main ref={mainRef} className="os-main" inert={pullDown.open}>
          <div className="home-screen" data-scroll-root="home" inert={app !== null}>
            {home}
          </div>
          {shownApp && (
            <AppWindow
              key={shownApp.key}
              info={shownApp.info}
              animateOpen={userNavigated}
              closing={app === null}
              onClosed={finishClosing}
            >
              {shownApp.content}
            </AppWindow>
          )}
        </main>
        <Shade ref={shadeRef} pullDown={pullDown} />
      </div>
      <Dock path={path} inert={pullDown.open} />
    </div>
  )
}

export default Layout
