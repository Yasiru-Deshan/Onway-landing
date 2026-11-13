import { useState, useEffect } from 'react'
import onwayLogo from '../assets/images/ONWAY_Logo.png'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NAV_LINKS } from '../data/siteContent'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route/anchor change
  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    // small delay so menu closes before scroll
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={e => { e.preventDefault(); handleNavClick('#hero') }}
              className="flex items-center group"
              aria-label="ONWAY – return to top"
            >
              <img
                src={onwayLogo}
                alt="ONWAY"
                className="h-9 w-auto object-contain"
              />
            </a>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-8" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                    className="text-sm font-600 text-brand-body hover:text-brand-red transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn-primary text-sm"
                id="nav-cta-partnership"
              >
                Discuss a Partnership
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-offwhite transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-navy/90 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <nav
          className={`absolute top-0 right-0 h-full w-72 bg-white flex flex-col pt-24 pb-10 px-8 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-6 flex-1" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-lg font-700 text-brand-navy hover:text-brand-red transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
            className="btn-primary w-full justify-center mt-6"
            id="mobile-nav-cta"
          >
            Discuss a Partnership
          </a>
        </nav>
      </div>
    </>
  )
}
