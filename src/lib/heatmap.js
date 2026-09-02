// Turns a map of date -> count into a GitHub-style grid of weeks (columns)
// x days (rows), covering the last `days` days, aligned so each column
// starts on a Sunday.

export function buildCalendarWeeks(countsByDate, days = 365) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const start = new Date(today)
  start.setDate(start.getDate() - (days - 1))
  // Roll back to the previous Sunday so the grid aligns into full weeks.
  start.setDate(start.getDate() - start.getDay())

  const cells = []
  const cursor = new Date(start)
  let max = 0

  while (cursor <= today) {
    const key = cursor.toISOString().slice(0, 10)
    const count = countsByDate[key] || 0
    max = Math.max(max, count)
    cells.push({ date: key, count })
    cursor.setDate(cursor.getDate() + 1)
  }

  const weeks = []
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7))
  }

  return { weeks, max }
}

export function levelFor(count, max) {
  if (count <= 0) return 0
  if (max <= 0) return 1
  const ratio = count / max
  if (ratio > 0.75) return 4
  if (ratio > 0.5) return 3
  if (ratio > 0.2) return 2
  return 1
}

export function monthLabels(weeks) {
  const labels = []
  let lastMonth = -1
  weeks.forEach((week, i) => {
    const d = new Date(week[0].date)
    const m = d.getMonth()
    if (m !== lastMonth) {
      labels.push({ index: i, label: d.toLocaleDateString('en-US', { month: 'short' }) })
      lastMonth = m
    }
  })
  return labels
}
