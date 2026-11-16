import { MapPin, Languages, ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import coachPhoto from '../assets/images/coach_lizandra_web.jpg'


export default function CoachProfile() {
  const textRef = useReveal()
  const photoRef = useReveal(0.1)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      className="section-py bg-brand-offwhite"
      aria-labelledby="coach-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left – Photo */}
          <div ref={photoRef} className="reveal">
            <div className="relative">
              {/* Photo container */}
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl shadow-brand-navy/15">
                <img
                  src={coachPhoto}
                  alt="Lizandra Strottmann – Personal Trainer and Nutrition Coach"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detail card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-xl shadow-brand-navy/10 max-w-[200px]">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={14} className="text-brand-red flex-shrink-0" aria-hidden="true" />
                  <p className="text-xs font-600 text-brand-navy">Dubai, UAE</p>
                </div>
                <div className="flex items-center gap-2">
                  <Languages size={14} className="text-brand-red flex-shrink-0" aria-hidden="true" />
                  <p className="text-xs font-600 text-brand-navy">English · Portuguese</p>
                </div>
              </div>

              {/* Accent */}
              <div
                className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-brand-blush/40 blur-xl pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right – Bio */}
          <div ref={textRef} className="reveal flex flex-col gap-7">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
                <span className="eyebrow">The Professional Behind Our Initial Coaching Offering</span>
              </div>
              <h2 id="coach-heading" className="heading-lg mb-2">
                Meet Lizandra{' '}
                <span className="text-brand-red">Strottmann.</span>
              </h2>
              <p className="text-base font-600 text-brand-body/60 mb-6">
                Personal Trainer · Sports &amp; Exercise Nutrition Coach
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="body-lg">
                Lizandra Strottmann is a Dubai-based Personal Trainer and Sports
                &amp; Exercise Nutrition Coach who works with individuals to support
                their fitness goals and develop sustainable lifestyle habits through
                personalised coaching.
              </p>
              <p className="body-lg">
                Through ONWAY, Lizandra is exploring partnerships with healthcare
                clinics and organisations interested in offering additional fitness
                and wellness support to their communities.
              </p>
            </div>

            {/* Detail chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: 'Location', value: 'Dubai, UAE' },
                { label: 'Languages', value: 'English & Portuguese' },
                { label: 'Focus', value: 'Fitness & Nutrition' },
              ].map(chip => (
                <div
                  key={chip.label}
                  className="bg-white rounded-full px-4 py-2 border border-brand-offwhite text-xs font-600 text-brand-body"
                >
                  <span className="text-brand-body/50">{chip.label}: </span>
                  {chip.value}
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToContact}
                className="btn-primary text-base px-8 py-4"
                id="coach-cta"
              >
                Discuss a Coaching Partnership
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

