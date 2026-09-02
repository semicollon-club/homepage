import { useState } from 'react'
import type { FormEvent } from 'react'
import './LoginPage.css'
import Link from '../components/Link'
import { useAuth } from '../hooks/useAuth'
import { ApiError } from '../lib/api'
import { navigate } from '../lib/navigation'

type Mode = 'login' | 'register'

function LoginPage() {
  const { user, loading, login, register, logout } = useAuth()
  const [mode, setMode] = useState<Mode>('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const switchMode = (next: Mode) => {
    setMode(next)
    setError(null)
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      if (mode === 'login') await login({ username, password })
      else await register({ username, password, displayName })
      navigate('/')
    } catch (e) {
      setError(e instanceof ApiError ? e.message : '문제가 발생했어요. 다시 시도해 주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!loading && user) {
    return (
      <main className="login">
        <p className="login-kicker"><i /> MEMBERS</p>
        <h1>이미 로그인되어 있어요.</h1>
        <p className="login-copy"><b>{user.displayName}</b>님, 반가워요.</p>
        <div className="login-actions">
          <Link className="login-btn" to="/">홈으로 <span>↗</span></Link>
          <button className="login-text-btn" onClick={() => void logout()}>로그아웃</button>
        </div>
      </main>
    )
  }

  return (
    <main className="login">
      <p className="login-kicker"><i /> MEMBERS</p>
      <h1>{mode === 'login' ? <>다시 만나서<br/><em>반가워요.</em></> : <>세미콜론의<br/><em>부원이 되어주세요.</em></>}</h1>

      <div className="login-card">
        <div className="login-tabs" role="tablist">
          <button role="tab" aria-selected={mode === 'login'} className={mode === 'login' ? 'active' : ''} onClick={() => switchMode('login')}>로그인</button>
          <button role="tab" aria-selected={mode === 'register'} className={mode === 'register' ? 'active' : ''} onClick={() => switchMode('register')}>가입하기</button>
        </div>

        <form onSubmit={onSubmit}>
          {mode === 'register' && (
            <label>
              <span>이름</span>
              <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="활동명 또는 실명" required maxLength={50} autoComplete="name" />
            </label>
          )}
          <label>
            <span>아이디</span>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="영소문자·숫자·_ 3~20자" required autoComplete="username" />
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={mode === 'register' ? '8자 이상' : ''} required autoComplete={mode === 'login' ? 'current-password' : 'new-password'} />
          </label>

          {error && <p className="login-error" role="alert">{error}</p>}

          <button className="login-btn login-submit" type="submit" disabled={submitting}>
            {submitting ? '잠시만요…' : mode === 'login' ? '로그인' : '가입하고 시작하기'}
          </button>
        </form>

        <p className="login-hint">
          {mode === 'login' ? '아직 계정이 없다면 가입하기 탭에서 만들 수 있어요.' : '부원 인증·권한은 추후 운영진 확인을 거쳐 부여될 예정이에요.'}
        </p>
      </div>
    </main>
  )
}

export default LoginPage
