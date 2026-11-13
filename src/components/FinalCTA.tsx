import { ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function FinalCTA() {
  const ref = useReveal(0.1)

  return (
    <section
      className="py-24 md:py-32 bg-brand-navy relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background accents */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blush/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div ref={ref} className="reveal flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
            <span className="eyebrow text-brand-blush/70">Get In Touch</span>
            <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 id="final-cta-heading" className="heading-xl text-white">
            Let's make wellness{' '}
            <span className="text-brand-blush">more accessible.</span>
          </h2>

          {/* Body */}
          <p className="body-lg text-white/70 max-w-xl">
            Whether you're a healthcare provider, corporate organisation or another
            business exploring wellness initiatives, we'd love to discuss how we
            could work together.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 bg-brand-red text-white font-700 text-base px-10 py-5 rounded-full hover:bg-[#c03e39] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              id="final-cta-primary"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              onClick={e => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-outline-white text-base px-10 py-5"
              id="final-cta-secondary"
            >
              Contact ONWAY
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
