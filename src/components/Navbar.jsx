import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Palmtree } from 'lucide-react'

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Nos Formules', href: '#services' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Témoignages', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-primary-900/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Palmtree
              className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300 ${
                scrolled ? 'text-primary-600' : 'text-white'
              }`}
            />
            <span
              className={`font-heading text-lg sm:text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-charcoal-900' : 'text-white'
              }`}
            >
              Tropical Coucou
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary-400 ${
                  scrolled ? 'text-charcoal-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/21697425125?text=Bonjour%2C%20je%20voudrais%20r%C3%A9server."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40"
            >
              Réserver
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-charcoal-900' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-charcoal-700 hover:text-primary-600 font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/21697425125?text=Bonjour%2C%20je%20voudrais%20r%C3%A9server."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gold-500 hover:bg-gold-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center transition-colors"
              >
                Réserver maintenant
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
