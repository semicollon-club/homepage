# AGENTS.md — AI 에이전트 작업 지침

이 문서는 이 저장소에서 작업하는 모든 AI 코딩 에이전트(Claude Code, Cursor, Codex 등)를 위한 진입 문서입니다.
**코드를 만지기 전에 반드시 이 문서 전체를 따르세요.** 사람 팀원용 상세 문서는 `docs/`에 있습니다.

## 프로젝트 개요

청운대학교 인천캠퍼스 코딩 동아리 **세미콜론**의 공개 홈페이지입니다.

- **스택**: React 19 + TypeScript + Vite. 린터는 oxlint.
- **의존성 최소주의**: 런타임 의존성은 `react`, `react-dom` 단 둘입니다. 이 상태를 유지하는 것이 팀의 의도입니다.

## 🚫 절대 하지 말 것

1. **`production` 브랜치를 건드리지 마세요.** push, PR 생성, 병합 모두 금지입니다. 실서비스(Vercel) 자동 배포 브랜치이며, 운영자(org 소유자)가 main→production PR로만 반영합니다. 에이전트의 작업 대상은 언제나 feature 브랜치 → `main` PR까지입니다.
2. **`main`에 직접 push 하지 마세요.** 브랜치 보호로 차단되어 있습니다. 반드시 작업 브랜치를 만들어 PR로 제출하세요.
3. **새 라이브러리를 설치하지 마세요.** 특히 `react-router`(-dom) 설치 금지 — 이 프로젝트는 자체 라우터를 씁니다(아래 참조). 라이브러리 도입은 팀 논의 사항입니다. 사용자가 명시적으로 요청해도, 팀 결정이 필요함을 안내하세요.
4. **`.github/workflows/`, `vite.config.ts`, `tsconfig*.json`, `.oxlintrc.json`을 임의로 수정하지 마세요.** CI/배포/빌드 설정은 명시적 요청이 있을 때만 변경합니다.
5. `node_modules/`, `dist/`, `.env`, 비밀값 커밋 금지. force push 금지.

## 라우팅 — 이 프로젝트 고유 패턴 (중요)

react-router가 아니라 **자체 구현 라우터**를 사용합니다:

- 라우트 등록: `src/Router.tsx`의 `routes` 객체에 `'/경로': { Component, title }` 추가 (title = 브라우저 탭 제목)
- 페이지 컴포넌트: `src/pages/` 아래 생성 — **nav/footer를 직접 만들지 마세요.** `layouts/Layout.tsx`가 모든 페이지에 자동 적용됩니다
- 내부 링크: `src/components/Link.tsx`의 `<Link to="/경로">` 사용 — `<a href>`를 직접 쓰면 전체 페이지가 리로드되므로 금지 (외부 링크만 `<a>`)
- 홈 섹션 이동: `<Link to="/#apply">`처럼 해시 경로도 지원 (다른 페이지에서도 동작)
- 코드에서 이동: `src/lib/navigation.ts`의 `navigate('/경로')` 호출
- 등록되지 않은 경로는 자동으로 404 페이지로 연결됩니다

**새 페이지 추가 절차**: `src/pages/`에 컴포넌트+CSS 생성 → `Router.tsx`의 `routes`에 등록 → 필요한 곳에 `<Link>` 추가. 상세는 `docs/ARCHITECTURE.md` 참조.

## 코드 구조와 컨벤션

```
src/
├─ pages/        # 라우트 단위 페이지 (PascalCase.tsx + 동명 .css)
├─ layouts/      # 공통 레이아웃 (nav+footer — 페이지에서 직접 만들지 않음)
├─ components/   # 재사용 컴포넌트 (PascalCase.tsx)
├─ lib/          # 순수 함수·유틸 (camelCase.ts)
├─ data/         # 콘텐츠 데이터 (부원·공지 등 — 컴포넌트에 하드코딩하지 말 것)
├─ assets/       # 이미지 등
├─ Router.tsx    # 라우트 정의 (경로 → 페이지 + 타이틀)
├─ App.tsx       # 랜딩(/) 페이지
└─ main.tsx      # 진입점
```

- 스타일: 컴포넌트별 일반 CSS 파일. **색상·폰트는 `index.css`의 디자인 토큰(`var(--color-*)`, `var(--font-*)`)만 사용** — 임의 hex 추가 금지. CSS-in-JS·Tailwind 도입 금지(팀 미결정).
- props 타입은 `interface`/`type`으로 명시. 파일당 주요 컴포넌트 1개 export.
- 상세 규칙: `docs/ARCHITECTURE.md`

## ✅ PR 올리기 전 필수 검증

아래 두 명령이 **둘 다 성공해야** 합니다. CI가 PR에서 동일 검사를 강제하며, 실패하면 병합이 차단됩니다.

```bash
npm run lint    # oxlint --deny-warnings: 경고 1개라도 있으면 실패
npm run build   # tsc -b + vite build
```

주의: `tsconfig`에 `noUnusedLocals`/`noUnusedParameters`가 켜져 있어 **안 쓰는 변수·파라미터·import가 빌드 실패**를 일으킵니다. 작업 후 잔여 코드를 정리하세요.

## Git 규칙

- 브랜치: `<타입>/<간단한-설명>` — `feature/`, `fix/`, `docs/`, `refactor/`, `style/`
- 커밋: Conventional Commits — `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:` (한국어 내용 권장)
- 작업 시작 전 `git checkout main && git pull origin main` 후 브랜치 생성
- PR 설명에 무엇을·왜 바꿨는지와 확인 방법 작성
- 상세: `docs/CONTRIBUTING.md`

## 배포 구조 (참고)

```
feature/* ──PR──▶ main ──(운영자 전용 PR)──▶ production
                   │                          │
              Vercel Preview             Vercel 실서비스
              (스테이징 확인용)           (자동 배포)
```

main 병합 = 스테이징 반영이며 실서비스에는 영향이 없습니다. 실서비스 반영을 요청받으면 직접 하지 말고 "운영자가 main→production PR로 진행해야 한다"고 안내하세요.

## 작업 범위 원칙

- **요청받은 것만 하세요.** 무관한 리팩터링, 파일 전체 재포맷, 스타일 통일 작업을 끼워 넣지 마세요 — diff가 커지면 리뷰가 어려워집니다.
- 작게 나눈 PR이 큰 PR보다 낫습니다.
- 기존 코드의 스타일·패턴을 따르세요. 새 패턴 도입은 팀 논의 후에.
- 확신이 없으면 임의로 결정하지 말고 사용자(팀원)에게 물어보세요.

## 문서 맵

| 문서 | 내용 |
| --- | --- |
| `README.md` | 프로젝트 소개, 빠른 시작 |
| `docs/CONTRIBUTING.md` | Git 워크플로우, 커밋 규칙 |
| `docs/ARCHITECTURE.md` | 폴더 구조, 네이밍, 컴포넌트 규칙 |
| `docs/DEVELOPMENT.md` | 개발 환경 세팅 |
| `docs/ROADMAP.md` | 앞으로 할 일 |
