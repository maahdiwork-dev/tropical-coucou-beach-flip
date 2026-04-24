import { Palmtree, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Palmtree className="w-7 h-7 text-primary-400" />
              <span className="font-heading text-xl font-bold">
                Tropical Coucou Beach
              </span>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-4">
              Un coin de paradis niché dans une crique, accessible uniquement par bateau.
              Votre escapade tropicale en Méditerranée.
            </p>
            <p className="text-charcoal-500 text-xs">
              Ghar El Melh, Bizerte 7033, Tunisie
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Liens rapides</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'À propos', href: '#about' },
                { label: 'Nos Formules', href: '#services' },
                { label: 'Galerie', href: '#gallery' },
                { label: 'Témoignages', href: '#testimonials' },
                { label: 'Localisation', href: '#location' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-charcoal-400 hover:text-primary-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-charcoal-500 text-xs uppercase tracking-wide mb-1">Téléphone</p>
                <a
                  href="tel:+21697425125"
                  className="text-charcoal-300 hover:text-primary-400 text-sm transition-colors"
                >
                  +216 97 425 125
                </a>
              </div>
              <div>
                <p className="text-charcoal-500 text-xs uppercase tracking-wide mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/21697425125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-300 hover:text-primary-400 text-sm transition-colors"
                >
                  Envoyer un message
                </a>
              </div>
              <div>
                <p className="text-charcoal-500 text-xs uppercase tracking-wide mb-1">Horaires</p>
                <p className="text-charcoal-300 text-sm">
                  7j/7 — 9h à 19h
                </p>
                <p className="text-charcoal-500 text-xs">Saison estivale (mai – septembre)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-charcoal-500 text-xs">
              © {currentYear} Tropical Coucou Beach. Tous droits réservés.
            </p>
            <p className="text-charcoal-500 text-xs flex items-center gap-1">
              Créé avec <Heart className="w-3 h-3 text-red-400 fill-red-400" /> par{' '}
              <span className="text-charcoal-300 font-medium">Kniss Digital</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
