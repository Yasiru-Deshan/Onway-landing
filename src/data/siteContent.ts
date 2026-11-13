// ─────────────────────────────────────────────────────────────────────────────
// ONWAY – Site Content Data
// All copy, service data, process steps and configurable values live here.
// Update this file to change text, contacts, or add new content blocks.
// ─────────────────────────────────────────────────────────────────────────────

// ── CONFIGURABLE CONTACTS ────────────────────────────────────────────────────
// Replace with an actual business email when available.
export const CONTACT_EMAIL = 'hello@onway.co'
export const CONTACT_LOCATION = 'Dubai, UAE · International Partnerships'

// ── BACKEND INTEGRATION PLACEHOLDER ─────────────────────────────────────────
// When ready to connect the contact form to a backend:
// 1. Replace the handleFormSubmit function in ContactSection.tsx
// 2. Point it to your API endpoint or email service (e.g. Resend, SendGrid, Formspree)
// 3. Remove the simulated success timeout.
export const FORM_API_ENDPOINT = '' // e.g. 'https://api.onway.co/enquiries'

// ── NAVIGATION ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services',         href: '#services' },
  { label: 'Who We Work With', href: '#partnerships' },
  { label: 'How It Works',     href: '#how-it-works' },
  { label: 'About',            href: '#about' },
  { label: 'Contact',          href: '#contact' },
] as const

// ── SERVICES ─────────────────────────────────────────────────────────────────
export interface Service {
  id: string
  title: string
  description: string
  imageKey: string
  imageAlt: string
}

export const SERVICES: Service[] = [
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'Individual and group fitness coaching designed around different abilities, goals and fitness levels.',
    imageKey: 'training',
    imageAlt: 'Professional personal training session in a modern wellness studio',
  },
  {
    id: 'nutrition-coaching',
    title: 'Nutrition Coaching',
    description: 'Practical food and lifestyle guidance to help people develop sustainable everyday habits.',
    imageKey: 'nutrition',
    imageAlt: 'Healthy food preparation demonstrating nutrition coaching',
  },
  {
    id: 'online-coaching',
    title: 'Online Coaching',
    description: 'Flexible remote coaching that helps participants stay connected, accountable and consistent.',
    imageKey: 'online',
    imageAlt: 'Online wellness coaching video session',
  },
  {
    id: 'wellness-programmes',
    title: 'Wellness Programmes',
    description: 'Structured fitness and wellness initiatives designed for organisations and the people they serve.',
    imageKey: 'wellness',
    imageAlt: 'Group wellness programme session',
  },
]

// ── INDUSTRIES ───────────────────────────────────────────────────────────────
export interface Industry {
  id: string
  title: string
  description: string
  highlighted: boolean
  imageAlt: string
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'healthcare',
    title: 'Healthcare Clinics',
    description: 'Extend patient support beyond consultations with fitness and lifestyle coaching that complements existing clinical services.',
    highlighted: true,
    imageAlt: 'Modern healthcare clinic consultation environment',
  },
  {
    id: 'corporate',
    title: 'Corporate Organisations',
    description: 'Explore employee wellness initiatives, group training and fitness coaching to support healthier workplaces.',
    highlighted: true,
    imageAlt: 'Corporate workplace wellness activity',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    description: 'Explore fitness and wellness experiences for hotel guests, residents and hospitality teams.',
    highlighted: false,
    imageAlt: 'Hotel wellness and hospitality setting',
  },
  {
    id: 'other',
    title: 'Other Organisations',
    description: 'Develop tailored wellness collaborations for communities and organisations with specific wellbeing needs.',
    highlighted: false,
    imageAlt: 'Community wellness and wellbeing',
  },
]

// ── HEALTHCARE PROCESS ───────────────────────────────────────────────────────
export const HEALTHCARE_STEPS = [
  {
    number: '01',
    title: 'Clinic Referral',
    description: 'The clinic identifies suitable patients and communicates relevant activity restrictions.',
  },
  {
    number: '02',
    title: 'Personalised Onboarding',
    description: 'The coaching professional meets the patient online to understand their needs and agree on an appropriate starting plan.',
  },
  {
    number: '03',
    title: 'Ongoing Coaching',
    description: 'Patients receive scheduled training sessions, practical habit guidance and regular check-ins.',
  },
  {
    number: '04',
    title: 'Programme Review',
    description: 'The clinic and coaching professional review participation and discuss suitable next steps.',
  },
]

// ── CORPORATE SERVICES ───────────────────────────────────────────────────────
export const CORPORATE_SERVICES = [
  {
    id: 'group-fitness',
    title: 'Group Fitness Sessions',
    description: 'Guided group exercise experiences for employees.',
  },
  {
    id: 'personal-coaching',
    title: 'Personal Fitness Coaching',
    description: 'Individual coaching tailored to employee goals.',
  },
  {
    id: 'nutrition-lifestyle',
    title: 'Nutrition & Lifestyle Coaching',
    description: 'Practical support for healthier everyday habits.',
  },
]

// ── HOW IT WORKS ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Understand Your Needs',
    description: 'We learn about your organisation, your audience and the outcomes you want to support.',
  },
  {
    number: '02',
    title: 'Shape the Programme',
    description: 'We discuss suitable coaching services, delivery options and partnership arrangements.',
  },
  {
    number: '03',
    title: 'Start with a Pilot',
    description: 'Begin with a focused programme to explore participation and suitability.',
  },
  {
    number: '04',
    title: 'Review and Grow',
    description: 'Evaluate the experience and explore opportunities for continued collaboration.',
  },
]

// ── ORGANISATION TYPES (FORM SELECT) ────────────────────────────────────────
export const ORGANISATION_TYPES = [
  'Healthcare Clinic',
  'Corporate Organisation',
  'Hospitality',
  'Other',
] as const

export type OrganisationType = typeof ORGANISATION_TYPES[number]
