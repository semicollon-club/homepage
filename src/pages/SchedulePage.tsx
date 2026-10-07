import EyebrowBlock from '../components/EyebrowBlock'
import RibbonCard from '../components/RibbonCard'
import { milestones, rhythm } from '../data/about'

/** 일정 앱 — 정기 활동 주기와 연간 일정 */
function SchedulePage() {
  return (
    <div className="page">
      <EyebrowBlock subtitle="학기 중에는 주 1회 정기 모임을 원칙으로 합니다. 시험 기간 전후로는 잠시 쉬어가요.">
        매주 수요일 저녁, 우리는 모입니다.
      </EyebrowBlock>

      <ul className="stack">
        {rhythm.map((item) => (
          <li key={item.title}>
            <RibbonCard title={`${item.title} · ${item.when}`}>{item.text}</RibbonCard>
          </li>
        ))}
      </ul>

      <h2 className="page-heading">A YEAR IN SEMICOLON</h2>
      <table className="data-table">
        <caption className="sr-only">연간 주요 일정</caption>
        <thead>
          <tr>
            <th scope="col">시기</th>
            <th scope="col">일정</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((item) => (
            <tr key={item.title}>
              <td>{item.month}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SchedulePage
