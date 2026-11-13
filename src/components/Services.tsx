import { useReveal } from '../hooks/useReveal'
import { SERVICES } from '../data/siteContent'
import trainingImg from '../assets/images/service_training.png'
import nutritionImg from '../assets/images/service_nutrition.png'
import onlineImg    from '../assets/images/service_online.png'
import wellnessImg  from '../assets/images/service_wellness.png'

const IMAGE_MAP: Record<string, string> = {
  training:  trainingImg,
  nutrition: nutritionImg,
  online:    onlineImg,
  wellness:  wellnessImg,
}

export default function Services() {
  const headRef = useReveal()

  return (
    <section
      id="services"
      className="section-py bg-brand-offwhite"
      aria-labelledby="services-heading"
    >
      <div className="section-container flex flex-col gap-16">

        {/* Header */}
        <div ref={headRef} className="reveal max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-red" aria-hidden="true" />
            <span className="eyebrow">What We Offer</span>
          </div>
          <h2 id="services-heading" className="heading-lg mb-5">
            Wellness services that{' '}
            <span className="text-brand-red">make a difference.</span>
          </h2>
          <p className="body-lg max-w-lg">
            We explore tailored coaching services based on your organisation's
            needs, audience and objectives.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-brand-body/50 italic text-center max-w-xl mx-auto">
          Services are available through tailored partnership arrangements.
          Availability may vary by location.
        </p>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: typeof SERVICES[number]
  delay: number
}

function ServiceCard({ service, delay }: ServiceCardProps) {
  const ref = useReveal(0.1)
  const delayClass = `reveal-delay-${delay + 1}` as string

  return (
    <article
      ref={ref}
      className={`reveal ${delayClass} group flex flex-col bg-white rounded-2xl overflow-hidden border border-brand-offwhite hover:border-brand-blush hover:shadow-lg hover:shadow-brand-navy/8 transition-all duration-300`}
      aria-label={service.title}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={IMAGE_MAP[service.imageKey]}
          alt={service.imageAlt}
          className="img-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="w-6 h-0.5 bg-brand-red" aria-hidden="true" />
        <h3 className="text-lg font-700 text-brand-navy leading-tight">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-brand-body/80 flex-1">
          {service.description}
        </p>
      </div>
    </article>
  )
}
