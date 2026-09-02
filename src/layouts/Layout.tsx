import { useState } from 'react'
import type { ReactNode } from 'react'
import Link from '../components/Link'
import './Layout.css'

const menuLinks = [
  { to: '/#about', label: '세미콜론 소개' },
  { to: '/#program', label: '우리가 하는 일' },
  { to: '/organization', label: '조직도' },
]

function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <nav className="nav" aria-label="주 메뉴">
        <Link className="logo" to="/" aria-label="세미콜론 홈으로"><span>;</span> SEMICOLON</Link>
        <button className="mobile-menu" aria-label="메뉴 열기" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {menuLinks.map((item) => (
            <Link key={item.to} to={item.to} onClick={closeMenu}>{item.label}</Link>
          ))}
          <Link className="nav-cta" to="/#apply" onClick={closeMenu}>지원하기 <span>↗</span></Link>
        </div>
      </nav>

      {children}

      <footer>
        <Link className="logo" to="/"><span>;</span> SEMICOLON</Link>
        <p>청운대학교 교내 코딩 동아리 세미콜론</p>
        <p>© 2026 SEMICOLON. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  )
}

export default Layout
