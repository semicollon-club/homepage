import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { authApi } from '../lib/api'
import type { ApiUser } from '../lib/api'
import { AuthContext } from '../hooks/useAuth'
import type { AuthState } from '../hooks/useAuth'

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<ApiUser | null>(null)
  const [loading, setLoading] = useState(true)

  // 새로고침해도 세션 쿠키가 살아있으면 로그인 상태를 복원한다.
  useEffect(() => {
    let cancelled = false
    authApi
      .me()
      .then((me) => {
        if (!cancelled) setUser(me)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const value = useMemo<AuthState>(
    () => ({
      user,
      loading,
      async login(input) {
        const res = await authApi.login(input)
        setUser(res.user)
      },
      async register(input) {
        // 가입은 세션을 만들지 않으므로, 성공하면 같은 자격으로 바로 로그인한다.
        await authApi.register(input)
        const res = await authApi.login({ username: input.username, password: input.password })
        setUser(res.user)
      },
      async logout() {
        await authApi.logout()
        setUser(null)
      },
    }),
    [user, loading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
