import type { ReactNode } from 'react'
import type { Tint } from '../data/apps'
import './EyebrowBlock.css'

interface EyebrowBlockProps {
  children: ReactNode
  /** 없으면 감싼 앱 창의 틴트를 따릅니다 */
  tint?: Tint
  /** 제목 단계. 홈은 h1, 앱 안에서는 제목줄이 h1 이라 h2 */
  as?: 'h1' | 'h2'
  subtitle?: ReactNode
  /** 오른쪽 위에 붙는 스티커 */
  sticker?: ReactNode
}

/** 틴트 면 위의 굵은 디스플레이 제목 — Dell 의 section-eyebrow */
function EyebrowBlock({ children, tint, as: Heading = 'h2', subtitle, sticker }: EyebrowBlockProps) {
  return (
    <div className={tint ? `eyebrow-block tint-${tint}` : 'eyebrow-block'}>
      <Heading className="eyebrow-title">{children}</Heading>
      {subtitle && <p className="eyebrow-subtitle">{subtitle}</p>}
      {sticker}
    </div>
  )
}

export default EyebrowBlock
