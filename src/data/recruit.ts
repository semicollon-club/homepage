// 가입 안내 페이지 콘텐츠. 글만 고칠 때는 이 파일만 수정하면 됩니다.

export interface RecruitStep {
  step: string
  title: string
  text: string
}

export interface RecruitFaq {
  question: string
  answer: string
}

/** 모집 대상·자격 */
export const eligibility = [
  { title: '청운대학교 재학생', text: '인천캠퍼스에 다니고 있다면 학년과 관계없이 지원할 수 있어요.' },
  { title: '전공 무관', text: '컴퓨터공학이 아니어도 괜찮아요. 광고홍보·멀티미디어 등 다양한 전공의 부원이 함께하고 있어요.' },
  { title: '경험 무관', text: '코딩이 처음이어도 환영해요. 배우려는 마음과 함께할 의지면 충분합니다.' },
]

/** 모집 절차 */
export const steps: RecruitStep[] = [
  { step: 'STEP 01', title: '지원서 작성', text: '나를 소개하는 이야기를 편하게 들려주세요.' },
  { step: 'STEP 02', title: '가벼운 만남', text: '서로를 알아가는 짧고 편안한 시간이에요.' },
  { step: 'STEP 03', title: '세미콜론 시작', text: '새로운 팀원들과 첫 문장을 함께 써요.' },
]

/** 자주 묻는 질문 */
export const faqs: RecruitFaq[] = [
  { question: '개발 경험이 없어도 지원할 수 있나요?', answer: '물론입니다. 배우려는 마음과 함께할 의지만 있다면 세미콜론이 첫걸음을 함께할게요.' },
  { question: '비전공자도 참여할 수 있나요?', answer: '네, 전공과 무관하게 새로운 것을 만들고 싶은 청운대학교 학생이라면 누구나 환영합니다.' },
  { question: '어떤 활동을 주로 하나요?', answer: '함께 공부하는 스터디부터 팀 프로젝트, 데모데이와 교류 활동까지 다양하게 이어집니다.' },
  { question: '모집 시기는 언제인가요?', answer: '주로 학기 초에 모집하며, 정확한 일정은 홈페이지와 SNS 공지로 안내해요.' },
  { question: '회비가 있나요?', answer: '운영 방식에 따라 달라질 수 있어 모집 공지에서 함께 안내해요. 궁금한 점은 지원 전에 편하게 문의해 주세요.' },
]
