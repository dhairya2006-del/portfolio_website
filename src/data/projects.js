// ---------------------------------------------------------------------------
// Add a new project by pushing another object into this array — nothing
// else in the app needs to change. Fields marked optional can be omitted.
//
// {
//   slug: 'unique-url-slug',        // required, used in /projects/:slug
//   title: 'Project Title',         // required
//   dateLabel: 'Mon YYYY – Mon YYYY',// required, freeform display text
//   summary: 'One line for cards.', // required
//   bullets: ['point one', ...],    // required, the detail bullets
//   tech: ['Python', 'PyTorch'],    // required, shown as tags
//   repo: 'https://github.com/...', // optional
//   demo: 'https://...',            // optional
//   featured: true,                 // optional, shows on the homepage
// }
// ---------------------------------------------------------------------------

const projects = [
  {
    slug: 'checkerplane-ai-guardrail-proxy',
    title: 'CheckerPlane AI – Low-Latency LLM Guardrail Proxy',
    dateLabel: 'Jul 2026 – Aug 2026',
    summary:
      'A multi-tier AI safety proxy in Rust with ONNX Runtime, replacing sequential Python guardrail chains with parallel async execution – cutting median latency ~8x (550ms → 67ms).',
    bullets: [
      'Architected a multi-tier AI safety proxy in Rust with ONNX Runtime, replacing sequential Python guardrail chains with parallel async execution – cutting median latency ~8x (550ms → 67ms).',
      'Implemented a 4-gate parallel input rail (toxicity, PII/Aadhaar NER, coherence, prompt-injection) with early-exit cancellation and a <0.1ms Tier-0 heuristic screen.',
      'Trained a DeBERTa NLI hallucination gate scoring output grounding, reaching ~88% gate accuracy with zero GPU dependency via quantized ONNX models.',
    ],
    tech: ['Rust', 'ONNX Runtime', 'C++', 'DeBERTa', 'BERT', 'Tokio', 'Async Concurrency'],
    repo: 'https://github.com/dhairya2006-del/CheckerPlane',
    featured: true,
  },
  {
    slug: 'delta-hedging-adversarial-simulator',
    title: 'Delta Hedging & Adversarial Stock Path Generation Simulator',
    dateLabel: 'May 2026 – Jun 2026',
    summary:
      'A quant finance simulator benchmarking classical delta hedging against deep learning-based strategies across 10,000+ Monte Carlo market scenarios.',
    bullets: [
      'Built a quant finance simulator benchmarking classical delta hedging against deep learning-based strategies across 10,000+ Monte Carlo-simulated market scenarios.',
      'Constructed a GRU-based hedging model with a custom CVaR loss function, cutting tail risk (CVaR5%) 42% versus the classical baseline (Rs. 500 → Rs. 290).',
      'Designed an adversarial framework where a recurrent generator learns worst-case market conditions, pushing the tail-risk reduction to 80% overall (Rs. 100).',
    ],
    tech: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'Monte Carlo Simulation', 'Black-Scholes Model'],
    repo: 'https://github.com/dhairya2006-del/Deep_Adversarial_Hedger',
    featured: true,
  },
  {
    slug: 'llm-response-preference-classification',
    title: 'LLM Response Preference Classification – Kaggle Competition',
    dateLabel: 'Aug 2026 – Sept 2026',
    summary:
      'Fine-tuned Llama-3 and Gemma-2 classifiers on ~57,400 datapoints to predict human preference between LLM responses – 2nd of 224 teams (top 1%), solo.',
    bullets: [
      'Fine-tuned Llama-3 and Gemma-2 classifiers on ~57,400 datapoints to predict human preference between LLM response pairs (win A / win B / tie).',
      'Engineered a pipelined multi-GPU inference system splitting Llama-3 across two GPUs, using xFormers block-diagonal attention and sharded batching to eliminate padding waste.',
      'Benchmarked against an LSTM baseline, cutting log-loss from 1.13 to 0.83 (~27%), motivating the switch to transformer-based classification.',
      'Ensembled predictions with test-time augmentation for a 0.83 log-loss – a top-1% finish among 224 teams.',
    ],
    tech: ['Python', 'PyTorch', 'HuggingFace Transformers', 'Llama 3', 'Gemma 2', 'xFormers', 'Multi-GPU Inference'],
    repo: 'https://github.com/dhairya2006-del/LLM_Classification_Finetuning',
    featured: true,
  },
  {
    slug: 'finsenseai-ml-stock-prediction',
    title: 'FinSenseAI – Full-Stack ML Stock Prediction System',
    dateLabel: 'Jan 2026 – May 2026',
    summary:
      'A full-stack ML system predicting next-day stock returns from market data, news sentiment, and Google Trends signals, with a FastAPI backend and an event-driven backtesting engine.',
    bullets: [
      'Leveraged market data, news sentiment, and Google Trends signals across 20+ stocks to create 80+ leakage-safe features for next-day return prediction.',
      'Optimized prediction error by 20% through feature engineering and optimization of a weighted ensemble comprising Random Forest, Gradient Boosting, and XGBoost models.',
      'Implemented and deployed a FastAPI backend exposing REST APIs consumed by a live frontend with real-time progress tracking.',
      'Developed an event-driven backtesting engine supporting fixed, trailing, and ATR-based stop-loss strategies evaluated through Sharpe ratio, maximum drawdown, and win-rate metrics.',
      'Diagnosed and resolved production JSON serialization failures caused by NaN/Inf propagation from external financial APIs.',
    ],
    tech: ['Python', 'FastAPI', 'Scikit-Learn', 'XGBoost', 'JavaScript', 'yFinance', 'NewsAPI'],
    repo: 'https://github.com/dhairya2006-del/FinSenseAI',
    featured: true,
  },
]

export default projects
