// ---------------------------------------------------------------------------
// Add a new post by pushing another object into this array. `content` is
// plain Markdown (rendered with react-markdown + remark-gfm), so headings,
// lists, bold text, links, and code blocks all work.
//
// {
//   slug: 'unique-url-slug',   // required, used in /blogs/:slug
//   title: 'Post title',      // required
//   date: 'YYYY-MM-DD',       // required, used for sorting + display
//   excerpt: 'One or two sentences shown on the list page.', // required
//   tags: ['ML', 'Notes'],    // optional
//   content: `## Markdown goes here`, // required
// }
//
// Delete the example post below once you've written your own.
// ---------------------------------------------------------------------------

const blogs = [
  {
    slug: 'why-i-built-a-AI sense engine',
    title: 'Why I Built a AI sense engine Instead of Just Reading About It',
    date: '2026-06-15',
    excerpt:
      'Black-Scholes hedging looks clean on a whiteboard. It looks very different once transaction costs and jump risk enter the picture.',
    tags: ['AI', 'Simulation'],
    content: `Most explanations of delta hedging stop at the same place: derive the Black-Scholes delta, rebalance continuously, and the portfolio is "risk-free." That story is true in the limit of continuous rebalancing and zero transaction costs — and almost never true in practice.

I wanted to see the gap for myself, so I built a simulator rather than trust the textbook version.

## What the simulator actually does

The core loop is simple to describe and surprisingly rich to explore:

1. Generate a stock path — under **Geometric Brownian Motion**, a **volatility-jump stress** regime, or a **neural adversarial** generator trained to find paths that hurt the hedge.
2. Rebalance a delta-hedged option position at 100+ discrete intervals, each with a transaction cost.
3. Track portfolio value through to expiry and record the final P&L.
4. Repeat 10,000+ times and look at the *distribution*, not just the average.

\`\`\`python
# simplified rebalancing step
delta = black_scholes_delta(S, K, T, r, sigma)
shares_to_trade = delta - previous_delta
cash -= shares_to_trade * S + transaction_cost(shares_to_trade, S)
previous_delta = delta
\`\`\`

## What surprised me

The mean P&L across simulations looked fine — close to the theoretical zero-cost benchmark. The **tail** told a different story. Under the volatility-jump regime, CVaR at the 5% level was meaningfully worse than GBM alone predicted, and the neural adversarial generator found paths that classical Black-Scholes hedging handled noticeably worse than a network trained directly on hedging error.

None of this is a new finding in the literature. But there's a difference between reading that discretization and transaction costs erode a hedge, and watching your own P&L histogram grow a fat left tail because you rebalanced every 100 steps instead of continuously.

## What's next

I'd like to extend this to path-dependent options and see whether the gap between classical and learned hedging widens or narrows once the payoff itself gets more complex. If you're working on something similar, I'd genuinely like to compare notes — my contact details are on the [about](/) page.
`,
  },
]

export default blogs
