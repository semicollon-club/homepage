import { getActiveScrollRoot } from './scroll'

export const LOCATION_CHANGE_EVENT = 'locationchange'

/**
 * 내부 페이지 이동. '/organization' 같은 경로와 '/#apply' 같은
 * 해시 포함 경로를 모두 처리합니다. (해시는 해당 섹션으로 스크롤)
 * 지금 화면과 같은 주소면 화면(앱 창·홈)을 맨 위로 올립니다.
 */
export function navigate(path: string) {
  const target = new URL(path, window.location.origin)
  const samePath = target.pathname === window.location.pathname
  if (samePath && target.hash === window.location.hash) {
    if (!target.hash) getActiveScrollRoot()?.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  window.history.pushState({}, '', path)
  window.dispatchEvent(new Event(LOCATION_CHANGE_EVENT))
}
