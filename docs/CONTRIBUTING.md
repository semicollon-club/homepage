# 협업 가이드 (Contributing)

여러 부원이 함께 작업하기 위한 Git 워크플로우와 규칙입니다.
**작업 전에 반드시 이 문서를 읽고 따르세요.** (AI 에이전트는 저장소 루트의 `AGENTS.md`가 진입 문서입니다)

## 브랜치 구조 — 스테이징과 실서비스가 나뉘어 있습니다

```
feature/* ──PR──▶ main ──(운영진 전용 PR)──▶ production
                   │                           │
             Vercel Preview               semicollon.com
             (스테이징 확인용)             (실서비스 자동 배포)
```

- **`main`** = 통합·스테이징 브랜치. 병합돼도 실서비스에는 반영되지 않습니다
- **`production`** = 실서비스. 운영진(org 소유자)만 main→production PR로 반영합니다
- 백엔드 API(`api.semicollon.com`)는 별도 저장소 [semicollon-club/asahi](https://github.com/semicollon-club/asahi)의 `server/`에서 개발합니다

## 기본 원칙

- `main`·`production`에 **직접 push 하지 않습니다** (브랜치 보호로 차단됨)
- 모든 작업은 **기능 브랜치**에서 하고 **PR**로 병합합니다
- **CI 통과가 필수입니다** — PR마다 린트(경고 포함 차단)·타입체크·빌드가 자동 실행되고, 빨간불이면 병합 버튼이 막힙니다
- 작업 시작 전 항상 최신 상태를 받습니다

## 작업 흐름

```bash
# 1. 최신 main 받기
git checkout main
git pull origin main

# 2. 기능 브랜치 생성
git checkout -b feature/about-page

# 3. 작업 → PR 전에 로컬에서 CI와 같은 검사 실행
npm run lint     # 경고 1개라도 있으면 실패
npm run build    # 타입 검사 포함

# 4. 커밋·푸시 → GitHub에서 main 대상 PR 생성 → 리뷰 → 병합
```

병합되면 Vercel Preview/스테이징에서 확인할 수 있고, 운영진이 모아서 production에 릴리스합니다.

## 브랜치 이름 규칙

`<타입>/<간단한-설명>` 형식: `feature/` `fix/` `docs/` `refactor/` `style/`

## 커밋 메시지 규칙 (Conventional Commits)

`<타입>: <내용>` — `feat` `fix` `docs` `style` `refactor` `chore`

```
feat: 헤더 네비게이션 컴포넌트 추가
fix: 모바일에서 메뉴 겹치는 문제 수정
```

## Pull Request 규칙

- 제목은 커밋 규칙과 동일한 형식 권장
- 설명에 **무엇을 왜 바꿨는지**와 확인 방법을 적습니다
- 1인 1페이지 = 1브랜치 = 1PR — 작게 나눈 PR이 리뷰하기 좋습니다
- 병합 전 최소 1명 리뷰를 원칙으로 합니다 (인원이 적으면 팀 상황에 맞게 조정)

## 개발 규칙 요약 (상세는 docs/ARCHITECTURE.md)

- 새 페이지: `src/pages/`에 생성 → `Router.tsx`에 등록 — nav/footer는 Layout이 자동 적용
- 내부 이동은 `<Link>`, 색상·폰트는 `index.css`의 디자인 토큰만 사용
- 콘텐츠(명단·공지 등)는 `src/data/`로 분리
- 백엔드 호출은 `src/lib/api.ts` 경유, 로그인 상태는 `useAuth()` 사용
- 라이브러리 추가는 팀 논의 후에 (react-router 등 설치 금지 — 자체 라우터 사용)

## 충돌(conflict) 대응

- 작업 중 main이 갱신되면 내 브랜치에서 `git pull origin main`(또는 rebase)으로 먼저 최신화합니다
- 충돌 표시(`<<<<<<<`)를 열어 직접 해결한 뒤 다시 커밋하고, 혼자 어려우면 팀에 공유합니다

## 하지 말아야 할 것

- `main`·`production` 직접 push, 강제 push(`--force`)
- 리뷰 없이 대규모 변경 병합
- `node_modules`, 빌드 산출물(`dist/`), `.env` 커밋 (`.env.example`만 커밋 대상)
- 실서비스 반영을 직접 시도 — production은 운영진이 관리합니다
