// ---------------------------------------------------------------------------
// Central site config. Edit this file to update your identity, links, and
// the handles used by the /stats page. Nothing else needs to change.
// ---------------------------------------------------------------------------

const site = {
  name: 'Dhairya Joshi',
  role: 'B.Tech in Mechanical Engineering (Minor in AI) @ IIT Jodhpur',
  tagline:
    'I build low-latency AI safety systems, quantitative hedging simulators, and fine-tune LLMs where algorithms meet scale and uncertainty.',
  location: 'IIT Jodhpur, India',
  email: 'b24me1024@iitj.ac.in',
  phone: '+91-8905823402',

  // Update these to your real profile URLs.
  links: {
    github: 'https://github.com/dhairya2006-del',
    linkedin: 'https://linkedin.com/',
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
