import { useMemo } from 'react'
import { useJson } from './useJson'

const API = 'https://codeforces.com/api'

export const getCodeforcesColor = (rating) => {
  if (!rating) return '#808080'
  if (rating < 1200) return '#808080' // Newbie
  if (rating < 1400) return '#008000' // Pupil
  if (rating < 1600) return '#03A89E' // Specialist
  if (rating < 1900) return '#0000FF' // Expert
  if (rating < 2100) return '#AA00AA' // Candidate Master (Pink/Violet)
  if (rating < 2400) return '#FF8C00' // Master / International Master
  return '#FF0000' // Grandmaster+
}

export function useCodeforces(handle) {
  const enabled = Boolean(handle)
  const info = useJson(enabled ? `${API}/user.info?handles=${encodeURIComponent(handle)}` : null, { enabled })
  const status = useJson(enabled ? `${API}/user.status?handle=${encodeURIComponent(handle)}&from=1&count=10000` : null, { enabled })

  const loading = info.loading || status.loading
  const error = info.error || status.error

  const parsed = useMemo(() => {
    if (!info.data?.result?.[0] || !status.data?.result) return null

    const user = info.data.result[0]
    const submissions = status.data.result

    const countsByDate = {}
    const maxRatingByDate = {}
    const solvedSet = new Set()

    submissions.forEach((sub) => {
      const date = new Date(sub.creationTimeSeconds * 1000).toISOString().slice(0, 10)
      countsByDate[date] = (countsByDate[date] || 0) + 1
      if (sub.verdict === 'OK') {
        solvedSet.add(`${sub.problem.contestId}${sub.problem.index}`)
        const rating = sub.problem.rating
        if (rating !== undefined) {
          if (!maxRatingByDate[date] || rating > maxRatingByDate[date]) {
            maxRatingByDate[date] = rating
          }
        }
      }
    })

    const colorsByDate = {}
    Object.keys(maxRatingByDate).forEach((date) => {
      colorsByDate[date] = getCodeforcesColor(maxRatingByDate[date])
    })

    return {
      handle: user.handle,
      rating: user.rating ?? null,
      maxRating: user.maxRating ?? null,
      rank: user.rank ?? null,
      maxRank: user.maxRank ?? null,
      solvedCount: solvedSet.size,
      countsByDate,
      colorsByDate,
      profileUrl: `https://codeforces.com/profile/${user.handle}`,
    }
  }, [info.data, status.data])

  return { data: parsed, loading, error }
}
