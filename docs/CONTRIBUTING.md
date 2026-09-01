# 협업 가이드 (Contributing)

여러 부원이 함께 작업하기 위한 Git 워크플로우와 규칙입니다.
**작업 전에 반드시 이 문서를 읽고 따르세요.**

## 기본 원칙

- `main` 브랜치에 **직접 push 하지 않습니다.**
- 모든 작업은 **기능 브랜치**에서 하고, **PR(Pull Request)** 로 병합합니다.
- 작업 시작 전 항상 최신 상태를 받습니다.

## 작업 흐름

```bash
# 1. 최신 main 받기
git checkout main
git pull origin main

# 2. 기능 브랜치 생성
git checkout -b feature/about-page

# 3. 작업 후 커밋
git add .
git commit -m "feat: 동아리 소개 페이지 추가"

# 4. 원격에 푸시
git push origin feature/about-page

# 5. GitHub에서 PR 생성 -> 리뷰 -> main에 병합
```

## 브랜치 이름 규칙

`<타입>/<간단한-설명>` 형식을 씁니다.

- `feature/...` 새 기능 (예: `feature/main-page`)
- `fix/...` 버그 수정
- `docs/...` 문서 작업
- `refactor/...` 리팩터링
- `style/...` 스타일·포맷 (기능 변화 없음)

## 커밋 메시지 규칙 (Conventional Commits)

`<타입>: <내용>` 형식으로 작성합니다.

| 타입 | 용도 |
| --- | --- |
| `feat` | 새 기능 |
| `fix` | 버그 수정 |
| `docs` | 문서 |
| `style` | 포맷·세미콜론 등 (동작 변화 없음) |
| `refactor` | 리팩터링 |
| `chore` | 빌드·설정·기타 잡무 |

예시:
```
feat: 헤더 네비게이션 컴포넌트 추가
fix: 모바일에서 메뉴 겹치는 문제 수정
docs: 개발 환경 문서 보완
```

## Pull Request 규칙

- PR 제목은 커밋 규칙과 동일한 형식을 권장합니다.
- 설명에 **무엇을 왜 바꿨는지**와 확인 방법을 적습니다.
- 병합 전 **최소 1명 리뷰**를 원칙으로 합니다. (인원이 적으면 팀 상황에 맞게 조정)
- 병합 전 `npm run lint`와 `npm run build`가 통과하는지 확인합니다.

## 충돌(conflict) 대응

- 작업 중 main이 갱신되면 내 브랜치에서 `git pull origin main`(또는 rebase)으로 먼저 최신화합니다.
- 충돌이 나면 해당 파일을 열어 표시(`<<<<<<<`, `=======`, `>>>>>>>`)를 확인하며 직접 해결한 뒤 다시 커밋합니다.
- 혼자 해결이 어려우면 팀에 공유하고 함께 처리합니다.

## 하지 말아야 할 것

- `main`에 강제 push (`--force`) 금지
- 리뷰 없이 대규모 변경 병합 지양
- `node_modules`, 빌드 산출물(`dist/`) 커밋 금지 (`.gitignore`로 이미 제외됨)
