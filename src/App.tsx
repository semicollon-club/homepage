import { useState } from 'react'
import './App.css'
import Link from './components/Link'

// 실제 부원 모집 링크가 준비되면 VITE_SEMICOLON_APPLICATION_URL에 설정하세요.
const applicationUrl = import.meta.env.VITE_SEMICOLON_APPLICATION_URL || 'https://forms.google.com/'

// 동아리 소개(ABOUT)와 활동(WHAT WE DO) 본문은 /about 페이지로 옮겼습니다.
// 콘텐츠는 src/data/about.ts, 화면은 src/pages/AboutPage.tsx 를 보세요.

const steps = [
  { label: 'STEP 01', title: '지원서 작성', text: '나를 소개하는 이야기를 편하게 들려주세요.' },
  { label: 'STEP 02', title: '가벼운 만남', text: '서로를 알아가는 짧고 편안한 시간이에요.' },
  { label: 'STEP 03', title: '세미콜론 시작', text: '새로운 팀원들과 첫 문장을 함께 써요.' },
]

const faqs = [
  { q: '개발 경험이 없어도 지원할 수 있나요?', a: '물론입니다. 배우려는 마음과 함께할 의지만 있다면 세미콜론이 첫걸음을 함께할게요.' },
  { q: '비전공자도 참여할 수 있나요?', a: '네, 전공과 무관하게 새로운 것을 만들고 싶은 청운대학교 학생이라면 누구나 환영합니다.' },
  { q: '어떤 활동을 주로 하나요?', a: '함께 공부하는 스터디부터 팀 프로젝트, 데모데이와 교류 활동까지 다양하게 이어집니다.' },
]

const marqueeItems = ['STUDY', 'SIDE PROJECT', 'CODE REVIEW', 'HACKATHON', 'ALGORITHM', 'WEB', 'AI', 'DEMO DAY']

/* 인용 문장. 어절 단위로 감싸 스크롤에 따라 차례로 밝아지게 합니다.
   줄 구분을 배열로 두는 이유는 CSS 에서 :nth-child 로 줄마다 구간을
   지정하기 때문입니다 (<br> 를 넣으면 인덱스가 밀립니다). */
const quoteLines: { text: string; strong?: boolean }[][] = [
  [{ text: '우리는' }, { text: '완벽한' }, { text: '개발자를' }, { text: '찾지' }, { text: '않습니다.' }],
  [
    { text: '함께', strong: true }, { text: '더', strong: true }, { text: '나아가고', strong: true },
    { text: '싶은', strong: true }, { text: '사람을', strong: true }, { text: '기다립니다.' },
  ],
]

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const scrollToApply = () => document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main id="top" className="ds-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">2026 · CHEONGWOON UNIV · CODING CLUB</p>
          <h1>
            혼자 배우던 코딩을,<br />함께 완성하는<br />진짜 프로젝트 경험으로.
          </h1>
          <p className="lead">
            세미콜론은 배우고, 만들고, 나누며 성장하는<br />청운대학교 학생 개발자 커뮤니티입니다.
          </p>
          <div className="cta-row">
            <button className="pill pill-primary" onClick={scrollToApply}>세미콜론 지원하기</button>
            <Link className="pill pill-tertiary" to="/about">세미콜론 알아보기 →</Link>
          </div>
        </div>

        <div className="hero-mock" aria-label="코드 에디터 일러스트">
          <div className="mock-bar"><span /><span /><span /><b>semicolon / project.ts</b></div>
          <div className="mock-code">
            <p><i>01</i><b>const</b> <strong>ourStory</strong> = {'{'}</p>
            <p><i>02</i>&nbsp;&nbsp;<span>learn:</span> <mark>'together'</mark>,</p>
            <p><i>03</i>&nbsp;&nbsp;<span>build:</span> <mark>'for real'</mark>,</p>
            <p><i>04</i>&nbsp;&nbsp;<span>grow:</span> <mark>'beyond'</mark>,</p>
            <p><i>05</i>{'}'}</p>
          </div>
          <div className="sticky-note note-one">START<br /><b>WITH US</b></div>
          <div className="sticky-note note-two">● NOW<br /><b>RECRUITING</b></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((pass) => (
            <span className="marquee-group" key={pass}>
              {marqueeItems.map((item) => <i key={item}>{item}</i>)}
            </span>
          ))}
        </div>
      </div>

      {/* 소개·활동 본문은 /about 으로 분리했습니다. 여기에는 요약과 링크만 둡니다.
          id="about" 은 기존 /#about 딥링크가 깨지지 않도록 남겨둡니다. */}
      <section className="section about-teaser" id="about">
        <p className="eyebrow">01 — ABOUT US</p>
        <div className="section-head reveal">
          <h2>좋은 코드는,<br />좋은 동료에게서 시작됩니다.</h2>
          <p className="subhead">
            혼자서는 막막했던 한 줄의 코드도, 함께라면 새로운 가능성이 됩니다.
            우리가 어떤 마음으로 모이고 무엇을 만드는지 소개 페이지에 담았어요.
          </p>
        </div>
        <Link className="pill pill-primary" to="/about">동아리 소개 보기 →</Link>
      </section>

      <section className="section quote-section">
        <div className="quote-track">
          <div className="block block-navy quote-block">
            <p className="eyebrow">SEMICOLON CLUB</p>
            <h2>
              {quoteLines.map((line, lineIndex) => (
                <span className="quote-line" key={lineIndex}>
                  {line.map((word) => (
                    <span className={word.strong ? 'quote-word strong' : 'quote-word'} key={word.text}>
                      {word.text}
                    </span>
                  ))}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <p className="eyebrow">03 — JOIN US</p>
        <div className="section-head reveal">
          <h2>우리의 다음 문장은<br />당신으로 이어집니다.</h2>
          <p className="subhead">
            개발 경험이 없어도, 전공이 아니어도 새로운 것을 만들고 싶은 마음이면 충분해요.
          </p>
        </div>
        <ol className="steps">
          {steps.map((item) => (
            <li className="reveal" key={item.label}>
              <span className="eyebrow">{item.label}</span>
              <b>{item.title}</b>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" id="apply">
        <div className="promo-banner reveal">
          <p>2026학년도 1학기 신입 부원 모집이 진행 중입니다.</p>
          <a className="pill pill-magenta" href={applicationUrl} target="_blank" rel="noreferrer">지금 신청하기</a>
        </div>
        <div className="block block-coral apply-block">
          <p className="eyebrow">SEMICOLON RECRUITING</p>
          <h2>당신의 다음 문장을<br />세미콜론과 함께.</h2>
          <p className="subhead">망설임은 잠시 멈춤표로 남겨두고, 우리와 함께 새로운 문장을 시작해요.</p>
          <a className="pill pill-primary" href={applicationUrl} target="_blank" rel="noreferrer">부원 모집 신청 사이트로 이동</a>
          <small>신청서 페이지가 새 창에서 열립니다.</small>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="block block-lime faq-block">
          <p className="eyebrow">04 — FAQ</p>
          <h2>궁금한 점이 있나요?</h2>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <div className="faq-item" key={item.q}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                  <span>{item.q}</span>
                  <b>{openFaq === index ? '−' : '+'}</b>
                </button>
                {openFaq === index && <p>{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
