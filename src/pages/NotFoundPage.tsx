import EyebrowBlock from '../components/EyebrowBlock'
import Link from '../components/Link'
import Sticker from '../components/Sticker'

/** 오류 앱 — 등록되지 않은 주소 */
function NotFoundPage() {
  return (
    <div className="page">
      <EyebrowBlock
        sticker={<Sticker tilt>404!</Sticker>}
        subtitle="주소가 바뀌었거나 잘못 입력된 것 같아요. 홈에서 다시 시작해 보세요."
      >
        이 주소에는 아직 아무것도 없어요.
      </EyebrowBlock>
      <Link to="/" className="btn btn-primary">홈으로 돌아가기</Link>
    </div>
  )
}

export default NotFoundPage
