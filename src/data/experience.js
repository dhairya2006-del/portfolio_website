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
    company: 'SME, IIT Jodhpur',
    role: 'Undergraduate Research Assistant',
    location: 'IIT Jodhpur, India',
    start: 'Dec 2025',
    end: 'Jan 2026',
    supervisor: 'Prof. G. Venkat Ram Reddy, SME, IIT Jodhpur',
    points: [
      'Automated finance payment processing with Playwright and n8n, enforcing human-in-the-loop approval gates for zero unauthorized executions across 10 autonomous payment runs.',
      'Integrated event-driven webhooks with fallback sweeps and a JSONL audit trail, enabling autonomous recovery of missed events and sub-15s approval resolution with duplicate-free records.',
      'Optimized a log-segmentation model on 162K events to partition operation logs into business-process executions, validated on 20K unseen events, cutting per-operation processing time 10x (20s → 2s).',
    ],
  },
]

export default experience
