export const LOCATION_CHANGE_EVENT = 'locationchange'

export function navigate(path: string) {
  if (path === window.location.pathname) return
  window.history.pushState({}, '', path)
  window.dispatchEvent(new Event(LOCATION_CHANGE_EVENT))
}
