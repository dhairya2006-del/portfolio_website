import { useMemo } from 'react'
import { useJson } from './useJson'

export function useGithubStats(username) {
  const enabled = Boolean(username)
  const profile = useJson(enabled ? `https://api.github.com/users/${encodeURIComponent(username)}` : null, { enabled })
  const contrib = useJson(
    enabled ? `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last` : null,
    { enabled }
  )

  const loading = profile.loading || contrib.loading
  const error = profile.error || contrib.error

  const parsed = useMemo(() => {
    if (!profile.data || !contrib.data?.contributions) return null

    const countsByDate = {}
    let total = 0
    contrib.data.contributions.forEach((d) => {
      countsByDate[d.date] = d.count
      total += d.count
    })

    return {
      handle: profile.data.login,
      avatar: profile.data.avatar_url,
      followers: profile.data.followers,
      publicRepos: profile.data.public_repos,
      countsByDate,
      totalContributions: total,
      profileUrl: profile.data.html_url,
    }
  }, [profile.data, contrib.data])

  return { data: parsed, loading, error }
}
