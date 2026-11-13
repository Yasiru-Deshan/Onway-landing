import { ArrowRight, ShieldCheck } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { HEALTHCARE_STEPS } from '../data/siteContent'

export default function HealthcarePartnership() {
  const headRef  = useReveal()
  const stepsRef = useReveal(0.1)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="healthcare"
      className="section-py bg-brand-offwhite relative overflow-hidden"
      aria-labelledby="healthcare-heading"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blush/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-red/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 flex flex-col gap-16">

        {/* Header */}
        <div ref={headRef} className="reveal max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
            <span className="eyebrow">For Healthcare Providers</span>
          </div>
          <h2 id="healthcare-heading" className="heading-lg mb-6">
            Supporting patients{' '}
            <span className="text-brand-red">beyond the appointment.</span>
          </h2>
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="body-lg">
              Patients may receive valuable guidance during their clinic visits,
              but turning that advice into sustainable everyday habits can take
              continued effort.
            </p>
            <p className="body-lg">
              ONWAY explores partnerships that give clinics an additional way to
              offer fitness and lifestyle coaching through structured follow-up
              programmes.
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div ref={stepsRef} className="reveal">
          <p className="text-xs font-700 uppercase tracking-[0.18em] text-brand-body/50 mb-10">
            Illustrative Partnership Workflow
          </p>

          {/* Desktop – horizontal */}
          <div className="hidden lg:grid grid-cols-4 gap-0 relative">
            {/* Connector line */}
            <div
              className="absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-blush via-brand-red/50 to-brand-blush"
              aria-hidden="true"
            />

            {HEALTHCARE_STEPS.map((step, i) => (
              <HealthcareStep key={step.number} step={step} delay={i} />
            ))}
          </div>

          {/* Mobile – vertical */}
          <div className="flex flex-col gap-8 lg:hidden">
            {HEALTHCARE_STEPS.map((step, i) => (
              <div key={step.number} className={`reveal reveal-delay-${i + 1} flex gap-5`}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-800 flex-shrink-0">
                    {step.number}
                  </div>
                  {i < HEALTHCARE_STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-brand-blush min-h-[40px]" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="text-base font-700 text-brand-navy mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-body/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + disclaimer */}
        <div className="flex flex-col gap-6 items-start">
          <button
            onClick={scrollToContact}
            className="btn-primary text-base px-8 py-4"
            id="healthcare-cta"
          >
            Explore a Clinic Partnership
            <ArrowRight size={17} />
          </button>

          {/* Disclaimer */}
          <div className="flex items-start gap-3 max-w-2xl bg-white rounded-xl px-5 py-4 border border-brand-offwhite">
            <ShieldCheck size={16} className="text-brand-red mt-0.5 flex-shrink-0" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-brand-body/60 italic">
              Coaching is provided within the professional's qualifications and scope
              of practice. Medical treatment and clinical decisions remain the
              responsibility of the clinic's healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

interface HealthcareStepProps {
  step: { number: string; title: string; description: string }
  delay: number
}

function HealthcareStep({ step, delay }: HealthcareStepProps) {
  const ref = useReveal(0.1)

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay + 1} flex flex-col items-center text-center px-6`}
    >
      {/* Number circle */}
      <div className="relative z-10 mb-6">
        <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-brand-red/20 flex items-center justify-center shadow-md shadow-brand-red/10">
          <span className="text-sm font-800 text-brand-red">{step.number}</span>
        </div>
      </div>

      <h3 className="text-base font-700 text-brand-navy mb-3 leading-tight">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-brand-body/80">
        {step.description}
      </p>
    </div>
  )
}
