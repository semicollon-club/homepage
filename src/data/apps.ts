import type { PixelIconName } from '../components/PixelIcon'

// OS 셸의 앱 목록. 홈 화면 아이콘·독·패널 타일·앱 창 제목줄이 모두 여기서 나옵니다.
// 새 앱(페이지)을 만들면 Router.tsx 의 routes 와 함께 여기에도 등록하세요.

export type Tint = 'olive' | 'sage' | 'salmon' | 'peach' | 'lime' | 'sky' | 'steel' | 'periwinkle'

export interface AppInfo {
  /** 아이콘 아래·제목줄에 보이는 이름 */
  label: string
  /** 주소 — Router.tsx 의 routes 키와 같아야 합니다 */
  path: string
  icon: PixelIconName
  /** 앱마다 하나. 아이콘 타일·제목 블록·리본 본문이 이 색을 씁니다 */
  tint: Tint
}

/** 홈 화면 아이콘 순서 */
export const apps: AppInfo[] = [
  { label: '소개', path: '/about', icon: 'about', tint: 'salmon' },
  { label: '활동', path: '/activities', icon: 'activities', tint: 'sage' },
  { label: '일정', path: '/schedule', icon: 'schedule', tint: 'sky' },
  { label: '조직도', path: '/organization', icon: 'organization', tint: 'steel' },
  { label: '지원 안내', path: '/recruit', icon: 'recruit', tint: 'peach' },
  { label: '로그인', path: '/login', icon: 'login', tint: 'lime' },
]

/** 등록되지 않은 주소에서 열리는 오류 앱 */
export const notFoundApp: AppInfo = { label: '오류', path: '', icon: 'error', tint: 'periwinkle' }

/** 주소로 앱 찾기. 없으면 오류 앱 */
export function findApp(path: string): AppInfo {
  return apps.find((app) => app.path === path) ?? notFoundApp
}
