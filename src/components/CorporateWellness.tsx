import { Users, User, Salad, ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { CORPORATE_SERVICES } from '../data/siteContent'

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'group-fitness':     <Users size={20} />,
  'personal-coaching': <User size={20} />,
  'nutrition-lifestyle': <Salad size={20} />,
}

export default function CorporateWellness() {
  const headRef     = useReveal()
  const contentRef  = useReveal(0.1)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="corporate"
      className="section-py bg-white"
      aria-labelledby="corporate-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left – Image */}
          <div ref={contentRef} className="reveal order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-brand-navy/10">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80&auto=format&fit=crop"
                  alt="Corporate workplace wellness activity – professionals engaging in a group wellness session in a modern open office"
                  className="img-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Accent block */}
              <div
                className="absolute -bottom-6 -right-6 w-40 h-32 bg-brand-red/8 rounded-xl -z-10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right – Content */}
          <div ref={headRef} className="reveal order-1 lg:order-2 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
                <span className="eyebrow">For Corporate Organisations</span>
              </div>
              <h2 id="corporate-heading" className="heading-lg mb-5">
                Bring wellness into{' '}
                <span className="text-brand-red">the workplace.</span>
              </h2>
              <div className="flex flex-col gap-4">
                <p className="body-lg">
                  Healthier workplaces start with opportunities for people to move
                  more, build healthy routines and take a more active approach to
                  their wellbeing.
                </p>
                <p className="body-lg">
                  ONWAY aims to help organisations explore accessible wellness
                  initiatives suited to their teams and workplace culture.
                </p>
              </div>
            </div>

            {/* Service list */}
            <ul className="flex flex-col gap-4" role="list">
              {CORPORATE_SERVICES.map((svc, i) => (
                <li
                  key={svc.id}
                  className={`reveal reveal-delay-${i + 1} flex items-start gap-4 p-4 rounded-xl bg-brand-offwhite hover:bg-brand-blush/20 transition-colors duration-200`}
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-red flex-shrink-0 shadow-sm"
                    aria-hidden="true"
                  >
                    {SERVICE_ICONS[svc.id]}
                  </div>
                  <div>
                    <p className="text-sm font-700 text-brand-navy mb-1">{svc.title}</p>
                    <p className="text-sm leading-relaxed text-brand-body/75">{svc.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              <button
                onClick={scrollToContact}
                className="btn-primary text-base px-8 py-4"
                id="corporate-cta"
              >
                Discuss Corporate Wellness
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
