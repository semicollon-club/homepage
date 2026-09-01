# 프로젝트 구조와 설계 규칙

## 현재 폴더 구조

```
homepage/
├─ public/            # 정적 파일 (빌드 시 그대로 복사)
├─ src/
│  ├─ assets/         # 이미지 등 번들에 포함되는 정적 리소스
│  ├─ App.tsx         # 루트 컴포넌트
│  ├─ main.tsx        # 진입점 (ReactDOM 렌더)
│  ├─ App.css
│  └─ index.css
├─ docs/              # 협업 문서
├─ index.html         # HTML 진입점
├─ package.json
├─ tsconfig*.json     # TypeScript 설정
└─ vite.config.ts     # Vite 설정
```

## 권장 확장 구조 (기능이 늘어나면)

프로젝트가 커지면 아래처럼 역할별로 나눕니다. **처음부터 과하게 나누지 말고 필요할 때 도입**하세요.

```
src/
├─ assets/            # 이미지·폰트 등
├─ components/        # 재사용 UI 컴포넌트 (버튼, 카드 등)
├─ pages/             # 라우트 단위 페이지 (Home, About, Members ...)
├─ layouts/           # 공통 레이아웃 (헤더/푸터 포함 틀)
├─ hooks/             # 커스텀 훅
├─ lib/ 또는 utils/   # 순수 함수·유틸리티
├─ types/             # 공용 타입 정의
├─ styles/            # 전역 스타일
└─ App.tsx
```

## 네이밍 규칙

- 컴포넌트 파일: `PascalCase.tsx` (예: `MemberCard.tsx`)
- 훅 파일: `useXxx.ts` (예: `useTheme.ts`)
- 유틸/일반 모듈: `camelCase.ts`
- 폴더: `camelCase` 또는 `kebab-case` 중 하나로 팀 내 통일

## 컴포넌트 작성 규칙

- 하나의 파일에는 하나의 주요 컴포넌트를 export 합니다.
- props는 `interface` 또는 `type`으로 명시적으로 타입을 정의합니다.
- 상태·로직이 복잡해지면 커스텀 훅으로 분리합니다.

## 향후 도입 검토 항목 (결정 후 이 문서에 반영)

- 라우팅: `react-router` 도입 여부
- 스타일링 방식: 순수 CSS / CSS Modules / Tailwind / styled 중 택1
- 상태관리: 전역 상태가 필요해지면 검토 (Context / Zustand 등)
- 코드 포맷터: Prettier 도입 여부

> 위 항목은 팀 논의로 결정하고, 결정 사항을 이 문서와 ROADMAP에 기록합니다.
