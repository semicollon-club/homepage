import type { Ref } from 'react'
import PixelIcon from './PixelIcon'
import { statusCallout } from '../data/os'
import { useClock } from '../hooks/useClock'
import type { PullDown } from '../hooks/usePullDown'
import './StatusBar.css'

interface StatusBarProps {
  ref?: Ref<HTMLButtonElement>
  shadeOpen: boolean
  onToggle: () => void
  dragHandlers: PullDown['dragHandlers']
}

/** 화면 맨 위 검정 줄 — Dell 의 top-banner. 줄 전체가 패널을 여닫는 버튼입니다 */
function StatusBar({ ref, shadeOpen, onToggle, dragHandlers }: StatusBarProps) {
  const { time } = useClock()

  return (
    <button
      ref={ref}
      type="button"
      className="status-bar on-dark"
      aria-expanded={shadeOpen}
      aria-controls="os-shade"
      aria-label={shadeOpen ? '빠른 메뉴 닫기' : '빠른 메뉴 열기'}
      onClick={onToggle}
      {...dragHandlers}
    >
      <span className="status-time" aria-hidden="true">{time}</span>
      <span className="status-callout" aria-hidden="true">{statusCallout}</span>
      <span className="status-icons" aria-hidden="true">
        <PixelIcon name="signal" size={16} />
        <PixelIcon name="battery" size={16} />
      </span>
    </button>
  )
}

export default StatusBar
