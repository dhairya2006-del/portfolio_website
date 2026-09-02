import { useEffect, useState } from 'react'

const CACHE_TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

export function useJson(url, { enabled = true } = {}) {
  const [state, setState] = useState(() => {
    if (!enabled || !url) return { data: null, loading: false, error: null }
    const cacheKey = `fetch_cache_${url}`
    const cachedItem = localStorage.getItem(cacheKey)
    if (cachedItem) {
      try {
        const parsed = JSON.parse(cachedItem)
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          return { data: parsed.data, loading: false, error: null }
        }
      } catch (err) {}
    }
    return { data: null, loading: true, error: null }
  })

  useEffect(() => {
    if (!enabled || !url) {
      setState({ data: null, loading: false, error: null })
      return
    }

    const cacheKey = `fetch_cache_${url}`
    const cachedItem = localStorage.getItem(cacheKey)
    let hasValidCache = false

    if (cachedItem) {
      try {
        const parsed = JSON.parse(cachedItem)
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          hasValidCache = true
          // If state is already initialized with cache, we don't need to setState again,
          // but we do it anyway just in case the URL changed and we need to update state.
          setState({ data: parsed.data, loading: false, error: null })
          return
        }
      } catch (err) {}
    }

    let cancelled = false
    if (!hasValidCache) {
      setState((prev) => (prev.data ? prev : { data: null, loading: true, error: null }))
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
        return res.json()
      })
      .then((data) => {
        if (!cancelled) {
          localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }))
          setState({ data, loading: false, error: null })
        }
      })
      .catch((error) => {
        if (!cancelled) setState({ data: null, loading: false, error })
      })

    return () => {
      cancelled = true
    }
  }, [url, enabled])

  return state
}
