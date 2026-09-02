import '../App.css'
import './OrganizationPage.css'

const president = { name: '우성현', role: '회장', major: '컴퓨터공학과' }
const vicePresident = { name: '엄준호', role: '부회장', major: '컴퓨터공학과' }

const staff = [
  { name: '민현호', role: '홍보부장', major: '컴퓨터공학과' },
  { name: '노승균', role: '총무', major: '컴퓨터공학과' },
  { name: '이준혁', role: '서기', major: '컴퓨터공학과' },
]

const members = [
  { name: '김동준', major: '컴퓨터공학과' },
  { name: '윤교준', major: '컴퓨터공학과' },
  { name: '안성훈', major: '컴퓨터공학과' },
  { name: '김아린', major: '컴퓨터공학과' },
  { name: '이환희', major: '컴퓨터공학과' },
  { name: '원현빈', major: '광고홍보학과' },
  { name: '정정환', major: '멀티미디어학과' },
  { name: '조수아', major: '컴퓨터공학과' },
]

function OrganizationPage() {
  return (
    <main>
      <header className="org-head">
        <p className="kicker"><i /> ORGANIZATION</p>
        <h1>세미콜론을<br/><em>이끄는 사람들.</em></h1>
        <p className="org-copy">함께 배우고 만드는 세미콜론의 2026년<br/>임원진과 부원을 소개합니다.</p>
      </header>

      <section className="org-tree">
        <div className="org-tier">
          <div className="org-card org-card-lead">
            <span className="org-role">{president.role}</span>
            <strong className="org-name">{president.name}</strong>
            <span className="org-major">{president.major}</span>
          </div>
        </div>
        <div className="org-connector" aria-hidden="true" />
        <div className="org-tier">
          <div className="org-card org-card-lead">
            <span className="org-role">{vicePresident.role}</span>
            <strong className="org-name">{vicePresident.name}</strong>
            <span className="org-major">{vicePresident.major}</span>
          </div>
        </div>
        <div className="org-connector" aria-hidden="true" />
        <div className="org-tier org-tier-staff">
          {staff.map((person) => (
            <div className="org-card" key={person.name}>
              <span className="org-role">{person.role}</span>
              <strong className="org-name">{person.name}</strong>
              <span className="org-major">{person.major}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="org-members">
        <div className="section-label">부원</div>
        <div className="org-member-grid">
          {members.map((person) => (
            <div className="org-member" key={person.name}>
              <strong>{person.name}</strong>
              <span>{person.major}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default OrganizationPage
