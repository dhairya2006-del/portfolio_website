import { ExternalLink, Code2, Flame, CheckCircle2 } from 'lucide-react'
import site from '../config/site'
import Eyebrow from '../components/Eyebrow'
import Heatmap from '../components/Heatmap'
import { GithubMark } from '../components/BrandIcons'
import { useGithubStats } from '../hooks/useGithubStats'
import { useLeetcode } from '../hooks/useLeetcode'
import { useTuf, DEFAULT_TUF_ACTIVITY } from '../hooks/useTuf'

function getStreaks(countsByDate) {
  if (!countsByDate) return { current: 0, max: 0 }
  const dates = Object.keys(countsByDate).filter(d => countsByDate[d] > 0).sort()
  if (dates.length === 0) return { current: 0, max: 0 }

  let maxStreak = 1
  let currentRun = 1
  const parseDate = (d) => new Date(d + 'T00:00:00Z').getTime()

  for (let i = 1; i < dates.length; i++) {
    const prev = parseDate(dates[i - 1])
    const curr = parseDate(dates[i])
    const diffDays = Math.round((curr - prev) / (1000 * 60 * 60 * 24))

    if (diffDays === 1) {
      currentRun++
    } else if (diffDays > 1) {
      currentRun = 1
    }
    if (currentRun > maxStreak) {
      maxStreak = currentRun
    }
  }

  let currentStreak = 0
  const lastActiveStr = dates[dates.length - 1]
  const lastActive = parseDate(lastActiveStr)

  const tzOffset = (new Date()).getTimezoneOffset() * 60000
  const todayStr = (new Date(Date.now() - tzOffset)).toISOString().split('T')[0]
  const today = parseDate(todayStr)

  const diffFromToday = Math.round((today - lastActive) / (1000 * 60 * 60 * 24))

  if (diffFromToday === 0 || diffFromToday === 1) {
    currentStreak = currentRun
  }

  return { current: currentStreak, max: maxStreak }
}

