# 개발 환경 세팅

## 사전 요구사항

| 도구 | 권장 버전 | 확인 명령 |
| --- | --- | --- |
| Node.js | 20 LTS 이상 | `node -v` |
| npm | 10 이상 | `npm -v` |
| Git | 최신 | `git --version` |

> Node 버전은 팀 내에서 통일하는 것을 권장합니다. `nvm`(Windows는 `nvm-windows`)으로 버전을 맞추면 편합니다.

## 최초 설정

```bash
git clone https://github.com/semicollon-club/homepage.git
cd homepage
npm install
```

## 개발 서버

```bash
npm run dev
```

- 기본 주소: `http://localhost:5173`
- 저장 시 HMR(Hot Module Replacement)로 자동 반영됩니다.

## 빌드 / 미리보기

```bash
npm run build     # tsc 타입 검사 + vite 프로덕션 빌드 -> dist/
npm run preview   # dist/ 결과를 로컬 서버로 확인
```

## 린트

```bash
npm run lint
```

- 커밋/PR 전에 린트를 통과시키는 것을 원칙으로 합니다.

## 권장 에디터 세팅 (VS Code)

- 확장: **ESLint/oxc**, **Prettier**(선택), **TypeScript** 내장 사용
- 저장 시 자동 포맷을 사용한다면 팀에서 규칙을 통일하세요.

## 자주 겪는 문제

- **의존성 오류**: `node_modules`와 `package-lock.json`이 꼬였다면
  `rm -rf node_modules package-lock.json && npm install` (Windows PowerShell:
  `Remove-Item -Recurse -Force node_modules, package-lock.json; npm install`).
- **포트 충돌**: 5173 포트가 사용 중이면 Vite가 자동으로 다른 포트를 잡거나,
  `npm run dev -- --port 3000`으로 지정할 수 있습니다.
