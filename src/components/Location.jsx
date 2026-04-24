import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Ship, Navigation } from 'lucide-react'

function FadeInSection({ children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeInSection className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Localisation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Retrouvez votre{' '}
            <span className="gradient-text">paradis</span>
          </h2>
          <p className="text-charcoal-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Situé à Ghar El Melh, dans la magnifique région de Bizerte, notre île
            n'est accessible que par bateau. Suivez les indications ci-dessous
            pour nous rejoindre.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Map */}
          <FadeInSection className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-charcoal-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.224!2d10.2133959!3d37.147616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2c100236e1e49%3A0xc08bad7667ad186a!2sTropical%20Coucou%20Beach!5e0!3m2!1sfr!2stn!4v1625234567890!5m2!1sfr!2stn"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tropical Coucou Beach - Carte"
                className="w-full"
              />
            </div>
          </FadeInSection>

          {/* Info cards */}
          <FadeInSection className="lg:col-span-2 flex flex-col gap-6">
            {/* Address */}
            <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-charcoal-50 to-primary-50/30 border border-charcoal-100">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-charcoal-900 mb-1">
                  Adresse
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  Coucou Beach<br />
                  Ghar El Melh, Bizerte 7033<br />
                  Tunisie
                </p>
              </div>
            </div>

            {/* Boat access */}
            <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-gold-50/50 to-gold-100/30 border border-gold-200/50">
              <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0">
                <Ship className="w-6 h-6 text-gold-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-charcoal-900 mb-1">
                  Accès par bateau
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  L'île de Coco Beach est accessible uniquement par bateau.
                  Une traversée de 5 minutes vous mènera vers notre crique paradisiaque.
                  Le départ se fait depuis notre point d'embarquement à Ghar El Melh.
                </p>
              </div>
            </div>

            {/* GPS */}
            <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-charcoal-50 to-primary-50/30 border border-charcoal-100">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-charcoal-900 mb-1">
                  Coordonnées GPS
                </h3>
                <p className="text-charcoal-500 text-sm">
                  37.147616, 10.2133959
                </p>
              </div>
            </div>

            {/* Directions link */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=37.147616,10.2133959"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary-500/25"
            >
              Itinéraire Google Maps
            </a>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
