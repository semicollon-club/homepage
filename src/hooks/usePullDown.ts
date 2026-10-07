import { useCallback, useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent, RefObject } from 'react'
import { getActiveScrollRoot } from '../lib/scroll'

// 내려오는 패널의 열림 상태와 끌기 제스처.
// - 상태바·손잡이: 포인터로 끌기 (마우스·터치·펜), 누르면 여닫기
// - 화면 맨 위에서: 휠을 위로 굴리거나 터치로 아래로 당기면 열기
// - 열려 있을 때: Esc, 패널 위에서 휠을 아래로 굴리면 닫기

/** 패널 높이의 이 비율만큼 움직이면 열림↔닫힘이 바뀝니다 */
const SNAP_RATIO = 0.2
/** 이보다 적게 움직이면 끌기가 아니라 누르기로 봅니다 (px) */
const DRAG_SLOP = 4
/** 휠이 이만큼 멈추면 손을 뗀 것으로 봅니다 (ms) */
const WHEEL_SETTLE_MS = 160
/** 끌기를 끝낸 직후 따라오는 click 은 무시합니다 (ms) */
const CLICK_GUARD_MS = 400
/** 휠이 줄 단위(deltaMode=1)로 올 때 한 줄의 높이 (px) */
const LINE_HEIGHT = 16

export interface PullDown {
  open: boolean
  /** 끄는 중인 패널이 내려온 거리(px). 끌고 있지 않으면 null */
  pull: number | null
  setOpen: (open: boolean) => void
  /** 상태바·손잡이 클릭용. 끌기 직후의 클릭은 무시합니다 */
  toggle: () => void
  /** 상태바·손잡이에 그대로 펼쳐 붙이는 포인터 핸들러 */
  dragHandlers: {
    onPointerDown: (event: ReactPointerEvent<HTMLElement>) => void
    onPointerMove: (event: ReactPointerEvent<HTMLElement>) => void
    onPointerUp: () => void
    onPointerCancel: () => void
  }
}

export function usePullDown(
  shadeRef: RefObject<HTMLElement | null>,
  areaRef: RefObject<HTMLElement | null>,
): PullDown {
  const [open, setOpen] = useState(false)
  const [pull, setPull] = useState<number | null>(null)
  const openRef = useRef(open)
  const drag = useRef<{ startY: number; startPull: number; lastPull: number; moved: boolean } | null>(null)
  const lastDragEnd = useRef(-Infinity)

  useEffect(() => {
    openRef.current = open
  }, [open])

  const clampPull = useCallback(
    (value: number) => Math.min(Math.max(value, 0), shadeRef.current?.offsetHeight ?? 0),
    [shadeRef],
  )

  /** 손을 뗀 위치로 열지 닫을지 정하고 끌기 상태를 끝냅니다 */
  const settle = useCallback(
    (value: number, startedOpen: boolean) => {
      const height = shadeRef.current?.offsetHeight ?? 0
      const nextOpen = startedOpen ? value > height * (1 - SNAP_RATIO) : value > height * SNAP_RATIO
      setPull(null)
      setOpen(nextOpen)
    },
    [shadeRef],
  )

  const onPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      event.currentTarget.setPointerCapture(event.pointerId)
      const startPull = openRef.current ? (shadeRef.current?.offsetHeight ?? 0) : 0
      drag.current = { startY: event.clientY, startPull, lastPull: startPull, moved: false }
    },
    [shadeRef],
  )

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      const current = drag.current
      if (!current) return
      const delta = event.clientY - current.startY
      if (!current.moved && Math.abs(delta) < DRAG_SLOP) return
      current.moved = true
      current.lastPull = clampPull(current.startPull + delta)
      setPull(current.lastPull)
    },
    [clampPull],
  )

  const endDrag = useCallback(() => {
    const current = drag.current
    drag.current = null
    if (!current?.moved) return
    lastDragEnd.current = performance.now()
    settle(current.lastPull, current.startPull > 0)
  }, [settle])

  const toggle = useCallback(() => {
    if (performance.now() - lastDragEnd.current < CLICK_GUARD_MS) return
    setOpen((value) => !value)
  }, [])

  // 화면 맨 위에서 휠·터치로 당겨 열기. 기본 동작을 막아야 해서 직접 등록합니다
  // (React 의 onWheel·onTouchMove 는 passive 라 preventDefault 가 듣지 않음).
  useEffect(() => {
    const area = areaRef.current
    if (!area) return
    let wheelPull = 0
    let wheelTimer = 0
    let touchStartY: number | null = null
    let touchPull = 0

    const atTop = () => (getActiveScrollRoot()?.scrollTop ?? 0) <= 0

    const onWheel = (event: WheelEvent) => {
      if (openRef.current) return
      if (wheelPull === 0 && (event.deltaY >= 0 || !atTop())) return
      event.preventDefault()
      const delta = event.deltaMode === WheelEvent.DOM_DELTA_LINE ? event.deltaY * LINE_HEIGHT : event.deltaY
      wheelPull = clampPull(wheelPull - delta)
      setPull(wheelPull)
      window.clearTimeout(wheelTimer)
      wheelTimer = window.setTimeout(() => {
        settle(wheelPull, false)
        wheelPull = 0
      }, WHEEL_SETTLE_MS)
    }

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = !openRef.current && atTop() ? event.touches[0].clientY : null
      touchPull = 0
    }

    const onTouchMove = (event: TouchEvent) => {
      if (touchStartY === null) return
      const delta = event.touches[0].clientY - touchStartY
      if (touchPull === 0 && delta <= 0) {
        touchStartY = null // 위로 밀었으면 평소처럼 스크롤합니다
        return
      }
      event.preventDefault()
      touchPull = clampPull(delta)
      setPull(touchPull)
    }

    const onTouchEnd = () => {
      if (touchStartY === null) return
      touchStartY = null
      if (touchPull > 0) settle(touchPull, false)
    }

    area.addEventListener('wheel', onWheel, { passive: false })
    area.addEventListener('touchstart', onTouchStart, { passive: true })
    area.addEventListener('touchmove', onTouchMove, { passive: false })
    area.addEventListener('touchend', onTouchEnd)
    area.addEventListener('touchcancel', onTouchEnd)
    return () => {
      window.clearTimeout(wheelTimer)
      area.removeEventListener('wheel', onWheel)
      area.removeEventListener('touchstart', onTouchStart)
      area.removeEventListener('touchmove', onTouchMove)
      area.removeEventListener('touchend', onTouchEnd)
      area.removeEventListener('touchcancel', onTouchEnd)
    }
  }, [areaRef, clampPull, settle])

  // 열려 있을 때: Esc 로 닫기, 패널 위에서 휠을 아래로 굴리면 닫기 (패널 안이 더 스크롤되지 않을 때만)
  useEffect(() => {
    if (!open) return
    const shade = shadeRef.current
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onWheel = (event: WheelEvent) => {
      if (!shade || event.deltaY <= 0) return
      const atBottom = shade.scrollTop + shade.clientHeight >= shade.scrollHeight - 1
      if (!atBottom) return
      event.preventDefault()
      setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    shade?.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      shade?.removeEventListener('wheel', onWheel)
    }
  }, [open, shadeRef])

  return {
    open,
    pull,
    setOpen,
    toggle,
    dragHandlers: { onPointerDown, onPointerMove, onPointerUp: endDrag, onPointerCancel: endDrag },
  }
}
