# 프로젝트 구조와 설계 규칙

## 현재 폴더 구조

```
homepage/
├─ public/                # 정적 파일 (빌드 시 그대로 복사, favicon 등)
├─ src/
│  ├─ assets/             # 이미지 등 번들에 포함되는 정적 리소스
│  ├─ components/         # 재사용 UI 컴포넌트 (예: Link.tsx)
│  ├─ layouts/            # 공통 레이아웃 (Layout.tsx = nav + footer, 모든 페이지에 자동 적용)
│  ├─ lib/                # 순수 함수·유틸 (예: navigation.ts)
│  ├─ pages/              # 라우트 단위 페이지 (예: OrganizationPage.tsx, NotFoundPage.tsx)
│  ├─ data/               # 콘텐츠 데이터 (부원·프로젝트·공지 등, 아래 규칙 참조)
│  ├─ Router.tsx          # 라우트 정의 (경로 → 페이지 + 타이틀)
│  ├─ App.tsx             # 랜딩(/) 페이지
│  ├─ App.css             # 랜딩 스타일
│  ├─ index.css           # 전역 스타일 + 디자인 토큰
│  └─ main.tsx            # 진입점 (ReactDOM 렌더)
├─ docs/                  # 협업 문서
├─ AGENTS.md              # AI 에이전트 작업 지침
├─ index.html             # HTML 진입점
├─ vercel.json            # SPA rewrite (모든 경로 → index.html)
├─ package.json
├─ tsconfig*.json         # TypeScript 설정
└─ vite.config.ts         # Vite 설정
```

## 디자인 토큰 (index.css)

색상·폰트는 `src/index.css`의 `:root`에 CSS 변수로 정의되어 있습니다.
**스타일을 작성할 때는 hex를 직접 쓰지 말고 반드시 토큰을 사용하세요.**

| 토큰 | 용도 |
| --- | --- |
| `--color-bg` / `--color-bg-alt` | 기본 배경(크림) / 보조 섹션 배경 |
| `--color-ink` / `--color-ink-soft` | 기본 글자·다크 배경 / 보조 글자 |
| `--color-light` | 다크 배경 위 글자 |
| `--color-lime` / `--color-green` | 포인트 색 |
| `--font-sans` / `--font-mono` | 본문 / 모노(라벨·코드) 폰트 |

새 색상이 필요하면 임의 hex 대신 `index.css`에 토큰을 추가하고 이 표를 갱신하세요.
(장식용 일회성 색상 — 일러스트·터미널 아트 등 — 은 예외적으로 literal 허용)

## 새 페이지 추가 절차

1. `src/pages/`에 `PascalCase.tsx` + 동명 `.css` 생성 (nav/footer는 만들지 않음 — Layout이 자동 적용)
2. `src/Router.tsx`의 `routes`에 `'/경로': { Component, title }` 등록
3. 이동이 필요한 곳에 `<Link to="/경로">` 추가 (`components/Link.tsx`)
4. 콘텐츠 데이터가 있으면 컴포넌트에 하드코딩하지 말고 `src/data/`로 분리 (아래 참조)

## 콘텐츠 데이터 규칙 (src/data/)

부원 명단, 프로젝트 목록, 공지처럼 **"글·목록"에 해당하는 내용**은 컴포넌트 안에 하드코딩하지 않고
`src/data/<이름>.ts`에 타입과 함께 분리합니다.

```ts
// 예: src/data/notices.ts
export interface Notice { date: string; title: string; body: string }
export const notices: Notice[] = [ ... ]
```

- 이유 1: 콘텐츠만 고치는 PR이 가능해져 비개발 부원도 참여할 수 있음
- 이유 2: 추후 백엔드/DB 도입 시(ROADMAP 6단계) data 파일 → API 호출로 교체하는 자연스러운 진화 경로

## 라우팅 (자체 구현)

react-router를 쓰지 않고 `Router.tsx` + `lib/navigation.ts` + `components/Link.tsx`로 구현되어 있습니다.

- 페이지 이동: `<Link to="/organization">` 또는 코드에서 `navigate('/organization')`
- 섹션 이동: `<Link to="/#apply">` — 다른 페이지에서도 홈의 해당 섹션으로 이동 후 스크롤됩니다
- `<a href>` 직접 사용 금지 (전체 페이지 리로드 발생). 외부 링크만 `<a target="_blank">` 사용
- 라우트별 `document.title`은 `Router.tsx`의 `routes`에서 관리
- 등록되지 않은 경로는 자동으로 404 페이지(`pages/NotFoundPage.tsx`)로 연결

## 네이밍 규칙

- 컴포넌트 파일: `PascalCase.tsx` (예: `MemberCard.tsx`)
- 훅 파일: `useXxx.ts` (예: `useTheme.ts`)
- 유틸/일반 모듈·데이터: `camelCase.ts`
- 폴더: `camelCase` 또는 `kebab-case` 중 하나로 팀 내 통일

## 컴포넌트 작성 규칙

- 하나의 파일에는 하나의 주요 컴포넌트를 export 합니다.
- props는 `interface` 또는 `type`으로 명시적으로 타입을 정의합니다.
- 상태·로직이 복잡해지면 커스텀 훅으로 분리합니다.
- 스타일은 컴포넌트별 일반 CSS 파일로 작성합니다 (CSS-in-JS·Tailwind 미도입 — 팀 결정 사항).

## 향후 도입 검토 항목 (결정 후 이 문서에 반영)

- 상태관리: 전역 상태가 필요해지면 검토 (Context / Zustand 등)
- 코드 포맷터: Prettier 도입 여부
- 백엔드·DB·인증: `docs/ROADMAP.md` 6단계 실험 트랙 참조

> 위 항목은 팀 논의로 결정하고, 결정 사항을 이 문서와 ROADMAP에 기록합니다.
