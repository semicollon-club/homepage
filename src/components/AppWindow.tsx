import { useEffect, useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import Link from './Link'
import type { AppInfo } from '../data/apps'
import { takeLaunchOrigin } from '../lib/launch'
import './AppWindow.css'

/** 앱 열기·닫기 — 패널(--motion-shade)과 같은 320ms, 5계단 */
const MOTION: KeyframeAnimationOptions = { duration: 320, easing: 'steps(5)' }
const SHRUNK = 'scale(0.1)'
const FULL = 'scale(1)'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

interface AppWindowProps {
  info: AppInfo
  /** 사용자가 열었을 때만 true. 주소로 바로 들어온 첫 화면은 애니메이션 없이 열립니다 */
  animateOpen: boolean
  /** true 가 되면 줄어들며 닫히고, 다 닫히면 onClosed 를 부릅니다 */
  closing: boolean
  onClosed: () => void
  children: ReactNode
}

/** 앱 창 — 상태바와 독 사이를 덮는 화면. 검정 제목줄 + 스크롤되는 본문 */
function AppWindow({ info, animateOpen, closing, onClosed, children }: AppWindowProps) {
  const windowRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const shouldAnimateOpen = useRef(animateOpen)

  // 마운트 때 한 번: 누른 아이콘 자리를 기준점으로 잡고 거기서부터 커집니다
  useLayoutEffect(() => {
    const element = windowRef.current
    if (!element) return
    const origin = takeLaunchOrigin()
    if (origin) {
      const rect = element.getBoundingClientRect()
      element.style.transformOrigin = `${origin.x - rect.left}px ${origin.y - rect.top}px`
    }
    if (!shouldAnimateOpen.current) return
    titleRef.current?.focus({ preventScroll: true })
    if (prefersReducedMotion()) return
    const animation = element.animate([{ transform: SHRUNK }, { transform: FULL }], MOTION)
    return () => animation.cancel()
  }, [])

  // 닫힐 때: 같은 자리로 줄어든 뒤 onClosed. 도중에 다시 열리면(closing=false) 취소됩니다
  useEffect(() => {
    const element = windowRef.current
    if (!closing || !element) return
    if (prefersReducedMotion()) {
      onClosed()
      return
    }
    const animation = element.animate([{ transform: FULL }, { transform: SHRUNK }], { ...MOTION, fill: 'forwards' })
    animation.finished.then(onClosed, () => {})
    return () => animation.cancel()
  }, [closing, onClosed])

  const titleId = `app-title-${info.icon}`

  return (
    <section
      ref={windowRef}
      className={`app-window tint-${info.tint}`}
      aria-labelledby={titleId}
      inert={closing}
    >
      <header className="app-titlebar on-dark">
        <h1 id={titleId} ref={titleRef} tabIndex={-1}>{info.label}</h1>
        <Link to="/" className="app-close" aria-label={`${info.label} 닫기`}>닫기 ×</Link>
      </header>
      <div className="app-body" data-scroll-root={closing ? undefined : 'app'}>
        {children}
      </div>
    </section>
  )
}

export default AppWindow
