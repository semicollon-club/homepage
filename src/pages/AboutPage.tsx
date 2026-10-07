import EyebrowBlock from '../components/EyebrowBlock'
import Link from '../components/Link'
import RibbonCard from '../components/RibbonCard'
import { values } from '../data/about'

/** 소개 앱 — 동아리가 어떤 곳인지와 지향하는 세 가지 */
function AboutPage() {
  return (
    <div className="page">
      <EyebrowBlock subtitle="세미콜론은 배우고, 만들고, 나누며 성장하는 청운대학교 인천캠퍼스 학생 개발자 커뮤니티입니다.">
        좋은 코드는, 좋은 동료에게서 시작됩니다.
      </EyebrowBlock>

      <h2 className="page-heading">혼자서는 막막했던 한 줄도, 함께라면 가능성이 됩니다.</h2>
      <p>
        세미콜론은 기술과 사람 사이를 잇는 가장 즐거운 시작점이 되고자 합니다.
        실력보다 먼저 보는 것은 배우려는 마음과 끝까지 해보려는 태도입니다.
      </p>

      <ul className="stack">
        {values.map((item) => (
          <li key={item.label}>
            <RibbonCard title={`${item.label} · ${item.title}`}>{item.text}</RibbonCard>
          </li>
        ))}
      </ul>

      <h2 className="page-heading">다음 문장은 당신으로 이어집니다.</h2>
      <p>개발 경험이 없어도, 전공이 아니어도 괜찮아요.</p>
      <Link to="/recruit" className="btn btn-primary">지원 안내 보기</Link>
    </div>
  )
}

export default AboutPage
