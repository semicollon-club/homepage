import { FormEvent, useState } from 'react'
import './App.css'

const news = [
  ['테크', '일상에 스며든 AI, 더 편리해진 오늘의 발견', '테크인사이트 · 2시간 전', '✦', 'violet'],
  ['라이프', '햇살 좋은 오후, 우리 동네 산책 코스', '매거진 M · 3시간 전', '☀', 'orange'],
  ['경제', '알기 쉽게 정리한 이번 주 주요 이슈', '데일리 비즈 · 4시간 전', '↗', 'blue'],
  ['스포츠', '주말을 뜨겁게 달군 경기의 순간들', '스포츠 나우 · 5시간 전', '◉', 'green'],
]

function App() {
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState('')
  const [activeTab, setActiveTab] = useState('뉴스')
  const select = (name: string) => setNotice(`${name} 서비스를 선택했어요.`)
  const search = (event: FormEvent) => { event.preventDefault(); setNotice(query.trim() ? `“${query.trim()}” 검색 결과를 준비하고 있어요.` : '검색어를 입력해 주세요.') }
  return <div className="portal-shell">
    <header className="topbar"><div className="topbar-inner"><a className="brand" href="#top">NAVER</a><nav><button onClick={() => select('네이버페이')}>Pay</button><button onClick={() => select('알림')}>알림</button><button className="menu-button" onClick={() => select('전체 메뉴')}>☰</button></nav></div></header>
    <main id="top">
      <section className="hero-area"><form className="searchbox" onSubmit={search}><label className="sr-only" htmlFor="search">검색</label><input id="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="궁금한 것을 검색해 보세요" />{query && <button className="clear" type="button" onClick={() => setQuery('')}>×</button>}<button className="search-submit" aria-label="검색">⌕</button></form><div className="trendline"><span>실시간 이슈</span><b>1</b> AI 시대의 일하는 방식 <span>⌄</span></div>{notice && <p className="notice" role="status">{notice}</p>}</section>
      <section className="quick-links">{[['메일','✉'],['카페','☕'],['블로그','B'],['쇼핑','▣'],['뉴스','▤'],['증권','₩'],['지도','⌖'],['웹툰','▧'],['치지직','▶'],['더보기','⋯']].map(([name, icon]) => <button key={name} onClick={() => select(name)}><i>{icon}</i><span>{name}</span></button>)}</section>
      <div className="content-grid"><section className="feed card"><div className="section-heading"><div><span className="eyebrow">NEWS STAND</span><h1>오늘의 뉴스</h1></div><div className="heading-actions"><button onClick={() => select('뉴스 목록')}>☷</button><button onClick={() => select('뉴스 그리드')}>▦</button></div></div><div className="headline"><strong>주요 언론사</strong><span>오늘 꼭 알아야 할 소식들을 한눈에 만나보세요.</span><button onClick={() => select('언론사 전체')}>전체 보기 →</button></div><div className="tabs">{['뉴스','연예','스포츠','경제'].map(tab => <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>{tab}</button>)}</div><div className="news-grid">{news.map(([tag, title, source, icon, tone]) => <article className="news-card" key={title}><div className={`news-image ${tone}`}>{icon}</div><div className="news-copy"><span className="tag">{tag}</span><h2>{title}</h2><p>{source}</p></div></article>)}</div></section>
      <aside className="sidebar"><section className="login-card card"><p>네이버를 더 편리하게 이용하세요</p><button className="login" onClick={() => select('로그인')}>N <span>네이버 로그인</span></button><div><button onClick={() => select('아이디 찾기')}>아이디 찾기</button><button onClick={() => select('비밀번호 찾기')}>비밀번호 찾기</button><button onClick={() => select('회원가입')}>회원가입</button></div></section><section className="weather-card card"><div><span className="eyebrow">WEATHER</span><button onClick={() => select('날씨 위치')}>서울 강남구⌄</button></div><div className="weather-main"><span>☀</span><strong>22°</strong><small>맑음<br/><em>체감 21°</em></small></div><div className="weather-meta"><span>미세먼지 <b>좋음</b></span><span>습도 48%</span></div></section><section className="promo card"><span>새로워진 네이버 앱</span><strong>나에게 꼭 맞는<br/>하루를 만나보세요</strong><button onClick={() => select('앱 자세히 보기')}>자세히 보기 →</button><i>n</i></section></aside></div>
    </main><footer>네이버를 더 편리하게 이용하는 방법 <button onClick={() => select('서비스 안내')}>서비스 안내 →</button></footer>
  </div>
}
export default App
