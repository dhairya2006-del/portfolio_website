// Deterministic pseudo-random walk derived from a string seed.
// Used to give each project card a unique, stable "signal" line
// without needing real screenshots or images.

function seededRandom(seed) {
  let h = 1779033703 ^ seed.length
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    h ^= h >>> 16
    return (h >>> 0) / 4294967296
  }
}

export function walkFromSeed(seed, points = 24) {
  const rand = seededRandom(seed)
  let value = 0.5
  const out = [value]
  for (let i = 1; i < points; i++) {
    value += (rand() - 0.48) * 0.22
    value = Math.max(0.05, Math.min(0.95, value))
    out.push(value)
  }
  return out
}

export function toSvgPath(values, width = 200, height = 60) {
  const step = width / (values.length - 1)
  return values
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)},${(height - v * height).toFixed(1)}`)
    .join(' ')
}
