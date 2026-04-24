import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Ship, UtensilsCrossed, Car, Sparkles } from 'lucide-react'

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

const packages = [
  {
    name: 'Formule Parasol',
    priceAdult: 65,
    priceChild: 45,
    icon: '⛱️',
    description: 'Profitez du soleil sous un parasol confortable sur notre plage de sable fin, avec vue imprenable sur la crique.',
    color: 'from-primary-500 to-primary-700',
    popular: false,
  },
  {
    name: 'Formule Cabanes',
    priceAdult: 70,
    priceChild: 45,
    icon: '🏡',
    description: 'Nos cabanes sur sable offrent un espace ombragé et privatif pour vous et vos proches, à quelques pas de l\'eau.',
    color: 'from-gold-500 to-gold-700',
    popular: true,
  },
  {
    name: 'Formule Paillotes',
    priceAdult: 80,
    priceChild: 45,
    icon: '🌴',
    description: 'L\'expérience ultime : des paillotes pied dans l\'eau pour une journée tropicale d\'exception, bercé par les vagues.',
    color: 'from-primary-700 to-charcoal-900',
    popular: false,
  },
]

const included = [
  { icon: UtensilsCrossed, label: 'Repas complet (entrée + plat + dessert)' },
  { icon: Ship, label: 'Transfert en bateau aller-retour' },
  { icon: Car, label: 'Parking sécurisé' },
  { icon: Sparkles, label: 'Accès plage privée' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-to-b from-charcoal-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeInSection className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Nos formules
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Choisissez votre{' '}
            <span className="gradient-text">expérience tropicale</span>
          </h2>
          <p className="text-charcoal-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tous nos forfaits incluent un repas complet, le transfert en bateau
            et le parking sécurisé. Il ne vous reste plus qu'à choisir votre coin de paradis.
          </p>
        </FadeInSection>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <FadeInSection key={index}>
              <div
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular
                    ? 'bg-white border-2 border-gold-400 shadow-xl shadow-gold-500/10'
                    : 'bg-white border border-charcoal-100 shadow-lg shadow-charcoal-500/5'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                    Populaire
                  </div>
                )}

                <div className={`bg-gradient-to-r ${pkg.color} p-6 sm:p-8 text-center`}>
                  <div className="text-4xl sm:text-5xl mb-3">{pkg.icon}</div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {pkg.name}
                  </h3>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <div className="flex items-end gap-3 mb-6">
                    <div>
                      <span className="text-charcoal-400 text-xs uppercase tracking-wide">Adulte</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-bold text-charcoal-900 font-heading">
                          {pkg.priceAdult}
                        </span>
                        <span className="text-charcoal-400 text-sm">DT</span>
                      </div>
                    </div>
                    <div className="pb-1 text-charcoal-300">|</div>
                    <div>
                      <span className="text-charcoal-400 text-xs uppercase tracking-wide">Enfant (4-12 ans)</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-bold text-primary-600 font-heading">
                          {pkg.priceChild}
                        </span>
                        <span className="text-charcoal-400 text-sm">DT</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/21697425125?text=Bonjour%2C%20je%20voudrais%20r%C3%A9server%20la%20Formule%20Parasol."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/25'
                        : 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/25'
                    }`}
                  >
                    Réserver cette formule
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Included items */}
        <FadeInSection className="mt-16 sm:mt-20">
          <div className="bg-white rounded-2xl border border-charcoal-100 shadow-lg p-8 sm:p-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal-900 text-center mb-8">
              Inclus dans <span className="text-primary-600">tous</span> nos forfaits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-charcoal-50/50">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-charcoal-700 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Extra info */}
        <FadeInSection className="mt-8">
          <div className="text-center">
            <p className="text-charcoal-400 text-sm">
              💡 <span className="font-medium">Activités nautiques</span> disponibles sur place — Ask about our water sports!
            </p>
            <p className="text-charcoal-400 text-sm mt-2">
              🍹 <span className="font-medium">Tropy-Bar</span> — Cocktails et smoothies disponibles à la carte
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
