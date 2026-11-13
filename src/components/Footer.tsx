import { CONTACT_EMAIL, CONTACT_LOCATION } from '../data/siteContent'
import onwayLogo from '../assets/images/ONWAY_Logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#6494D1] text-white" aria-label="Site footer">
      <div className="section-container">
        {/* Top rule */}
        <div className="border-t border-white/20 pt-16 pb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Logo */}
              <a
                href="#hero"
                onClick={e => { e.preventDefault(); scrollTo('#hero') }}
                aria-label="ONWAY – return to top"
                className="inline-block"
              >
                <img
                  src={onwayLogo}
                  alt="ONWAY"
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
              </a>

              <p className="text-sm text-white leading-relaxed max-w-xs">
                Expert wellness. Wherever it matters.
              </p>

              <div className="flex flex-col gap-2 text-sm">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-white hover:text-white/80 transition-colors inline-flex items-center gap-2"
                  aria-label={`Contact ONWAY by email: ${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="text-white">{CONTACT_LOCATION}</p>
              </div>
            </div>

            {/* Navigation */}
            <nav aria-label="Footer navigation">
              <p className="text-xs font-700 uppercase tracking-[0.18em] text-white mb-5">
                Navigation
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {[
                  { label: 'Services',      href: '#services' },
                  { label: 'Partnerships',  href: '#partnerships' },
                  { label: 'How It Works',  href: '#how-it-works' },
                  { label: 'About',         href: '#about' },
                  { label: 'Contact',       href: '#contact' },
                ].map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                      className="text-sm text-white hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Get in touch */}
            <div>
              <p className="text-xs font-700 uppercase tracking-[0.18em] text-white mb-5">
                Get In Touch
              </p>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white leading-relaxed">
                  Interested in a wellness partnership? We'd love to hear from you.
                </p>
                <a
                  href="#contact"
                  onClick={e => { e.preventDefault(); scrollTo('#contact') }}
                  className="inline-flex items-center gap-2 bg-brand-red text-white text-sm font-600 px-5 py-3 rounded-full hover:bg-[#c03e39] transition-all duration-200"
                  id="footer-cta"
                >
                  Discuss a Partnership
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white">
            © {year} ONWAY. All rights reserved.
          </p>
          <p className="text-xs text-white">
            Dubai, UAE · International Partnerships
          </p>
        </div>
      </div>
    </footer>
  )
}
