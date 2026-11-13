import { useReveal } from '../hooks/useReveal'
import introImage from '../assets/images/intro_lifestyle.png'

export default function Introduction() {
  const textRef = useReveal()
  const imgRef  = useReveal(0.1)

  return (
    <section
      id="introduction"
      className="section-py bg-white"
      aria-labelledby="intro-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left – Text */}
          <div ref={textRef} className="reveal flex flex-col gap-7 max-w-lg">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
              <span className="eyebrow">A More Connected Approach to Wellness</span>
            </div>

            <h2 id="intro-heading" className="heading-lg">
              Wellness support designed{' '}
              <span className="italic font-700 text-brand-red">around people.</span>
            </h2>

            <div className="flex flex-col gap-5">
              <p className="body-lg">
                Supporting healthier lifestyles takes more than a single appointment
                or recommendation. People often need practical guidance, professional
                coaching and continued encouragement to turn healthy intentions into
                everyday habits.
              </p>
              <p className="body-lg">
                ONWAY works with organisations to explore and deliver personalised
                fitness and wellness services that complement their existing offerings.
              </p>
            </div>

            {/* Stats row – honest, no invented numbers */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-brand-offwhite">
              {[
                { label: 'Focus Areas', value: 'Fitness & Nutrition' },
                { label: 'Based in',    value: 'Dubai, UAE' },
                { label: 'Reach',       value: 'International' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="text-xs font-600 uppercase tracking-widest text-brand-body/50 mb-1">{stat.label}</p>
                  <p className="text-sm font-700 text-brand-navy">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Photography */}
          <div ref={imgRef} className="reveal reveal-delay-2 relative">
            {/* Primary image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl shadow-brand-navy/10">
              <img
                src={introImage}
                alt="Person in stylish athletic wear walking in a modern urban environment, representing an active wellness lifestyle"
                className="img-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/15 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Accent block */}
            <div
              className="absolute -bottom-8 -left-8 w-48 h-36 bg-brand-blush/30 rounded-xl -z-10"
              aria-hidden="true"
            />

            {/* Quote chip */}
            <div className="absolute top-8 -left-6 bg-white rounded-xl px-4 py-3 shadow-lg shadow-brand-navy/10 max-w-[180px]">
              <p className="text-xs text-brand-body/70 leading-relaxed">
                "Turning healthy intentions into everyday habits."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
