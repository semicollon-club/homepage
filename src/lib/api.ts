// 백엔드(web-api) 호출 클라이언트.
// 세션은 httpOnly 쿠키로 오가므로 모든 요청에 credentials: 'include'가 필수다.
// 로컬 개발에서 백엔드도 로컬로 띄웠다면 .env에 VITE_API_URL=http://localhost:8788 설정.
export const API_URL: string = import.meta.env.VITE_API_URL || 'https://api.semicollon.com'

export interface ApiUser {
  id: string
  username: string
  displayName: string
}

export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response
  try {
    res = await fetch(`${API_URL}${path}`, {
      credentials: 'include',
      headers: init?.body ? { 'Content-Type': 'application/json' } : undefined,
      ...init,
    })
  } catch {
    throw new ApiError('서버에 연결할 수 없어요. 잠시 후 다시 시도해 주세요.', 0)
  }
  const body = (await res.json().catch(() => ({}))) as { error?: string }
  if (!res.ok) throw new ApiError(body.error ?? '요청에 실패했어요.', res.status)
  return body as T
}

export const authApi = {
  register(input: { username: string; password: string; displayName: string }) {
    return request<{ user: ApiUser }>('/auth/register', { method: 'POST', body: JSON.stringify(input) })
  },
  login(input: { username: string; password: string }) {
    return request<{ user: ApiUser }>('/auth/login', { method: 'POST', body: JSON.stringify(input) })
  },
  logout() {
    return request<{ ok: boolean }>('/auth/logout', { method: 'POST' })
  },
  /** 로그인 상태 조회. 비로그인이면 서버가 200 + user:null 을 반환한다.
   *  (구버전 백엔드의 401, 서버 미가동(0)도 비로그인으로 처리 — 배포 순서 무관하게 안전) */
  async me(): Promise<ApiUser | null> {
    try {
      const res = await request<{ user: ApiUser | null }>('/auth/me')
      return res.user
    } catch (e) {
      if (e instanceof ApiError && (e.status === 401 || e.status === 0)) return null
      throw e
    }
  },
}
