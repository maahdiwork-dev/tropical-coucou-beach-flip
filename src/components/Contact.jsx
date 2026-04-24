import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Clock, MessageCircle, Calendar } from 'lucide-react'

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

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-charcoal-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeInSection className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Contact
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Contactez-<span className="gradient-text">nous</span>
          </h2>
          <p className="text-charcoal-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Réservez votre journée paradisiaque ou posez-nous toutes vos questions.
            Notre équipe se fera un plaisir de vous répondre.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <FadeInSection>
            <div className="group p-6 sm:p-8 rounded-2xl bg-white border border-charcoal-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Téléphone
              </h3>
              <a
                href="tel:+21697425125"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                +216 97 425 125
              </a>
              <p className="text-charcoal-400 text-xs mt-2">
                Appelez-nous directement
              </p>
            </div>
          </FadeInSection>

          {/* WhatsApp */}
          <FadeInSection>
            <div className="group p-6 sm:p-8 rounded-2xl bg-white border border-charcoal-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/21697425125?text=Bonjour%2C%20je%20voudrais%20r%C3%A9server."
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Envoyer un message
              </a>
              <p className="text-charcoal-400 text-xs mt-2">
                Réponse rapide garantie
              </p>
            </div>
          </FadeInSection>

          {/* Hours */}
          <FadeInSection>
            <div className="group p-6 sm:p-8 rounded-2xl bg-white border border-charcoal-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 rounded-2xl bg-gold-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Horaires
              </h3>
              <div className="space-y-1">
                <p className="text-charcoal-600 text-sm font-medium">
                  <Calendar className="w-3.5 h-3.5 inline mr-1" />
                  7j/7
                </p>
                <p className="text-charcoal-600 text-sm">
                  9h00 – 19h00
                </p>
                <p className="text-charcoal-400 text-xs mt-2">
                  Saison estivale : mai – septembre
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Big CTA */}
        <FadeInSection className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-8 sm:p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                Prêt à réserver votre journée au paradis ?
              </h3>
              <p className="text-green-100/90 text-sm sm:text-base max-w-xl mx-auto mb-6">
                Contactez-nous dès maintenant via WhatsApp pour réserver votre formule
                et vérifier la disponibilité.
              </p>
              <motion.a
                href="https://wa.me/21697425125?text=Bonjour%2C%20je%20voudrais%20r%C3%A9server."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-3.5 rounded-full font-semibold text-sm shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Réserver maintenant sur WhatsApp
              </motion.a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
