export const sections = [
  {
    id: 'mission',
    title: 'Mission Statement',
    background: '#f3e5f5',
    align: 'left',
    body:
      'SMCAA — Single Moms Can Achieve All exists to eliminate the daily challenges faced by vulnerable women and mothers by providing comprehensive support through healthcare access, education, childcare resources, financial empowerment, and community partnerships. We are committed to championing the right of every mother to thrive with dignity, hope, and opportunity, free from judgment, while strengthening families and building healthier communities.',
    animation: {
      initial: { opacity: 0, x: -60 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    images: [
      {
        src: '/homePage2.JPEG',
        alt: 'SMCAA community',
        alignment: 'right',
        animation: {
          initial: { opacity: 0, x: 60 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: false, amount: 0.3 },
          transition: { duration: 0.7, ease: 'easeOut' },
        },
      },
    ],
  },
  {
    id: 'vision',
    title: 'Vision Statement',
    background: '#e8eaf6',
    align: 'right',
    body:
      'SMCAA envisions a community where no mother is lseft behind and every family is strengthened through equitable access to the essential building blocks of a stable and successful life. We strive to create a future where women and families have the resources, support, education, and opportunities needed to achieve lasting independence, personal growth, and generational success.',
    animation: {
      initial: { opacity: 0, x: 60 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    images: [
      {
        src: '/homePage1.JPEG',
        alt: 'Families thriving together',
        alignment: 'left',
        maxWidth: 320,
        animation: {
          initial: { opacity: 0, x: -60 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: false, amount: 0.3 },
          transition: { duration: 0.7, ease: 'easeOut' },
        },
      },
    ],
  },
  {
    id: 'principles',
    title: 'Guiding Principles',
    heading: 'The values that guide everything we do.',
    background: '#e0f7fa',
    align: 'left',
    bullets: [
      'Serve every participant with dignity, compassion, and respect.',
      'Promote accountability, transparency, and ethical leadership.',
      'Empower mothers through education, resources, and opportunity.',
      'Strengthen families through collaboration with community partners.',
      "Ensure charitable resources are managed responsibly and used exclusively to advance SMCAA's mission.",
      'Foster an inclusive environment free from unlawful discrimination and judgment.',
    ],
    animation: {
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    images: [],
  },
  {
    id: 'support',
    title: 'Support',
    heading: 'Your support helps single mothers and their children thrive.',
    background: '#242c4a',
    color: '#f4f0fa',
    align: 'center',
    body: 'Help SMCAA thrive through donations, sponsorships, and volunteering. Every contribution keeps our programs running.',
    animation: {
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    images: [
      {
        src: '/SMCAA.png',
        alt: 'Support our mission',
        alignment: 'left',
        animation: {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: false, amount: 0.3 },
          transition: { duration: 0.6, ease: 'easeOut' },
        },
      }
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    heading: 'Get in touch — we would love to hear from you.',
    background: '#f1f8e9',
    align: 'center',
    body: 'Have a question or want to get involved? Reach out and the SMCAA team will get back to you soon.',
    animation: {
      initial: { opacity: 0, scale: 0.9, y: 50 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 1, ease: 'easeOut' },
    },
    images: [],
  },
];

// ============================================================
// EVENT SECTION — July 19, 2026 (7/19/26)
// EASY TO REMOVE: delete this whole `eventSection` export and
// the matching event block in HomePage.jsx.
// ============================================================
export const eventSection = {
  id: 'event-2026-07-19',
  kicker: 'Upcoming Event',
  date: 'July 19, 2026',
  title: 'SMCAA Community Event',
  body: 'Join the SMCAA family for a day of connection, resources, and celebration. More details coming soon — save the date!',
  cta: { label: 'Learn More', href: '#contact' },
  background: '#6a1b9a',
  color: '#ffffff',
  animation: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
