// ---------------------------------------------------------------------------
// Add a new role by pushing another object into this array (newest first
// is conventional but not required — the timeline just renders in order).
//
// {
//   company: 'Company name',        // required
//   role: 'Your title',             // required
//   location: 'City, Country',      // required
//   start: 'Mon YYYY',              // required
//   end: 'Present' | 'Mon YYYY',    // required
//   points: ['bullet one', ...],    // required
// }
// ---------------------------------------------------------------------------

const experience = [
  {
    company: 'FinSense AI',
    role: 'Undergraduate Research Assistant',
    location: 'IIT Jodhpur, India',
    start: 'Dec 2025',
    end: 'Jan 2026',
    supervisor: 'Prof. G. Venkat Ram Reddy, SME, IIT Jodhpur',
    repo: 'https://github.com/dhairya2006-del/FinSenseAI',
    points: [
      'Engineered 80+ leakage-safe features from market data, news sentiment, and Google Trends signals across 20+ stocks, lowering next-day return prediction error by 20% via a weighted ensemble of Random Forest, Gradient Boosting, and XGBoost models.',
      'Deployed a FastAPI backend exposing REST APIs to a live frontend with real-time progress tracking, serving predictions across the full tracked ticker universe alongside an event-driven backtesting engine (fixed/trailing/ATR stop-loss) evaluated via Sharpe ratio, max drawdown, and win-rate.',
      'Diagnosed and resolved production JSON serialization failures from NaN/Inf propagation in external financial APIs, eliminating recurring backend crashes.',
    ],
  },
]

export default experience
