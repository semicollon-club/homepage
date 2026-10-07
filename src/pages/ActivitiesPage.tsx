import EyebrowBlock from '../components/EyebrowBlock'
import RibbonCard from '../components/RibbonCard'
import { programs } from '../data/about'

/** 활동 앱 — 세미콜론이 하는 일 세 가지 */
function ActivitiesPage() {
  return (
    <div className="page">
      <EyebrowBlock subtitle="완성도 있는 결과물과 오래 남는 동료를 동시에 만드는 활동들.">
        코드 너머의 경험을 만듭니다.
      </EyebrowBlock>

      <ul className="stack">
        {programs.map((item) => (
          <li key={item.no}>
            <RibbonCard title={`${item.no} · ${item.title}`}>{item.text}</RibbonCard>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ActivitiesPage
