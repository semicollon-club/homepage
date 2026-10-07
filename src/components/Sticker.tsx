import type { ReactNode } from 'react'
import './Sticker.css'

interface StickerProps {
  children: ReactNode
  /** 테이프로 붙인 것처럼 살짝 기울입니다 (NEW! 스티커) */
  tilt?: boolean
}

/** 노란 스티커 배지 — Dell 의 buy-a-dell / new-burst */
function Sticker({ children, tilt = false }: StickerProps) {
  return <span className={tilt ? 'sticker is-tilted' : 'sticker'}>{children}</span>
}

export default Sticker
