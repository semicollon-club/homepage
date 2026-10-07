import type { ReactNode } from 'react'
import type { Tint } from '../data/apps'
import './RibbonCard.css'

interface RibbonCardProps {
  title: ReactNode
  children: ReactNode
  /** 없으면 감싼 앱 창의 틴트를 따릅니다 */
  tint?: Tint
}

/** 흰 제목줄 + 틴트 본문 — Dell 의 ribbon-card. 제목은 h3 입니다 */
function RibbonCard({ title, children, tint }: RibbonCardProps) {
  return (
    <article className={tint ? `ribbon-card tint-${tint}` : 'ribbon-card'}>
      <h3 className="ribbon-title">{title}</h3>
      <div className="ribbon-body on-tint">{children}</div>
    </article>
  )
}

export default RibbonCard
