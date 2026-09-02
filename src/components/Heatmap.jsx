import { buildCalendarWeeks, levelFor, monthLabels } from '../lib/heatmap'

const CELL = 11
const GAP = 3

export default function Heatmap({ countsByDate, color = '#33D68A', days = 365, colorByDate = null }) {
  const { weeks, max } = buildCalendarWeeks(countsByDate, days)
  const months = monthLabels(weeks)
  const width = weeks.length * (CELL + GAP)
  const height = 7 * (CELL + GAP)

  return (
    <div className="overflow-x-auto -mx-1 px-1 pb-2">
      <svg width={width} height={height + 18} role="img" aria-label="Contribution heatmap">
        {months.map((m) => (
          <text
            key={m.index}
            x={m.index * (CELL + GAP)}
            y={10}
            className="fill-mist"
            style={{ font: '10px "JetBrains Mono", monospace' }}
          >
            {m.label}
          </text>
        ))}
        <g transform="translate(0, 18)">
          {weeks.map((week, wi) => (
            <g key={wi} transform={`translate(${wi * (CELL + GAP)}, 0)`}>
              {week.map((day, di) => {
                const level = levelFor(day.count, max)
                const customColor = colorByDate ? colorByDate[day.date] : null
                return (
                  <rect
                    key={di}
                    y={di * (CELL + GAP)}
                    width={CELL}
                    height={CELL}
                    rx={2.5}
                    fill={level === 0 ? '#ffffff0f' : (customColor || color)}
                    fillOpacity={level === 0 ? 1 : (customColor ? 1 : [0, 0.28, 0.5, 0.72, 1][level])}
                  >
                    <title>
                      {day.date}: {day.count}
                    </title>
                  </rect>
                )
              })}
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
