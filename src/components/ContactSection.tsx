import { useState, type FormEvent } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Mail, MapPin, ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  ORGANISATION_TYPES,
  type OrganisationType,
} from '../data/siteContent'

// ─────────────────────────────────────────────────────────────────────────────
// BACKEND INTEGRATION PLACEHOLDER
//
// This form currently runs client-side only. To connect to a backend:
//   1. Import FORM_API_ENDPOINT from '../data/siteContent'
//   2. Replace the simulateFormSubmit function below with a real fetch() call:
//
//   const response = await fetch(FORM_API_ENDPOINT, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(formData),
//   })
//   if (!response.ok) throw new Error('Submission failed')
//
// Compatible with: Resend, SendGrid, Formspree, AWS SES, etc.
// ─────────────────────────────────────────────────────────────────────────────

interface FormData {
  fullName:         string
  workEmail:        string
  organisationName: string
  organisationType: OrganisationType | ''
  country:          string
  message:          string
}

interface FormErrors {
  fullName?:         string
  workEmail?:        string
  organisationName?: string
  organisationType?: string
  country?:          string
  message?:          string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const INITIAL_FORM: FormData = {
  fullName:         '',
  workEmail:        '',
  organisationName: '',
  organisationType: '',
  country:          '',
  message:          '',
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)
  const [errors,   setErrors]   = useState<FormErrors>({})
  const [status,   setStatus]   = useState<FormStatus>('idle')
  const headRef = useReveal()

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!formData.fullName.trim())          e.fullName         = 'Please enter your full name.'
    if (!validateEmail(formData.workEmail)) e.workEmail        = 'Please enter a valid work email address.'
    if (!formData.organisationName.trim())  e.organisationName = 'Please enter your organisation name.'
    if (!formData.organisationType)         e.organisationType = 'Please select an organisation type.'
    if (!formData.country.trim())           e.country          = 'Please enter your country.'
    if (!formData.message.trim())           e.message          = 'Please include a message.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const simulateFormSubmit = async (data: FormData): Promise<void> => {
    // Replace this with a real API call when backend is ready.
    console.info('[ONWAY] Partnership enquiry (dev mode):', data)
    return new Promise(resolve => setTimeout(resolve, 1600))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      await simulateFormSubmit(formData)
      setStatus('success')
      setFormData(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="section-py bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

          {/* Left – Intro */}
          <div ref={headRef} className="reveal lg:col-span-2 flex flex-col gap-8 lg:py-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
                <span className="eyebrow">Get In Touch</span>
              </div>
              <h2 id="contact-heading" className="heading-lg mb-5">
                Discuss a{' '}
                <span className="text-brand-red">partnership.</span>
              </h2>
              <p className="body-lg">
                We'd love to hear about your organisation and explore how ONWAY
                could support your wellness goals.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4 pt-4 border-t border-brand-offwhite">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 group"
                aria-label={`Email us at ${CONTACT_EMAIL}`}
              >
                <div
                  className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0"
                  aria-hidden="true"
                >
                  <Mail size={17} />
                </div>
                <div>
                  <p className="text-xs font-600 text-brand-body/50 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm font-700 text-brand-navy group-hover:text-brand-red transition-colors">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0"
                  aria-hidden="true"
                >
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="text-xs font-600 text-brand-body/50 uppercase tracking-wider mb-0.5">Location</p>
                  <p className="text-sm font-700 text-brand-navy">{CONTACT_LOCATION}</p>
                </div>
              </div>
            </div>

            {/* Partnership types */}
            <div className="flex flex-col gap-3 pt-4">
              <p className="text-xs font-700 uppercase tracking-widest text-brand-body/50">We work with</p>
              {['Healthcare Clinics', 'Corporate Organisations', 'Hospitality Businesses', 'Other Organisations'].map(type => (
                <div key={type} className="flex items-center gap-2 text-sm text-brand-body/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red" aria-hidden="true" />
                  {type}
                </div>
              ))}
            </div>
          </div>

          {/* Right – Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <SuccessState onReset={() => setStatus('idle')} />
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5 bg-brand-offwhite rounded-2xl p-8 md:p-10"
                aria-label="Partnership enquiry form"
              >
                {/* Row 1 – Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    id="fullName"
                    label="Full Name"
                    type="text"
                    name="fullName"
                    placeholder="Your name"
                    value={formData.fullName}
                    error={errors.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                  <FormField
                    id="workEmail"
                    label="Work Email"
                    type="email"
                    name="workEmail"
                    placeholder="you@organisation.com"
                    value={formData.workEmail}
                    error={errors.workEmail}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                {/* Row 2 – Org name + Type */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    id="organisationName"
                    label="Organisation Name"
                    type="text"
                    name="organisationName"
                    placeholder="Your organisation"
                    value={formData.organisationName}
                    error={errors.organisationName}
                    onChange={handleChange}
                    autoComplete="organization"
                    required
                  />
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="organisationType"
                      className="text-xs font-700 text-brand-navy uppercase tracking-wider"
                    >
                      Organisation Type <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="organisationType"
                      name="organisationType"
                      value={formData.organisationType}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby={errors.organisationType ? 'organisationType-error' : undefined}
                      className={`form-input w-full px-4 py-3 rounded-xl border bg-white text-sm font-500 text-brand-body transition-colors appearance-none cursor-pointer
                        ${errors.organisationType
                          ? 'border-red-400 bg-red-50/50'
                          : 'border-brand-offwhite hover:border-brand-blush'
                        }`}
                    >
                      <option value="" disabled>Select type…</option>
                      {ORGANISATION_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.organisationType && (
                      <p id="organisationType-error" className="text-xs text-red-500 flex items-center gap-1 mt-0.5" role="alert">
                        <AlertCircle size={12} /> {errors.organisationType}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3 – Country */}
                <FormField
                  id="country"
                  label="Country"
                  type="text"
                  name="country"
                  placeholder="e.g. United Arab Emirates"
                  value={formData.country}
                  error={errors.country}
                  onChange={handleChange}
                  autoComplete="country-name"
                  required
                />

                {/* Row 4 – Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-700 text-brand-navy uppercase tracking-wider"
                  >
                    Message <span className="text-brand-red" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your organisation and what you're looking to explore…"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`form-input w-full px-4 py-3 rounded-xl border bg-white text-sm font-500 text-brand-body resize-none transition-colors
                      ${errors.message
                        ? 'border-red-400 bg-red-50/50'
                        : 'border-brand-offwhite hover:border-brand-blush'
                      }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-500 flex items-center gap-1 mt-0.5" role="alert">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div
                    className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                    role="alert"
                  >
                    <AlertCircle size={16} className="text-red-500 flex-shrink-0" aria-hidden="true" />
                    <p className="text-sm text-red-700">
                      Something went wrong. Please try again or email us directly at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-600">
                        {CONTACT_EMAIL}
                      </a>.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary text-base px-8 py-4 w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
                  id="contact-form-submit"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Partnership Enquiry
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-brand-body/40">
                  By submitting this form you agree to us using your details to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

interface FormFieldProps {
  id: string
  label: string
  type: string
  name: string
  placeholder: string
  value: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
  required?: boolean
}

function FormField({
  id, label, type, name, placeholder, value, error, onChange, autoComplete, required,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-700 text-brand-navy uppercase tracking-wider"
      >
        {label}
        {required && <span className="text-brand-red ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete={autoComplete}
        className={`form-input w-full px-4 py-3 rounded-xl border bg-white text-sm font-500 text-brand-body transition-colors
          ${error
            ? 'border-red-400 bg-red-50/50'
            : 'border-brand-offwhite hover:border-brand-blush'
          }`}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500 flex items-center gap-1 mt-0.5" role="alert">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  )
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 bg-brand-offwhite rounded-2xl p-10 md:p-16 min-h-[400px]">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle2 size={32} className="text-green-600" aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-xl font-700 text-brand-navy mb-3">Enquiry sent successfully</h3>
        <p className="text-sm text-brand-body/70 max-w-sm leading-relaxed">
          Thank you for reaching out. We'll review your message and be in touch
          shortly to explore how we could work together.
        </p>
      </div>
      <button
        onClick={onReset}
        className="btn-outline text-sm"
        id="contact-form-reset"
      >
        Send another enquiry
      </button>
    </div>
  )
}
