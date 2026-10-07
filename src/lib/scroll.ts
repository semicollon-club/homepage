// OS 셸에서는 브라우저 창이 아니라 화면 안의 영역이 스크롤됩니다.
// 열린 앱 창 본문(data-scroll-root="app")이 있으면 그쪽, 없으면 홈 화면입니다.

export function getActiveScrollRoot(): HTMLElement | null {
  return (
    document.querySelector<HTMLElement>('[data-scroll-root="app"]') ??
    document.querySelector<HTMLElement>('[data-scroll-root="home"]')
  )
}