export default function Stats() {
  const { handles } = site
  const gh = useGithubStats(handles.github)
  const lc = useLeetcode(handles.leetcode)
  const tuf = useTuf(handles.tuf)

  // Problem solving counts (TUF A2Z Striver Sheet / LeetCode)
  const totalSolved = tuf.data?.total ?? 188
  const easySolved = tuf.data?.easy ?? 98
  const mediumSolved = tuf.data?.medium ?? 67
  const hardSolved = tuf.data?.hard ?? 23
  const totalSubmissions = tuf.data?.totalSubmissions ?? 251
  const activeDays = tuf.data?.activeDays ?? 58
  const maxStreak = tuf.data?.maxStreak ?? 16
  const totalSheetQuestions = 455
  const progressPercent = Math.min(100, Math.round((totalSolved / totalSheetQuestions) * 100))

  // GitHub stats
  const ghContributions = gh.data?.totalContributions || 52
  const ghRepos = gh.data?.publicRepos || 11
  const ghFollowers = gh.data?.followers || 0

  // Streaks
  const ghStreak = getStreaks(gh.data?.countsByDate)
  const dsaCountsByDate = tuf.data?.countsByDate || DEFAULT_TUF_ACTIVITY

  return (
    <div className="animate-fadeUp max-w-4xl">
      <Eyebrow>Live Metrics</Eyebrow>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">Coding &amp; DSA Stats</h1>
      <p className="text-fog mb-8 max-w-xl text-sm leading-relaxed">
        Tracking problems solved on Striver's A2Z DSA sheet alongside live GitHub development activity and timeline history.
      </p>

      {/* Top 2 Primary Highlight Cards */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {/* Card 1: Total Problems Solved (TUF A2Z Striver Sheet) */}
        <div className="rounded-xl border border-signal/30 bg-paper/90 p-5 sm:p-6 backdrop-blur-sm relative overflow-hidden shadow-lg shadow-signal/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-signal/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-signal/15 text-signal">
                <Code2 size={16} />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-fog">
                TUF A2Z Striver Sheet
              </span>
            </div>
            <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-signal/15 text-signal border border-signal/20">
              {progressPercent}% Complete
            </span>
          </div>

          <div className="flex items-baseline gap-3 my-2">
            <span className="text-signal text-5xl font-bold font-display tracking-tight">
              {totalSolved}
            </span>
            <span className="text-mist font-mono text-xs">
              / {totalSheetQuestions} problems
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-paper2 rounded-full h-2 my-4 overflow-hidden border border-line">
            <div
              className="bg-signal h-full rounded-full transition-all duration-700"
              style={{ width: `${Math.max(progressPercent, 6)}%` }}
            />
          </div>

          {/* Difficulty Breakdown */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-line/60">
            <div className="rounded bg-paper2/80 p-2 text-center border border-line/40">
              <div className="text-[10px] font-mono text-mist uppercase">Easy</div>
              <div className="text-sm font-bold font-mono text-signal mt-0.5">{easySolved}</div>
            </div>
            <div className="rounded bg-paper2/80 p-2 text-center border border-line/40">
              <div className="text-[10px] font-mono text-mist uppercase">Medium</div>
              <div className="text-sm font-bold font-mono text-amber mt-0.5">{mediumSolved}</div>
            </div>
            <div className="rounded bg-paper2/80 p-2 text-center border border-line/40">
              <div className="text-[10px] font-mono text-mist uppercase">Hard</div>
              <div className="text-sm font-bold font-mono text-rose-400 mt-0.5">{hardSolved}</div>
            </div>
          </div>
        </div>

        {/* Card 2: GitHub Contributions */}
        <div className="rounded-xl border border-volt/30 bg-paper/90 p-5 sm:p-6 backdrop-blur-sm relative overflow-hidden shadow-lg shadow-volt/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-volt/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-volt/15 text-volt">
                <GithubMark size={16} />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-fog">
                GitHub Activity
              </span>
            </div>
            {handles.github && (
              <a
                href={`https://github.com/${handles.github}`}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-volt/15 text-volt border border-volt/20 hover:bg-volt/25 transition-colors inline-flex items-center gap-1"
              >
                @{handles.github} <ExternalLink size={10} />
              </a>
            )}
          </div>

          <div className="flex items-baseline gap-3 my-2">
            <span className="text-volt text-5xl font-bold font-display tracking-tight">
              {ghContributions}
            </span>
            <span className="text-mist font-mono text-xs">
              contributions in past year
            </span>
          </div>

          {/* Quick summary stats */}
          <div className="grid grid-cols-3 gap-2 mt-6 pt-2 border-t border-line/60">
            <div className="rounded bg-paper2/80 p-2 text-center border border-line/40">
              <div className="text-[10px] font-mono text-mist uppercase">Repos</div>
              <div className="text-sm font-bold font-mono text-bone mt-0.5">{ghRepos}</div>
            </div>
            <div className="rounded bg-paper2/80 p-2 text-center border border-line/40">
              <div className="text-[10px] font-mono text-mist uppercase">Followers</div>
              <div className="text-sm font-bold font-mono text-bone mt-0.5">{ghFollowers}</div>
            </div>
            <div className="rounded bg-paper2/80 p-2 text-center border border-line/40">
              <div className="text-[10px] font-mono text-mist uppercase">Cur Streak</div>
              <div className="text-sm font-bold font-mono text-volt mt-0.5">{ghStreak.current || 1}d</div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Dedicated Timeline-Associated Blocks Below */}
      <div className="space-y-8">
        {/* Timeline Block 1: GitHub Timeline */}
        <section className="rounded-xl border border-line bg-paper p-5 sm:p-7 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-line">
            <div>
              <div className="flex items-center gap-2">
                <GithubMark size={18} className="text-volt" />
                <h2 className="font-display font-semibold text-lg text-bone">GitHub Activity Timeline</h2>
              </div>
              <p className="font-mono text-xs text-mist mt-1">
                Yearly commit history, pull requests, and open-source contributions
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={handles.github ? `https://github.com/${handles.github}` : site.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line bg-paper2 font-mono text-xs text-fog hover:text-bone hover:border-fog transition-colors"
              >
                View Profile <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className="my-3">
            {gh.loading ? (
              <div className="py-12 text-center font-mono text-xs text-mist">
                Loading GitHub contribution timeline…
              </div>
            ) : (
              <Heatmap countsByDate={gh.data?.countsByDate || {}} color="#5B8DEF" />
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-line/60 font-mono text-xs text-mist">
            <div className="flex items-center gap-4">
              <span>Total: <strong className="text-bone">{ghContributions}</strong> contributions</span>
              <span>Repos: <strong className="text-bone">{ghRepos}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span>Less</span>
              <span className="h-2.5 w-2.5 rounded-sm bg-[#ffffff0f]" />
              <span className="h-2.5 w-2.5 rounded-sm bg-[#5B8DEF]/30" />
              <span className="h-2.5 w-2.5 rounded-sm bg-[#5B8DEF]/60" />
              <span className="h-2.5 w-2.5 rounded-sm bg-[#5B8DEF]" />
              <span>More</span>
            </div>
          </div>
        </section>

        {/* Timeline Block 2: TUF / LeetCode Timeline */}
        <section className="rounded-xl border border-line bg-paper p-5 sm:p-7 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-line">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-signal/15 text-signal">
                  <Code2 size={16} />
                </span>
                <h2 className="font-display font-semibold text-lg text-bone">
                  TUF Striver's A2Z &amp; LeetCode Timeline
                </h2>
              </div>
              <p className="font-mono text-xs text-mist mt-1">
                {totalSubmissions} submissions in the last 12 months · Active Days: {activeDays} · Max Streak: {maxStreak}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {handles.tuf && (
                <a
                  href={`https://takeuforward.org/profile/${handles.tuf}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line bg-paper2 font-mono text-xs text-fog hover:text-bone hover:border-fog transition-colors"
                >
                  TUF Profile <ExternalLink size={13} />
                </a>
              )}
              {handles.leetcode && (
                <a
                  href={`https://leetcode.com/u/${handles.leetcode}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-line bg-paper2 font-mono text-xs text-fog hover:text-bone hover:border-fog transition-colors"
                >
                  LeetCode Profile <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>

          {/* Solved Summary Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-paper2 font-mono text-xs text-fog">
              <CheckCircle2 size={13} className="text-signal" />
              <span>Total Solved: <strong className="text-bone">{totalSolved}</strong></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-paper2 font-mono text-xs text-fog">
              <span className="h-2 w-2 rounded-full bg-signal" />
              <span>Easy: <strong className="text-signal">{easySolved}</strong></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-paper2 font-mono text-xs text-fog">
              <span className="h-2 w-2 rounded-full bg-amber" />
              <span>Medium: <strong className="text-amber">{mediumSolved}</strong></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-paper2 font-mono text-xs text-fog">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span>Hard: <strong className="text-rose-400">{hardSolved}</strong></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-paper2 font-mono text-xs text-fog">
              <Flame size={13} className="text-amber" />
              <span>Max Streak: <strong className="text-amber">{maxStreak} days</strong></span>
            </div>
          </div>

          {/* Timeline Heatmap */}
          <div className="my-3">
            <Heatmap countsByDate={dsaCountsByDate} color="#33D68A" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-line/60 font-mono text-xs text-mist">
            <span>Striver's A2Z DSA Sheet Progress: <strong className="text-signal">{totalSolved} / {totalSheetQuestions}</strong> ({progressPercent}%)</span>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span>Less</span>
              <span className="h-2.5 w-2.5 rounded-sm bg-[#ffffff0f]" />
              <span className="h-2.5 w-2.5 rounded-sm bg-[#33D68A]/30" />
              <span className="h-2.5 w-2.5 rounded-sm bg-[#33D68A]/60" />
              <span className="h-2.5 w-2.5 rounded-sm bg-[#33D68A]" />
              <span>More</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

