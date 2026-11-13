import { ArrowRight, ChevronDown } from 'lucide-react'
import heroImage from '../assets/images/hero_coach.png'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-brand-offwhite overflow-hidden flex items-center"
      aria-label="Hero – Expert wellness. Wherever it matters."
    >
      {/* Background decorative accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-blush/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left – Editorial text */}
          <div className="flex flex-col gap-8 max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
              <span className="eyebrow">Expert Wellness Services</span>
            </div>

            {/* Headline */}
            <h1 className="heading-xl animate-[fadeUp_0.8s_ease_forwards]">
              Expert wellness.{' '}
              <span className="text-brand-red">Wherever</span>{' '}
              it matters.
            </h1>

            {/* Subtext */}
            <p
              className="body-lg max-w-lg animate-[fadeUp_0.9s_0.15s_ease_both]"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              Connecting organisations with personalised fitness and wellness
              services to help people build healthier habits through professional
              coaching and ongoing support.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-[fadeUp_0.9s_0.3s_ease_both]"
              style={{ opacity: 0, animationFillMode: 'forwards' }}
            >
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary text-base px-8 py-4"
                id="hero-cta-primary"
              >
                Explore Partnerships
                <ArrowRight size={17} />
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="btn-outline text-base px-8 py-4"
                id="hero-cta-services"
              >
                Our Services
              </button>
            </div>

            {/* Trust note */}
            <p className="text-xs text-brand-body/60 font-500 tracking-wide animate-[fadeIn_1s_0.5s_ease_both]" style={{ opacity: 0, animationFillMode: 'forwards' }}>
              Healthcare clinics · Corporate organisations · Hospitality
            </p>
          </div>

          {/* Right – Photography */}
          <div
            className="relative animate-[fadeIn_1s_0.2s_ease_both]"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-2xl shadow-brand-navy/15">
              <img
                src={heroImage}
                alt="Professional female fitness coach working with a client in a bright, contemporary wellness studio"
                className="img-cover"
                loading="eager"
                fetchPriority="high"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-5 py-4 shadow-xl shadow-brand-navy/10 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" aria-hidden="true" />
              <div>
                <p className="text-xs font-700 text-brand-navy leading-tight">Partnership enquiries open</p>
                <p className="text-xs text-brand-body/60">Dubai, UAE · International</p>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-brand-blush/60 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('introduction')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-body/40 hover:text-brand-red transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-600 tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  )
}
