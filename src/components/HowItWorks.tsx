import { useReveal } from '../hooks/useReveal'
import { HOW_IT_WORKS_STEPS } from '../data/siteContent'

export default function HowItWorks() {
  const headRef = useReveal()

  return (
    <section
      id="how-it-works"
      className="section-py bg-brand-navy relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-blush/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 flex flex-col gap-16">

        {/* Header */}
        <div ref={headRef} className="reveal max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
            <span className="eyebrow text-brand-blush/80">Our Approach</span>
          </div>
          <h2 id="how-it-works-heading" className="heading-lg text-white mb-5">
            A straightforward approach{' '}
            <span className="text-brand-blush">to wellness partnerships.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <ProcessStep key={step.number} step={step} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProcessStepProps {
  step: { number: string; title: string; description: string }
  delay: number
}

function ProcessStep({ step, delay }: ProcessStepProps) {
  const ref = useReveal(0.1)

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay + 1} flex flex-col gap-5`}
    >
      {/* Number */}
      <div className="flex items-center gap-4">
        <span
          className="text-5xl font-800 text-white/10 leading-none select-none"
          aria-hidden="true"
        >
          {step.number}
        </span>
        <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
      </div>

      {/* Content */}
      <div>
        <div className="w-5 h-0.5 bg-brand-red mb-4" aria-hidden="true" />
        <h3 className="text-base font-700 text-white mb-3 leading-tight">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-white/60">
          {step.description}
        </p>
      </div>
    </div>
  )
}
