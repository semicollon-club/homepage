import type { Ref } from 'react'
import Link from './Link'
import PixelIcon from './PixelIcon'
import RibbonCard from './RibbonCard'
import { findApp } from '../data/apps'
import { notices, shadeHotPath, shadeTilePaths } from '../data/os'
import { useAuth } from '../hooks/useAuth'
import { useClock } from '../hooks/useClock'
import type { PullDown } from '../hooks/usePullDown'
import './Shade.css'

const tileApps = shadeTilePaths.map(findApp)
const loginApp = findApp('/login')

interface ShadeProps {
  ref?: Ref<HTMLDivElement>
  pullDown: PullDown
}

/** 상태바에서 끌어내리는 검정 패널 — 시계, 바로가기 타일, 알림 */
function Shade({ ref, pullDown }: ShadeProps) {
  const { open, pull, setOpen, toggle, dragHandlers } = pullDown
  const { time, date } = useClock()
  const { user, logout } = useAuth()
  const close = () => setOpen(false)

  const className = ['shade', 'on-dark', open && 'is-open', pull !== null && 'is-dragging']
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={ref}
      id="os-shade"
      className={className}
      style={pull === null ? undefined : { transform: `translateY(calc(-100% + ${pull}px))` }}
      role="dialog"
      aria-modal="true"
      aria-label="빠른 메뉴"
      tabIndex={-1}
      inert={!open}
    >
      <div className="shade-inner">
        <p className="shade-time" aria-hidden="true">{time}</p>
        <p className="shade-date">{date}</p>

        <ul className="shade-tiles">
          {tileApps.map((app) => (
            <li key={app.path}>
              <Link
                to={app.path}
                className={app.path === shadeHotPath ? 'shade-tile is-hot' : 'shade-tile'}
                onClick={close}
              >
                <PixelIcon name={app.icon} />
                <span>{app.label}</span>
              </Link>
            </li>
          ))}
          <li>
            {user ? (
              <button
                type="button"
                className="shade-tile"
                aria-label={`${user.displayName}님 로그아웃`}
                onClick={() => {
                  void logout()
                  close()
                }}
              >
                <PixelIcon name={loginApp.icon} />
                <span>로그아웃</span>
              </button>
            ) : (
              <Link to={loginApp.path} className="shade-tile" onClick={close}>
                <PixelIcon name={loginApp.icon} />
                <span>{loginApp.label}</span>
              </Link>
            )}
          </li>
        </ul>

        <h2 className="sr-only">알림</h2>
        <ul className="stack">
          {notices.map((notice) => (
            <li key={notice.title}>
              <Link to={notice.to} className="ribbon-link" onClick={close}>
                <RibbonCard title={notice.title} tint={findApp(notice.to).tint}>
                  {notice.text}
                </RibbonCard>
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="shade-grip"
          aria-label="빠른 메뉴 닫기"
          onClick={toggle}
          {...dragHandlers}
        >
          위로 밀어 닫기
        </button>
      </div>
    </div>
  )
}

export default Shade
