import { useState } from 'react'
import EyebrowBlock from '../components/EyebrowBlock'
import RibbonCard from '../components/RibbonCard'
import { eligibility, faqs, steps } from '../data/recruit'
import './RecruitPage.css'

// 실제 부원 모집 링크가 준비되면 VITE_SEMICOLON_APPLICATION_URL에 설정하세요.
const applicationUrl = import.meta.env.VITE_SEMICOLON_APPLICATION_URL || 'https://forms.google.com/'

/** 지원 안내 앱 — 자격, 절차, 신청서 링크, FAQ */
function RecruitPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="page">
      <EyebrowBlock subtitle="개발 경험이 없어도, 전공이 아니어도 괜찮아요. 새로운 것을 만들고 싶은 마음이면 충분합니다.">
        당신의 다음 문장을 세미콜론과 함께.
      </EyebrowBlock>

      <h2 className="page-heading">이런 분을 기다려요</h2>
      <ul className="stack">
        {eligibility.map((item) => (
          <li key={item.title}>
            <RibbonCard title={item.title}>{item.text}</RibbonCard>
          </li>
        ))}
      </ul>

      <h2 className="page-heading">모집 절차</h2>
      <ol className="stack">
        {steps.map((item) => (
          <li key={item.step}>
            <RibbonCard title={`${item.step} · ${item.title}`}>{item.text}</RibbonCard>
          </li>
        ))}
      </ol>

      <section className="cta-panel" aria-label="지원서 작성">
        <p>준비됐다면, 바로 시작해요. 지원서 작성은 5분이면 충분해요.</p>
        <a href={applicationUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
          부원 모집 신청 사이트로 이동 ↗
        </a>
        <p className="cta-note">신청서 페이지가 새 창에서 열립니다.</p>
      </section>

      <h2 className="page-heading">궁금한 점이 있나요?</h2>
      <div className="faq-list">
        {faqs.map((item, index) => {
          const open = openFaq === index
          return (
            <div className="faq-item" key={item.question}>
              <h3>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenFaq(open ? null : index)}
                >
                  <span>{item.question}</span>
                  <b aria-hidden="true">{open ? '−' : '+'}</b>
                </button>
              </h3>
              <div id={`faq-answer-${index}`} className="faq-answer on-tint" hidden={!open}>
                {item.answer}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecruitPage
