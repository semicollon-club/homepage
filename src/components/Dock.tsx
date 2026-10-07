import Link from './Link'
import PixelIcon from './PixelIcon'
import type { PixelIconName } from './PixelIcon'
import { findApp } from '../data/apps'
import { dockPaths } from '../data/os'
import './Dock.css'

const items: { label: string; path: string; icon: PixelIconName }[] = [
  { label: '홈', path: '/', icon: 'home' },
  ...dockPaths.map(findApp),
]

interface DockProps {
  /** 지금 주소 — 해당 칸을 반전해 표시합니다 */
  path: string
  /** 패널이 열려 있으면 독을 잠급니다 */
  inert: boolean
}

/** 화면 아래 고정 메뉴 — Dell 의 icon-label-nav */
function Dock({ path, inert }: DockProps) {
  return (
    <nav className="dock" aria-label="주 메뉴" inert={inert}>
      <ul>
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="dock-item"
              aria-current={item.path === path ? 'page' : undefined}
            >
              <PixelIcon name={item.icon} />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Dock
