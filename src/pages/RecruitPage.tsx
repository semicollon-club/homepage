import { Fragment, useState } from 'react'
import '../App.css'
import './RecruitPage.css'
import { eligibility, faqs, steps } from '../data/recruit'

// 실제 부원 모집 링크가 준비되면 VITE_SEMICOLON_APPLICATION_URL에 설정하세요.
const applicationUrl = import.meta.env.VITE_SEMICOLON_APPLICATION_URL || 'https://forms.google.com/'

function RecruitPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      <header className="recruit-head">
        <p className="kicker"><i /> SEMICOLON RECRUITING</p>
        <h1>당신의 다음 문장을<br/><em>세미콜론과 함께.</em></h1>
        <p className="recruit-copy">개발 경험이 없어도, 전공이 아니어도 괜찮아요.<br/>새로운 것을 만들고 싶은 마음이면 충분합니다.</p>
      </header>

      <section className="recruit-section">
        <div className="section-label">01 / WHO</div>
        <h2>이런 분을 기다려요</h2>
        <div className="recruit-cards">
          {eligibility.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="line" />
            </article>
          ))}
        </div>
      </section>

      <section className="recruit-section recruit-process">
        <div className="section-label">02 / HOW</div>
        <h2>모집 절차</h2>
        <div className="steps">
          {steps.map((item, index) => (
            <Fragment key={item.step}>
              {index > 0 && <i>→</i>}
              <div>
                <span>{item.step}</span>
                <b>{item.title}</b>
                <p>{item.text}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </section>

      <section className="recruit-apply">
        <div>
          <h2>준비됐다면, 바로 시작해요.</h2>
          <p>지원서 작성은 5분이면 충분해요.</p>
        </div>
        <a href={applicationUrl} target="_blank" rel="noreferrer" className="apply-btn">부원 모집 신청 사이트로 이동 <span>↗</span></a>
      </section>

      <section className="recruit-section recruit-faq">
        <div className="section-label">03 / FAQ</div>
        <h2>궁금한 점이 있나요?</h2>
        {faqs.map((item, index) => (
          <div className="faq-item" key={item.question}>
            <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
              <span>0{index + 1}</span>{item.question}<b>{openFaq === index ? '−' : '+'}</b>
            </button>
            {openFaq === index && <p>{item.answer}</p>}
          </div>
        ))}
      </section>
    </main>
  )
}

export default RecruitPage
