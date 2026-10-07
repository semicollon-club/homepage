// 상태바·내려오는 패널·독에 보이는 글과 구성. 글만 고칠 때는 이 파일만 수정하면 됩니다.

/** 상태바 가운데 레드 문구 — Dell 원본의 전화번호 자리 */
export const statusCallout = '1기 상시 모집'

/** 패널의 바로가기 타일. 로그인 타일은 로그인 상태에 따라 Shade 가 맨 뒤에 따로 그립니다 */
export const shadeTilePaths = ['/about', '/organization', '/recruit']

/** 패널에서 노란색으로 강조할 타일 */
export const shadeHotPath = '/recruit'

export interface Notice {
  title: string
  text: string
  /** 누르면 열리는 앱 주소 — 카드 색은 그 앱의 틴트를 따릅니다 */
  to: string
}

/** 패널의 알림 카드 */
export const notices: Notice[] = [
  { title: '세미콜론 · 지금', text: '1기 상시 모집 중이에요. 개발 경험이 없어도 괜찮아요.', to: '/recruit' },
  { title: '정기 모임 · 매주 수요일', text: '18:00 — 20:00 · 스터디 발표와 코드 리뷰', to: '/schedule' },
]

/** 독에 고정되는 앱. 홈 버튼은 Dock 이 맨 앞에 따로 그립니다 */
export const dockPaths = ['/about', '/organization', '/recruit']
