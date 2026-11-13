import { Building2, Briefcase, Hotel, Users, ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { INDUSTRIES } from '../data/siteContent'

const ICONS: Record<string, React.ReactNode> = {
  healthcare:  <Building2 size={22} />,
  corporate:   <Briefcase size={22} />,
  hospitality: <Hotel size={22} />,
  other:       <Users size={22} />,
}

// Unsplash high-quality images by topic – reliable, freely licensable
const INDUSTRY_IMAGES: Record<string, string> = {
  healthcare:  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop',
  corporate:   'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop',
  hospitality: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&auto=format&fit=crop',
  other:       'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop',
}

export default function Industries() {
  const headRef = useReveal()

  return (
    <section
      id="partnerships"
      className="section-py bg-white"
      aria-labelledby="industries-heading"
    >
      <div className="section-container flex flex-col gap-16">

        {/* Header */}
        <div ref={headRef} className="reveal">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
            <span className="eyebrow">Partnership Opportunities</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 id="industries-heading" className="heading-lg max-w-xl">
              Wellness partnerships{' '}
              <span className="text-brand-red">across industries.</span>
            </h2>
            <p className="body-base max-w-sm text-brand-body/80">
              Different organisations have different wellness needs. We work with
              partners to explore services that fit their people, goals and
              existing operations.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface IndustryCardProps {
  industry: typeof INDUSTRIES[number]
  delay: number
}

function IndustryCard({ industry, delay }: IndustryCardProps) {
  const ref = useReveal(0.1)
  const delayClass = `reveal-delay-${(delay % 4) + 1}`

  const isHighlighted = industry.highlighted

  return (
    <article
      ref={ref}
      className={`reveal ${delayClass} group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-navy/10 ${
        isHighlighted
          ? 'border-2 border-brand-red/20'
          : 'border border-brand-offwhite'
      }`}
      aria-label={industry.title}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={INDUSTRY_IMAGES[industry.id]}
          alt={industry.imageAlt}
          className="img-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 ${
            isHighlighted
              ? 'bg-gradient-to-t from-brand-navy/60 via-brand-navy/20 to-transparent'
              : 'bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent'
          } pointer-events-none`}
        />

        {/* Highlighted badge */}
        {isHighlighted && (
          <div className="absolute top-3 right-3 bg-brand-red text-white text-[10px] font-700 uppercase tracking-wider px-2.5 py-1 rounded-full">
            Priority Focus
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={`flex flex-col gap-3 p-6 flex-1 ${
          isHighlighted ? 'bg-white' : 'bg-brand-offwhite/40'
        }`}
      >
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center ${
            isHighlighted
              ? 'bg-brand-red/10 text-brand-red'
              : 'bg-brand-navy/8 text-brand-navy'
          }`}
          aria-hidden="true"
        >
          {ICONS[industry.id]}
        </div>

        <h3
          className={`text-lg font-700 leading-tight ${
            isHighlighted ? 'text-brand-navy' : 'text-brand-body'
          }`}
        >
          {industry.title}
        </h3>

        <p className="text-sm leading-relaxed text-brand-body/75 flex-1">
          {industry.description}
        </p>

        {isHighlighted && (
          <a
            href={`#${industry.id === 'healthcare' ? 'healthcare' : 'corporate'}`}
            onClick={e => {
              e.preventDefault()
              document.getElementById(industry.id === 'healthcare' ? 'healthcare' : 'corporate')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-1.5 text-xs font-700 text-brand-red hover:gap-3 transition-all mt-1"
            aria-label={`Learn more about ${industry.title}`}
          >
            Learn more <ArrowRight size={13} />
          </a>
        )}
      </div>
    </article>
  )
}
