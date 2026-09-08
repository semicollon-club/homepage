// 동아리 소개(/about) 페이지 콘텐츠. 글만 고칠 때는 이 파일만 수정하면 됩니다.

export interface Value {
  label: string
  title: string
  text: string
}

export interface Program {
  no: string
  title: string
  text: string
}

export interface Rhythm {
  when: string
  title: string
  text: string
}

/** 01 ABOUT US — 동아리가 지향하는 세 가지 */
export const values: Value[] = [
  { label: 'LEARN', title: '배움은 가볍게', text: '기초부터 차근차근' },
  { label: 'BUILD', title: '만듦은 치열하게', text: '아이디어를 결과물로' },
  { label: 'GROW', title: '성장은 함께', text: '나누며 더 멀리' },
]

/** 02 WHAT WE DO — 주요 활동 */
export const programs: Program[] = [
  { no: '01', title: '같이 배우는 스터디', text: '처음이라도 괜찮아요. 서로의 속도를 존중하며 웹, 앱, AI를 함께 익혀요.' },
  { no: '02', title: '끝까지 만드는 프로젝트', text: '아이디어를 화면으로, 코드를 서비스로. 협업의 전 과정을 직접 경험해요.' },
  { no: '03', title: '성장을 나누는 커뮤니티', text: '막혔을 때 물어볼 동료, 완성했을 때 기뻐할 팀이 곁에 있어요.' },
]

/** 03 RHYTHM — 실제 활동 주기. 회칙 제18조·연중행사계획 기준입니다. */
export const rhythm: Rhythm[] = [
  { when: '매주 수요일 18:00 — 20:00', title: '정기 모임', text: '스터디 발표와 프로젝트 공유, 서로의 코드를 함께 읽는 코드 리뷰까지.' },
  { when: '월 1회', title: '기술 세미나', text: '한 명이 깊게 파고든 주제를 모두에게 나누는 시간이에요.' },
  { when: '스터디별 주 1회', title: '스터디 모임', text: '알고리즘·웹·게임·AI 등 관심사가 맞는 사람끼리 자율적으로 모여요.' },
]

/** 연중 주요 일정 */
export const milestones = [
  { month: '03 · 09', title: '신입 환영회' },
  { month: '05', title: '교내 미니 해커톤' },
  { month: '06 · 12', title: '프로젝트 발표회' },
  { month: '07 — 08', title: '하계 집중 스터디' },
  { month: '09 — 11', title: '외부 해커톤 · 공모전' },
  { month: '10', title: '연합 동아리 교류전' },
]
