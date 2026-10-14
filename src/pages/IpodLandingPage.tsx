import { useCallback, useEffect, useRef, useState } from 'react'
import ipodPixel from '../assets/ipod-micropixel.png'
import { activityAlbums, type ActivityAlbum, type ActivityAlbumItem, ipodMenuItems } from '../data/ipodMenu'
import './IpodLandingPage.css'

const WHEEL_STEP = 80
const WHEEL_GESTURE_GAP = 180
const TOUCH_STEP = 28
const MOBILE_INPUT_MEDIA_QUERY = '(pointer: coarse) and (max-width: 767px)'

interface AlbumTrackArtProps {
  album: ActivityAlbum
  item: ActivityAlbumItem
}

/** 각 활동의 의미를 커버 단어와 기호로 바로 읽을 수 있게 만든 앨범 아트입니다. */
function AlbumTrackArt({ album, item }: AlbumTrackArtProps) {
  return (
    <div className={`album-track-art album-track-art--${album.id}`} aria-hidden="true">
      <i /><i /><i /><i />
      <b>{item.marker}</b>
      <strong>{item.cover}</strong>
    </div>
  )
}

/** 화면 전체를 iPod 하나로 채우는 인터랙티브 랜딩 페이지 */
function IpodLandingPage() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_INPUT_MEDIA_QUERY).matches)
  const [showGuide, setShowGuide] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [subSelectedIndex, setSubSelectedIndex] = useState(0)
  const [albumIndex, setAlbumIndex] = useState(0)
  const [albumItemIndex, setAlbumItemIndex] = useState(0)
  const [screen, setScreen] = useState<'menu' | 'submenu' | 'detail' | 'album' | 'albumDetail'>('menu')
  const scrollProgress = useRef(0)
  const lastWheelInput = useRef(0)
  const touchLastY = useRef<number | null>(null)
  const touchProgress = useRef(0)
  const touchMoved = useRef(false)
  const ignoreTapUntil = useRef(0)
  const guideVisible = useRef(showGuide)
  const selected = ipodMenuItems[selectedIndex]
  const subSelected = selected.children[subSelectedIndex]
  const selectedAlbum = activityAlbums[albumIndex]
  const selectedAlbumItem = selectedAlbum.items[albumItemIndex]
  const shownItems = screen === 'menu' ? ipodMenuItems : selected.children
  const actionHint = isMobile ? 'SWIPE / TAP OPEN' : 'SCROLL / CLICK OPEN'
  const backHint = isMobile ? 'MENU: BACK' : 'SPACE: BACK'

  const dismissGuide = useCallback(() => {
    if (!guideVisible.current) return false

    guideVisible.current = false
    ignoreTapUntil.current = Date.now() + 350
    setShowGuide(false)
    return true
  }, [])

  const changeSelection = (direction: 1 | -1) => {
    if (screen === 'menu') {
      setSelectedIndex((current) => (current + direction + ipodMenuItems.length) % ipodMenuItems.length)
      return
    }
    if (screen === 'submenu') setSubSelectedIndex((current) => (current + direction + selected.children.length) % selected.children.length)
    if (screen === 'album') setAlbumItemIndex((current) => (current + direction + selectedAlbum.items.length) % selectedAlbum.items.length)
  }

  const handleWheel = (deltaY: number, deltaMode: number) => {
    const now = Date.now()
    if (dismissGuide()) return
    if (screen === 'detail' || screen === 'albumDetail') return

    if (now - lastWheelInput.current > WHEEL_GESTURE_GAP) scrollProgress.current = 0
    lastWheelInput.current = now

    const normalizedDelta = deltaMode === 1 ? deltaY * 16 : deltaY
    const selectionDelta = Math.max(-WHEEL_STEP, Math.min(WHEEL_STEP, -normalizedDelta))
    if (Math.abs(selectionDelta) < 1) return
    if (scrollProgress.current !== 0 && Math.sign(scrollProgress.current) !== Math.sign(selectionDelta)) scrollProgress.current = 0

    scrollProgress.current += selectionDelta
    while (Math.abs(scrollProgress.current) >= WHEEL_STEP) {
      const direction = scrollProgress.current > 0 ? 1 : -1
      changeSelection(direction)
      scrollProgress.current -= direction * WHEEL_STEP
    }

  }

  const handleTouchMove = (touchY: number) => {
    if (touchLastY.current === null || screen === 'detail' || screen === 'albumDetail') return
    const distance = touchLastY.current - touchY
    touchLastY.current = touchY
    if (Math.abs(distance) < 1) return

    touchMoved.current = true
    touchProgress.current -= distance
    while (Math.abs(touchProgress.current) >= TOUCH_STEP) {
      const direction = touchProgress.current > 0 ? 1 : -1
      changeSelection(direction)
      touchProgress.current -= direction * TOUCH_STEP
    }
  }

  const handleTouchEnd = () => {
    touchLastY.current = null
    touchProgress.current = 0
    if (touchMoved.current) ignoreTapUntil.current = Date.now() + 350
    touchMoved.current = false
  }

  const selectCurrentItem = () => {
    if (screen === 'menu') {
      setSubSelectedIndex(0)
      setScreen('submenu')
      return
    }
    if (screen === 'submenu') {
      if (selected.label === 'ACTIVITIES') {
        setAlbumIndex(subSelectedIndex)
        setAlbumItemIndex(0)
        setScreen('album')
        return
      }
      setScreen('detail')
    }
    else if (screen === 'album') setScreen('albumDetail')
  }

  const returnToPreviousMenu = useCallback(() => {
    if (screen === 'detail') setScreen('submenu')
    else if (screen === 'submenu') setScreen('menu')
    else if (screen === 'albumDetail') setScreen('album')
    else if (screen === 'album') setScreen('submenu')
  }, [screen])

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_INPUT_MEDIA_QUERY)
    const updateInputMode = () => { setIsMobile(mediaQuery.matches) }
    updateInputMode()
    mediaQuery.addEventListener('change', updateInputMode)
    return () => { mediaQuery.removeEventListener('change', updateInputMode) }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isSpace = event.code === 'Space' || event.key === ' '
      if (!isSpace || event.repeat || isMobile) return
      event.preventDefault()
      event.stopPropagation()
      if (dismissGuide()) return
      returnToPreviousMenu()
    }

    document.addEventListener('keydown', handleKeyDown, { capture: true })
    return () => { document.removeEventListener('keydown', handleKeyDown, { capture: true }) }
  }, [dismissGuide, isMobile, returnToPreviousMenu])

  return (
    <main
      className="ipod-landing"
      aria-label="세미콜론 iPod 메뉴"
      onWheel={(event) => { event.preventDefault(); handleWheel(event.deltaY, event.deltaMode) }}
      onTouchStart={(event) => {
        if (dismissGuide()) return
        touchLastY.current = event.touches[0]?.clientY ?? null
        touchProgress.current = 0
        touchMoved.current = false
      }}
      onTouchMove={(event) => { handleTouchMove(event.touches[0]?.clientY ?? 0) }}
      onTouchEnd={handleTouchEnd}
      onClick={(event) => {
        if (event.button !== 0 || dismissGuide() || Date.now() < ignoreTapUntil.current) return
        selectCurrentItem()
      }}
    >
      <div className="ipod-device">
        <img src={ipodPixel} alt="8비트 스타일의 은색 iPod" className="ipod-image" />
        <div className={`ipod-screen ${screen === 'album' || screen === 'albumDetail' ? 'ipod-screen--albums' : ''}`} aria-live="polite">
          <div className="ipod-screen-bar">
            <span className="ipod-brand"><b aria-hidden="true">;</b> SEMICOLON</span>
            <span>{screen === 'menu' ? 'MAIN' : screen === 'submenu' ? selected.label : screen === 'album' || screen === 'albumDetail' ? selectedAlbum.label : 'INFO'}</span>
          </div>
          {showGuide ? (
            <section className="ipod-onboarding" aria-label="조작 방법 안내">
              <p className="ipod-screen-title">{isMobile ? 'MOBILE CONTROLS' : 'PC CONTROLS'}</p>
              <ul>
                <li><b>{isMobile ? 'SWIPE' : 'SCROLL'}</b><span>MOVE MENU</span></li>
                <li><b>{isMobile ? 'TAP' : 'CLICK'}</b><span>SELECT</span></li>
                <li><b>{isMobile ? 'MENU' : 'SPACE'}</b><span>GO BACK</span></li>
              </ul>
              <small>{isMobile ? 'SWIPE OR TAP TO START' : 'SCROLL OR CLICK TO START'}</small>
            </section>
          ) : screen === 'album' ? (
            <section className="album-browser" aria-label={`${selectedAlbum.label} 활동 앨범 탐색`}>
              <p className="ipod-screen-title">{selectedAlbum.label}</p>
              <p className="album-tagline">{selectedAlbum.tagline}</p>
              <div className="album-track-flow">
                <div className="album-track-set" key={`${selectedAlbum.id}-${selectedAlbumItem.cover}`}>
                  <span className="album-track-peek album-track-peek--left" aria-hidden="true">{selectedAlbum.items[(albumItemIndex - 1 + selectedAlbum.items.length) % selectedAlbum.items.length].cover}</span>
                  <AlbumTrackArt album={selectedAlbum} item={selectedAlbumItem} />
                  <span className="album-track-peek album-track-peek--right" aria-hidden="true">{selectedAlbum.items[(albumItemIndex + 1) % selectedAlbum.items.length].cover}</span>
                </div>
              </div>
              <p className="album-caption" key={`caption-${selectedAlbum.id}-${selectedAlbumItem.label}`}>{selectedAlbumItem.label}</p>
              <small className="album-instruction">{actionHint} · {backHint}</small>
            </section>
          ) : screen === 'albumDetail' ? (
            <section className="album-detail" aria-label={`${selectedAlbumItem.label} 활동 설명`}>
              <AlbumTrackArt album={selectedAlbum} item={selectedAlbumItem} />
              <p className="ipod-screen-title">{selectedAlbum.label}</p>
              <h1>{selectedAlbumItem.label}</h1>
              <p>{selectedAlbumItem.description}</p>
              <small>{backHint}</small>
            </section>
          ) : screen !== 'detail' ? (
            <>
              <p className="ipod-screen-title">{screen === 'menu' ? 'MAIN MENU' : selected.label === 'ACTIVITIES' ? 'ACTIVITIES' : `${selected.label} MENU`}</p>
              <ul className="ipod-menu-list">
                {shownItems.map((item, index) => <li className={index === (screen === 'menu' ? selectedIndex : subSelectedIndex) ? 'selected' : ''} key={item.label}>{item.label}<b>›</b></li>)}
              </ul>
              <p className="ipod-screen-note"><span>{actionHint}</span><span>{backHint}</span></p>
            </>
          ) : (
            <section className="ipod-detail" aria-label={`${subSelected.title} 상세 설명`}>
              <p className="ipod-screen-title">{subSelected.label}</p>
              <h1>{subSelected.title}</h1>
              <p>{subSelected.description}</p>
              <p>{subSelected.detail}</p>
              <small>{backHint}</small>
            </section>
          )}
        </div>
        {isMobile && (
          <button
            type="button"
            className="ipod-menu-zone"
            aria-label="이전 메뉴로 돌아가기"
            onClick={(event) => {
              event.stopPropagation()
              if (dismissGuide() || Date.now() < ignoreTapUntil.current) return
              returnToPreviousMenu()
            }}
          />
        )}
      </div>
    </main>
  )
}

export default IpodLandingPage
