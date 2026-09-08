import '../App.css'
import './AboutPage.css'
import Link from '../components/Link'
import { milestones, programs, rhythm, values } from '../data/about'

function AboutPage() {
  return (
    <main className="ds-page about-page">
      <header className="about-head">
        <p className="eyebrow">ABOUT SEMICOLON</p>
        <h1>좋은 코드는,<br />좋은 동료에게서<br />시작됩니다.</h1>
        <p className="lead">
          세미콜론은 배우고, 만들고, 나누며 성장하는<br />청운대학교 인천캠퍼스 학생 개발자 커뮤니티입니다.
        </p>
      </header>

      <section className="section" id="about">
        <p className="eyebrow">01 — ABOUT US</p>
        <div className="section-head reveal">
          <h2>혼자서는 막막했던 한 줄도,<br />함께라면 가능성이 됩니다.</h2>
          <p className="subhead">
            세미콜론은 기술과 사람 사이를 잇는 가장 즐거운 시작점이 되고자 합니다.
            실력보다 먼저 보는 것은 배우려는 마음과 끝까지 해보려는 태도입니다.
          </p>
        </div>
        <div className="value-grid">
          {values.map((item) => (
            <div className="value reveal" key={item.label}>
              <b className="eyebrow">{item.label}</b>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="program">
        <div className="block block-lilac">
          <p className="eyebrow">02 — WHAT WE DO</p>
          <h2>코드 너머의<br />경험을 만듭니다.</h2>
          <p className="subhead">완성도 있는 결과물과 오래 남는 동료를 동시에 만드는 활동들.</p>
        </div>
        <div className="card-sheet">
          <div className="card-grid">
            {programs.map((item) => (
              <article className="card reveal" key={item.no}>
                <span className="eyebrow">{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="rhythm">
        <p className="eyebrow">03 — OUR RHYTHM</p>
        <div className="section-head reveal">
          <h2>매주 수요일 저녁,<br />우리는 모입니다.</h2>
          <p className="subhead">
            학기 중에는 주 1회 정기 모임을 원칙으로 합니다. 시험 기간 전후로는 잠시 쉬어가요.
          </p>
        </div>
        <ol className="rhythm-list">
          {rhythm.map((item) => (
            <li className="reveal" key={item.title}>
              <span className="eyebrow">{item.when}</span>
              <b>{item.title}</b>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="milestones">
          <p className="eyebrow">A YEAR IN SEMICOLON</p>
          <ul>
            {milestones.map((item) => (
              <li key={item.title}>
                <i>{item.month}</i>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="block block-mint about-cta">
          <p className="eyebrow">JOIN SEMICOLON</p>
          <h2>다음 문장은<br />당신으로 이어집니다.</h2>
          <p className="subhead">개발 경험이 없어도, 전공이 아니어도 괜찮아요.</p>
          <Link className="pill pill-primary" to="/recruit">지원 안내 보기</Link>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
