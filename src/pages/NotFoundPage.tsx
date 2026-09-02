import './NotFoundPage.css'
import Link from '../components/Link'

function NotFoundPage() {
  return (
    <main className="notfound">
      <p className="notfound-kicker"><i /> 404 NOT FOUND</p>
      <h1>이 주소에는<br /><em>아직 아무것도 없어요.</em></h1>
      <p className="notfound-copy">주소가 바뀌었거나 잘못 입력된 것 같아요.<br />홈에서 다시 시작해 보세요.</p>
      <Link className="notfound-btn" to="/">홈으로 돌아가기 <span>↗</span></Link>
    </main>
  )
}

export default NotFoundPage
