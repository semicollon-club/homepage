import EyebrowBlock from '../components/EyebrowBlock'
import RibbonCard from '../components/RibbonCard'
import { leaders, members, staff } from '../data/organization'
import type { Officer } from '../data/organization'
import './OrganizationPage.css'

const officerCard = (person: Officer) => (
  <li key={person.name}>
    <RibbonCard title={person.role}>
      <strong className="org-name">{person.name}</strong>
      {person.major}
    </RibbonCard>
  </li>
)

/** 조직도 앱 — 임원진과 부원 */
function OrganizationPage() {
  return (
    <div className="page">
      <EyebrowBlock subtitle="함께 배우고 만드는 세미콜론의 2026년 임원진과 부원을 소개합니다.">
        세미콜론을 이끄는 사람들.
      </EyebrowBlock>

      <h2 className="page-heading">임원진</h2>
      <ul className="stack org-leaders">{leaders.map(officerCard)}</ul>
      <ul className="stack org-staff">{staff.map(officerCard)}</ul>

      <h2 className="page-heading">부원</h2>
      <table className="data-table">
        <caption className="sr-only">부원 명단</caption>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">전공</th>
          </tr>
        </thead>
        <tbody>
          {members.map((person) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrganizationPage
