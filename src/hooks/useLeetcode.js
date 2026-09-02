import { useMemo } from 'react'
import { useJson } from './useJson'

// alfa-leetcode-api is a community-maintained wrapper around LeetCode's
// unofficial GraphQL API (https://github.com/alfaArghya/alfa-leetcode-api).
// The public instance below is free but can cold-start slowly (Render.com
// free tier). For a production portfolio, consider deploying your own
// instance (one-click, see the repo's Docker instructions) and swapping
// the URL here.
const LEETCODE_API_BASE = 'https://alfa-leetcode-api.onrender.com'
// const LEETCODE_API_BASE = ''

export function useLeetcode(username) {
  const enabled = Boolean(username)

  // Fetch both solved stats and calendar stats separately
  const solvedReq = useJson(
    enabled ? `${LEETCODE_API_BASE}/${encodeURIComponent(username)}/solved` : null,
    { enabled }
  )
  const calendarReq = useJson(
    enabled ? `${LEETCODE_API_BASE}/${encodeURIComponent(username)}/calendar` : null,
    { enabled }
  )

  const loading = solvedReq.loading || calendarReq.loading
  const error = solvedReq.error || calendarReq.error

  const parsed = useMemo(() => {
    if (!solvedReq.data && !calendarReq.data) return null

    const solvedData = solvedReq.data || {}
    const calendarData = calendarReq.data || {}

    let countsByDate = {}
    if (calendarData.submissionCalendar) {
      try {
        const raw =
          typeof calendarData.submissionCalendar === 'string'
            ? JSON.parse(calendarData.submissionCalendar)
            : calendarData.submissionCalendar
        Object.entries(raw).forEach(([ts, count]) => {
          const date = new Date(Number(ts) * 1000).toISOString().slice(0, 10)
          countsByDate[date] = (countsByDate[date] || 0) + Number(count)
        })
      } catch {
        countsByDate = {}
      }
    }

    return {
      handle: username,
      solved: solvedData.solvedProblem ?? null,
      easy: solvedData.easySolved ?? null,
      medium: solvedData.mediumSolved ?? null,
      hard: solvedData.hardSolved ?? null,
      ranking: solvedData.ranking ?? null,
      countsByDate,
      hasCalendar: Object.keys(countsByDate).length > 0,
      profileUrl: `https://leetcode.com/${username}/`,
    }
  }, [solvedReq.data, calendarReq.data, username])

  return { data: parsed, loading, error }
}
