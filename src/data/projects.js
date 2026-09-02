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
    dateLabel: 'Aug 2026',
    summary:
      'A multi-tier, high-throughput AI safety proxy built in pure Rust with ONNX Runtime, cutting median guardrail latency from ~550ms to ~67ms (~8x reduction).',
    bullets: [
      'Built a multi-tier AI safety proxy in pure Rust with ONNX Runtime, replacing sequential Python guardrail chains with parallel async gate execution, cutting median guardrail latency from ~550ms to ~67ms (~8x reduction).',
      'Engineered a 4-gate parallel input rail (toxicity, PII/Aadhaar detection via BERT-based NER + regex, coherence scoring, prompt-injection defence) with early-exit cancellation, and a DeBERTa cross-encoder NLI hallucination gate scoring output grounding pre-delivery.',
      'Achieved ~88% average gate accuracy across five safety gates with zero GPU dependency using quantised ONNX models; added a Tier-0 heuristic screen (<0.1ms) with configurable per-gate thresholds and fail-open policy.',
    ],
    tech: ['Rust', 'ONNX Runtime', 'C++', 'DeBERTa', 'BERT', 'Tokio', 'Async Concurrency'],
    repo: 'https://github.com/dhairya2006-del/CheckerPlane',
    featured: true,
  },
  {
    slug: 'delta-hedging-adversarial-simulator',
    title: 'Delta Hedging & Adversarial Stock Path Generation Simulator',
    dateLabel: 'Jul 2026 – Aug 2026',
    summary:
      'A quantitative finance simulator benchmarking Black-Scholes delta hedging against deep learning-based hedging strategies across 10K+ synthetic market scenarios.',
    bullets: [
      'Built a quantitative finance simulator benchmarking Black-Scholes delta hedging against deep learning-based hedging strategies across 10,000+ synthetic market scenarios generated through Monte Carlo simulation.',
      'Architected and trained a GRU-based deep hedging model using a custom Conditional Value-at-Risk (CVaR) loss function, reducing CVaR5% tail risk from Rs. 500 (Black-Scholes baseline) to Rs. 290, a 42% improvement.',
      'Designed an adversarial training framework where a recurrent generator learns worst-case market conditions, further cutting CVaR5% to Rs. 100 – an 80% drop versus the Black-Scholes baseline.',
      'Processed 8,500+ minute-level NIFTY options data points, computing implied volatility and Black-Scholes Greeks for model calibration and evaluation.',
    ],
    tech: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'Monte Carlo Simulation', 'Black-Scholes Model'],
    repo: 'https://github.com/dhairya2006-del/Deep_Adversarial_Hedger',
    featured: true,
  },
  {
    slug: 'llm-response-preference-classification',
    title: 'LLM Response Preference Classification – Kaggle Competition',
    dateLabel: 'Sept 2026',
    summary:
      'Fine-tuned Llama-3 and Gemma-2 models on ~57,400 datapoints to predict human chatbot preferences, placing 8th of 224 teams (top 4% solo).',
    bullets: [
      'Fine-tuned Llama-3 and Gemma-2 sequence-classification models on ~57,400 datapoints to predict human preference between pairs of LLM chatbot responses, framing the task as a 3-class (win A / win B / tie) classification problem.',
      'Engineered a pipelined multi-GPU inference system splitting each Llama-3 model across two GPUs, using variable-length attention (xFormers block-diagonal causal masking) and sharded max-token batching to eliminate padding waste and maximize throughput.',
      'Combined Llama-3 and Gemma-2 predictions with response-order swapping as test-time augmentation via weighted ensembling, achieving a 0.83040 log-loss and, competing solo, placing 8th of 224 teams (top 4%).',
    ],
    tech: ['Python', 'PyTorch', 'HuggingFace Transformers', 'Llama 3', 'Gemma 2', 'xFormers', 'Multi-GPU Inference'],
    repo: 'https://github.com/dhairya2006-del/LLM_Classification_Finetuning',
    featured: true,
  },
]

export default projects
