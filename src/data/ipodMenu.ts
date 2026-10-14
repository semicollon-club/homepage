import { programs } from './about'
import { eligibility } from './recruit'

export interface IpodMenuItem {
  label: string
  title: string
  description: string
  detail: string
  children: IpodSubmenuItem[]
}

export interface IpodSubmenuItem {
  label: string
  title: string
  description: string
  detail: string
}

export type ActivityAlbumId = 'study' | 'project' | 'meetup'

export interface ActivityAlbum {
  id: ActivityAlbumId
  label: string
  tagline: string
  items: ActivityAlbumItem[]
}

export interface ActivityAlbumItem {
  label: string
  cover: string
  marker: string
  description: string
}

/** iPod Cover Flow에 표시하는 활동 앨범. */
export const activityAlbums: ActivityAlbum[] = [
  {
    id: 'study',
    label: 'STUDY',
    tagline: '서로의 속도는 달라도, 언제나 함께.',
    items: [
      { label: '웹', cover: 'WEB', marker: '</>', description: '브라우저에서 만나는 서비스를 함께 만들고 다듬어요.' },
      { label: '앱', cover: 'APP', marker: '▣', description: '손안의 사용 경험을 직접 설계하고 구현해요.' },
      { label: 'AI', cover: 'AI', marker: '✦', description: '데이터와 모델을 연결해 작동하는 기능을 만들어요.' },
      { label: '임베디드', cover: 'CHIP', marker: '⌘', description: '하드웨어와 소프트웨어가 만나는 지점을 실험해요.' },
      { label: '서버', cover: 'SERVER', marker: '↔', description: '서비스를 안정적으로 이어 주는 뒷단을 설계해요.' },
      { label: '데이터베이스', cover: 'DATA', marker: '▤', description: '필요한 정보를 오래, 정확하게 쌓고 꺼내요.' },
      { label: '무한한 가능성', cover: '∞', marker: '∞', description: '아직 이름 붙지 않은 관심사도 함께 시작할 수 있어요.' },
    ],
  },
  {
    id: 'project',
    label: 'PROJECT',
    tagline: '시작부터 탄탄하게, 끝까지 완벽하게',
    items: [
      { label: 'AI 관리 에이전트: Asahi', cover: 'ASAHI', marker: '✦', description: '동아리 운영을 돕는 AI 관리 에이전트를 설계하고 만들고 있어요.' },
      { label: '홈페이지 개설 · 진행 중', cover: 'HOME', marker: '⌂', description: '세미콜론의 소식과 결과물을 담는 공식 홈페이지를 함께 완성하고 있어요.' },
      { label: '데이터베이스 구축 · 진행 중', cover: 'DATA', marker: '▤', description: '프로젝트가 이어질수록 더 단단해지는 데이터 기반을 쌓고 있어요.' },
      { label: '디스코드 링크 연결', cover: 'DISCORD', marker: '◉', description: '새 소식과 대화를 가장 빠르게 이어 줄 연결 통로를 준비하고 있어요.' },
    ],
  },
  {
    id: 'meetup',
    label: 'MEETUP',
    tagline: '서로의 아이디어가 다음 트랙이 되는 시간.',
    items: [
      { label: '데모 데이', cover: 'DEMO', marker: '▶', description: '완성도보다 과정의 배움을 공유하는 가벼운 발표 시간이에요.' },
      { label: '아이디어 스파크', cover: 'IDEA', marker: '✦', description: '작은 질문 하나에서 다음 프로젝트의 출발점을 함께 찾아요.' },
      { label: '코드 리뷰', cover: 'REVIEW', marker: '✓', description: '서로의 코드를 읽으며 더 명확한 해결 방법을 발견해요.' },
      { label: '네트워킹', cover: 'LINK', marker: '◎', description: '관심사가 맞닿는 사람과 팀을 만나 협업의 연결을 만들어요.' },
    ],
  },
]

export const ipodMenuItems: IpodMenuItem[] = [
  {
    label: 'ABOUT',
    title: '세미콜론은',
    description: '청운대학교 학생 개발자 커뮤니티',
    detail: '배우고, 만들고, 나누며 함께 성장합니다.',
    children: [
      { label: 'OUR VALUE', title: '함께 성장', description: '배움은 가볍게, 만듦은 치열하게.', detail: '서로의 속도를 존중하며 더 멀리 나아갑니다.' },
      { label: 'COMMUNITY', title: '세미콜론', description: '기술과 사람을 잇는 즐거운 시작점', detail: '청운대학교 인천캠퍼스 학생들이 함께합니다.' },
    ],
  },
  {
    label: 'ACTIVITIES',
    title: programs[0].title,
    description: programs[1].title,
    detail: '웹·앱·AI 스터디와 팀 프로젝트를 경험해요.',
    children: [
      { label: 'STUDY', title: programs[0].title, description: '웹, 앱, AI를 함께 익혀요.', detail: '처음이어도 서로의 속도에 맞춰 시작합니다.' },
      { label: 'PROJECT', title: programs[1].title, description: '아이디어를 결과물로 만듭니다.', detail: '협업의 전 과정을 직접 경험해요.' },
      { label: 'MEETUP', title: '정기 모임', description: '매주 수요일 18:00 — 20:00', detail: '발표, 프로젝트 공유, 코드 리뷰를 이어갑니다.' },
    ],
  },
  {
    label: 'JOIN US',
    title: eligibility[0].title,
    description: eligibility[2].title,
    detail: '배우려는 마음과 함께할 의지면 충분합니다.',
    children: [
      { label: 'ELIGIBILITY', title: '누구나 환영', description: '청운대학교 재학생 · 전공 무관', detail: '경험보다 배우려는 마음을 더 소중히 봅니다.' },
      { label: 'PROCESS', title: '지원 절차', description: '지원서 작성 → 가벼운 만남', detail: '새로운 팀원들과 첫 문장을 함께 시작해요.' },
      { label: 'APPLY', title: '지원 안내', description: '준비됐다면 지금 시작해요.', detail: '지원서 작성은 5분이면 충분합니다.' },
    ],
  },
]
