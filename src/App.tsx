import EyebrowBlock from './components/EyebrowBlock'
import Link from './components/Link'
import PixelIcon from './components/PixelIcon'
import RibbonCard from './components/RibbonCard'
import Sticker from './components/Sticker'
import { programs } from './data/about'
import { apps, findApp } from './data/apps'
import './App.css'

const activitiesApp = findApp('/activities')

/** 홈 화면 — 앱 아이콘 격자, 지원 위젯, 활동 카드. 앱 창이 열려도 아래에 남아 있습니다 */
function App() {
  return (
    <div className="page">
      <EyebrowBlock
        as="h1"
        tint="olive"
        subtitle="혼자 배우던 코딩을, 함께 완성하는 진짜 프로젝트로."
        sticker={<Sticker tilt>1기 모집!</Sticker>}
      >
        SEMICOLON
      </EyebrowBlock>

      <nav aria-label="앱 목록">
        <ul className="app-grid">
          {apps.map((app) => (
            <li key={app.path}>
              <Link to={app.path} className="app-icon">
                <span className={`app-icon-tile tint-${app.tint}`}>
                  <PixelIcon name={app.icon} />
                </span>
                <span>{app.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* id="apply" — 옛 /#apply 링크가 이 위젯으로 이어집니다 */}
      <section id="apply" className="cta-panel" aria-label="지원하기">
        <p>
          세미콜론은 배우고, 만들고, 나누며 성장하는 청운대학교 학생 개발자 커뮤니티입니다.
          개발 경험이 없어도, 전공이 아니어도 괜찮아요.
        </p>
        <Link to="/recruit" className="btn btn-primary">지원하기</Link>
      </section>

      <h2 className="page-heading">우리가 하는 일</h2>
      <ul className="stack">
        {programs.map((item) => (
          <li key={item.no}>
            <Link to={activitiesApp.path} className="ribbon-link">
              <RibbonCard title={item.title} tint={activitiesApp.tint}>
                {item.text}
              </RibbonCard>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
