import { useState } from 'react'
import './App.css'

// 실제 부원 모집 링크가 준비되면 VITE_SEMICOLON_APPLICATION_URL에 설정하세요.
const applicationUrl = import.meta.env.VITE_SEMICOLON_APPLICATION_URL || 'https://forms.google.com/'

const programs = [
  { no: '01', title: '같이 배우는 스터디', text: '처음이라도 괜찮아요. 서로의 속도를 존중하며 웹, 앱, AI를 함께 익혀요.', icon: '⌘' },
  { no: '02', title: '끝까지 만드는 프로젝트', text: '아이디어를 화면으로, 코드를 서비스로. 협업의 전 과정을 직접 경험해요.', icon: '↗' },
  { no: '03', title: '성장을 나누는 커뮤니티', text: '막혔을 때 물어볼 동료, 완성했을 때 기뻐할 팀이 곁에 있어요.', icon: '✦' },
]

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const scrollToApply = () => document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' })

  return <main id="top">
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <p className="kicker"><i /> 2026 청운대학교 교내 코딩 동아리</p>
        <h1>혼자 배우던 코딩을,<br/><em>함께 완성하는</em><br/>진짜 프로젝트 경험으로.</h1>
        <p className="hero-copy">세미콜론은 배우고, 만들고, 나누며 성장하는<br/>청운대학교 학생 개발자 커뮤니티입니다.</p>
        <div className="hero-actions"><button className="primary-btn" onClick={scrollToApply}>세미콜론 지원하기 <span>↗</span></button><a href="#about" className="text-btn">더 알아보기 <span>↓</span></a></div>
        <div className="hero-art" aria-label="코드 에디터 일러스트">
          <div className="terminal-bar"><span/><span/><span/><b>semicolon / project.ts</b></div>
          <div className="code"><p><i>01</i><b>const</b> <strong>ourStory</strong> = {'{'}</p><p><i>02</i>&nbsp;&nbsp;<span>learn:</span> <mark>'together'</mark>,</p><p><i>03</i>&nbsp;&nbsp;<span>build:</span> <mark>'for real'</mark>,</p><p><i>04</i>&nbsp;&nbsp;<span>grow:</span> <mark>'beyond'</mark>,</p><p><i>05</i>{'}'}</p></div>
          <div className="cursor" />
          <div className="float-tag tag-one">START<br/><b>WITH US</b></div><div className="float-tag tag-two">● NOW<br/><b>RECRUITING</b></div>
        </div>
        <p className="scroll-hint">SCROLL TO EXPLORE <span>↓</span></p>
      </section>

      <section className="intro section" id="about">
        <div className="section-label">01 / ABOUT US</div>
        <div className="intro-main"><h2>좋은 코드는,<br/>좋은 동료에게서<br/><span>시작됩니다.</span></h2><p>혼자서는 막막했던 한 줄의 코드도,<br/>함께라면 새로운 가능성이 됩니다.<br/>세미콜론은 기술과 사람 사이를 잇는<br/>가장 즐거운 시작점이 되고자 합니다.</p></div>
        <div className="stats"><div><b>LEARN</b><strong>배움은 가볍게</strong><span>기초부터 차근차근</span></div><div><b>BUILD</b><strong>만듦은 치열하게</strong><span>아이디어를 결과물로</span></div><div><b>GROW</b><strong>성장은 함께</strong><span>나누며 더 멀리</span></div></div>
      </section>

      <section className="program section" id="program"><div className="section-label">02 / WHAT WE DO</div><div className="program-head"><h2>코드 너머의<br/><span>경험을 만듭니다.</span></h2><p>완성도 있는 결과물과 오래 남는<br/>동료를 동시에 만드는 활동들.</p></div><div className="program-list">{programs.map(item => <article key={item.no}><div className="program-top"><span>{item.no}</span><i>{item.icon}</i></div><h3>{item.title}</h3><p>{item.text}</p><div className="line" /></article>)}</div></section>

      <section className="quote"><div className="quote-mark">“</div><p>우리는 완벽한 개발자를 찾지 않습니다.<br/><b>함께 더 나아가고 싶은 사람</b>을 기다립니다.</p><span>SEMICOLON CLUB</span></section>

      <section className="process section" id="process"><div className="section-label">03 / JOIN US</div><div className="process-head"><h2>우리의 다음 문장은<br/><span>당신으로 이어집니다.</span></h2><p>개발 경험이 없어도, 전공이 아니어도<br/>새로운 것을 만들고 싶은 마음이면 충분해요.</p></div><div className="steps"><div><span>STEP 01</span><b>지원서 작성</b><p>나를 소개하는 이야기를<br/>편하게 들려주세요.</p></div><i>→</i><div><span>STEP 02</span><b>가벼운 만남</b><p>서로를 알아가는<br/>짧고 편안한 시간이에요.</p></div><i>→</i><div><span>STEP 03</span><b>세미콜론 시작</b><p>새로운 팀원들과<br/>첫 문장을 함께 써요.</p></div></div></section>

      <section className="apply" id="apply"><div className="apply-inner"><p className="kicker"><i /> SEMICOLON RECRUITING</p><h2>당신의 다음 문장을<br/><em>세미콜론과 함께.</em></h2><p>망설임은 잠시 멈춤표로 남겨두고,<br/>우리와 함께 새로운 문장을 시작해요.</p><a href={applicationUrl} target="_blank" rel="noreferrer" className="apply-btn">부원 모집 신청 사이트로 이동 <span>↗</span></a><small>신청서 페이지가 새 창에서 열립니다.</small></div><div className="apply-symbol" aria-hidden="true">;</div></section>

      <section className="faq section"><div className="section-label">04 / FAQ</div><h2>궁금한 점이 있나요?</h2>{['개발 경험이 없어도 지원할 수 있나요?', '비전공자도 참여할 수 있나요?', '어떤 활동을 주로 하나요?'].map((question, index) => <div className="faq-item" key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>0{index + 1}</span>{question}<b>{openFaq === index ? '−' : '+'}</b></button>{openFaq === index && <p>{index === 0 ? '물론입니다. 배우려는 마음과 함께할 의지만 있다면 세미콜론이 첫걸음을 함께할게요.' : index === 1 ? '네, 전공과 무관하게 새로운 것을 만들고 싶은 청운대학교 학생이라면 누구나 환영합니다.' : '함께 공부하는 스터디부터 팀 프로젝트, 데모데이와 교류 활동까지 다양하게 이어집니다.'}</p>}</div>)}</section>
    </main>
}

export default App
