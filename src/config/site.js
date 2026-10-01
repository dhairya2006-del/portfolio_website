// ---------------------------------------------------------------------------
// Central site config. Edit this file to update your identity, links, and
// the handles used by the /stats page. Nothing else needs to change.
// ---------------------------------------------------------------------------

const site = {
  name: 'Dhairya Joshi',
  role: 'B.Tech in Mechanical Engineering (Minor in AI) @ IIT Jodhpur',
  tagline:
    'I build machine learning, deep learning, and LLM systems — from low-latency AI guardrails to multi-GPU fine-tuning and quantitative ML.',
  location: 'IIT Jodhpur, India',
  email: 'dhairya4617@gmail.com',
  phone: '+91-8905823402',

  // Update these to your real profile URLs.
  links: {
    github: 'https://github.com/dhairya2006-del',
    linkedin: 'https://www.linkedin.com/in/dhairya-joshi-169b57327/',
    resume: `/curriculum_vitae_.pdf`, // put curriculum_vitae_.pdf in /public to enable the download button
  },

  // Handles used to fetch live data on the /stats page.
  // Leave a value empty ('') to hide that platform's card instead of
  // showing broken/placeholder data.
  handles: {
    codeforces: '',
    codechef: '',
    github: 'dhairya2006-del',
    leetcode: '', // TODO: add your LeetCode username to enable this card
    tuf: 'Dhairya20', // takeUforward username
  },
}

export default site
