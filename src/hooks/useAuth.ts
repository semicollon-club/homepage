import { createContext, useContext } from 'react'
import type { ApiUser } from '../lib/api'

// 로그인 상태 컨텍스트. Provider 컴포넌트는 components/AuthProvider.tsx에 있다.
// (컴포넌트와 훅을 한 파일에 두면 oxlint의 fast-refresh 규칙에 걸린다)
export interface AuthState {
  /** 로그인한 사용자. 비로그인이면 null */
  user: ApiUser | null
  /** 최초 세션 확인(/auth/me)이 끝나기 전 true */
  loading: boolean
  login: (input: { username: string; password: string }) => Promise<void>
  register: (input: { username: string; password: string; displayName: string }) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthState | null>(null)

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth는 <AuthProvider> 안에서만 사용할 수 있습니다')
  return ctx
}
