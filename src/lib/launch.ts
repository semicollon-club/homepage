// 앱 창이 "누른 아이콘 자리에서" 커지도록, 마지막으로 누른 링크의 위치를 잠깐 기억합니다.
// Layout 이 링크 클릭을 가로채 기록하고, AppWindow 가 열릴 때 한 번 꺼내 씁니다.

export interface LaunchOrigin {
  /** 화면(viewport) 기준 좌표 */
  x: number
  y: number
}

/** 클릭과 앱 열림 사이가 이보다 길면(예: 한참 뒤 뒤로가기) 위치를 쓰지 않습니다 */
const MAX_AGE_MS = 1000

let pending: { origin: LaunchOrigin; at: number } | null = null

export function setLaunchOrigin(element: Element) {
  const rect = element.getBoundingClientRect()
  pending = {
    origin: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
    at: performance.now(),
  }
}

export function takeLaunchOrigin(): LaunchOrigin | null {
  const entry = pending
  pending = null
  if (!entry || performance.now() - entry.at > MAX_AGE_MS) return null
  return entry.origin
}
