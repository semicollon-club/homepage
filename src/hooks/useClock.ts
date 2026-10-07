import { useEffect, useState } from 'react'

const WEEKDAYS = '일월화수목금토'

export interface Clock {
  /** 18:05 */
  time: string
  /** 10월 7일 수요일 */
  date: string
}

function readClock(): Clock {
  const now = new Date()
  const hh = String(now.getHours()).padStart(2, '0')
  const mm = String(now.getMinutes()).padStart(2, '0')
  return {
    time: `${hh}:${mm}`,
    date: `${now.getMonth() + 1}월 ${now.getDate()}일 ${WEEKDAYS[now.getDay()]}요일`,
  }
}

/** 상태바·패널 시계. 분이 바뀌는 순간마다 다시 그립니다 */
export function useClock(): Clock {
  const [clock, setClock] = useState(readClock)

  useEffect(() => {
    let timer = 0
    const scheduleNextMinute = () => {
      const now = new Date()
      const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds()
      timer = window.setTimeout(() => {
        setClock(readClock())
        scheduleNextMinute()
      }, msToNextMinute + 50)
    }
    scheduleNextMinute()
    return () => window.clearTimeout(timer)
  }, [])

  return clock
}
