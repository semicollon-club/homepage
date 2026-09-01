# 세미콜론 홈페이지 (semicollon-club/homepage)

청운대학교 인천캠퍼스 코딩 동아리 **세미콜론**의 공개 홈페이지 프로젝트입니다.

여러 부원이 각자 `git pull`로 작업을 인계하며 구조적으로 개발하는 협업 프로젝트입니다.
새로 합류했다면 아래 순서대로 읽으세요.

## 기술 스택

- **React 19** + **TypeScript**
- **Vite** (개발 서버 / 번들러)
- **oxlint** (린터)

## 빠른 시작

```bash
# 1. 저장소 클론
git clone https://github.com/semicollon-club/homepage.git
cd homepage

# 2. 의존성 설치 (Node.js 20+ 권장)
npm install

# 3. 개발 서버 실행 (기본 http://localhost:5173)
npm run dev
```

## npm 스크립트

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 (HMR) |
| `npm run build` | 타입 검사 후 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 로컬 미리보기 |
| `npm run lint` | oxlint 린트 검사 |

## 문서 (docs/)

| 문서 | 내용 |
| --- | --- |
| [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) | 개발 환경 세팅, 실행 방법, 도구 |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | 폴더 구조와 설계 규칙 |
| [docs/ROADMAP.md](docs/ROADMAP.md) | 개발 단계·로드맵·진행 추적 |
| [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) | 브랜치 전략·커밋 컨벤션·PR 규칙 |

## 협업 원칙 요약

- `main` 브랜치에 직접 push 하지 않고, 기능 브랜치 → PR → 리뷰 후 병합합니다.
- 작업 시작 전 항상 `git pull`로 최신 상태를 받습니다.
- 자세한 규칙은 [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)를 따르세요.
