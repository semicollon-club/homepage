// 조직도(/organization) 콘텐츠. 임원·부원이 바뀌면 이 파일만 수정하면 됩니다.

export interface Officer {
  name: string
  role: string
  major: string
}

export interface Member {
  name: string
  major: string
}

/** 회장·부회장 */
export const leaders: Officer[] = [
  { name: '우성현', role: '회장', major: '컴퓨터공학과' },
  { name: '엄준호', role: '부회장', major: '컴퓨터공학과' },
]

/** 임원진 */
export const staff: Officer[] = [
  { name: '민현호', role: '홍보부장', major: '컴퓨터공학과' },
  { name: '노승균', role: '총무', major: '컴퓨터공학과' },
  { name: '이준혁', role: '서기', major: '컴퓨터공학과' },
]

/** 부원 */
export const members: Member[] = [
  { name: '김동준', major: '컴퓨터공학과' },
  { name: '윤교준', major: '컴퓨터공학과' },
  { name: '안성훈', major: '컴퓨터공학과' },
  { name: '김아린', major: '컴퓨터공학과' },
  { name: '이환희', major: '컴퓨터공학과' },
  { name: '원현빈', major: '광고홍보학과' },
  { name: '정정환', major: '멀티미디어학과' },
  { name: '조수아', major: '컴퓨터공학과' },
]
