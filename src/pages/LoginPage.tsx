import { useState } from 'react'
import type { FormEvent } from 'react'
import EyebrowBlock from '../components/EyebrowBlock'
import Link from '../components/Link'
import { useAuth } from '../hooks/useAuth'
import { ApiError } from '../lib/api'
import { navigate } from '../lib/navigation'
import './LoginPage.css'

type Mode = 'login' | 'register'

/** 로그인 앱 — 부원 로그인·가입 (인증 로직은 useAuth 그대로) */
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
      <div className="page">
        <EyebrowBlock subtitle={`${user.displayName}님, 반가워요.`}>이미 로그인되어 있어요.</EyebrowBlock>
        <div className="auth-actions">
          <Link to="/" className="btn btn-primary">홈으로</Link>
          <button type="button" className="btn btn-secondary" onClick={() => void logout()}>로그아웃</button>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <EyebrowBlock>{mode === 'login' ? '다시 만나서 반가워요.' : '세미콜론의 부원이 되어주세요.'}</EyebrowBlock>

      <div className="auth-card">
        <div className="auth-tabs" role="tablist" aria-label="로그인 방식">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'login'}
            className={mode === 'login' ? 'btn btn-primary' : 'btn btn-secondary'}
            onClick={() => switchMode('login')}
          >
            로그인
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'register'}
            className={mode === 'register' ? 'btn btn-primary' : 'btn btn-secondary'}
            onClick={() => switchMode('register')}
          >
            가입하기
          </button>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
          {mode === 'register' && (
            <label className="auth-field">
              <span>이름</span>
              <input
                className="text-input"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="활동명 또는 실명"
                required
                maxLength={50}
                autoComplete="name"
              />
            </label>
          )}
          <label className="auth-field">
            <span>아이디</span>
            <input
              className="text-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="영소문자·숫자·_ 3~20자"
              required
              autoComplete="username"
            />
          </label>
          <label className="auth-field">
            <span>비밀번호</span>
            <input
              className="text-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === 'register' ? '8자 이상' : ''}
              required
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            />
          </label>

          {error && <p className="auth-error" role="alert">{error}</p>}

          <button className="btn btn-primary auth-submit" type="submit" disabled={submitting}>
            {submitting ? '잠시만요…' : mode === 'login' ? '로그인' : '가입하고 시작하기'}
          </button>
        </form>

        <p className="auth-hint">
          {mode === 'login'
            ? '아직 계정이 없다면 가입하기 탭에서 만들 수 있어요.'
            : '부원 인증·권한은 추후 운영진 확인을 거쳐 부여될 예정이에요.'}
        </p>
      </div>
    </div>
  )
}

export default LoginPage
