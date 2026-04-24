import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Ship, UtensilsCrossed, Martini, Waves, ShieldCheck, Clock } from 'lucide-react'

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

const features = [
  {
    icon: Ship,
    title: 'Accès exclusif par bateau',
    description: 'Embarquez pour une traversée de 5 minutes vers notre île privée. Une expérience unique commence dès le départ.',
  },
  {
    icon: Waves,
    title: 'Crique paradisiaque',
    description: 'Une plage préservée nichée dans une crique naturelle, loin du tumulte, avec des eaux cristallines.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cuisine méditerranéenne',
    description: 'Savourez un repas complet élaboré avec des produits frais et locaux : entrée, plat et dessert inclus.',
  },
  {
    icon: Martini,
    title: 'Tropy-Bar',
    description: 'Détendez-vous avec nos cocktails tropicaux et smoothies rafraîchissements face à la mer.',
  },
  {
    icon: ShieldCheck,
    title: 'Parking sécurisé',
    description: 'Votre véhicule est en sécurité dans notre parking surveillé pendant toute votre journée.',
  },
  {
    icon: Clock,
    title: 'Ouvert 7j/7',
    description: 'De mai à septembre, de 9h à 19h, profitez de notre paradis tropical chaque jour de la semaine.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeInSection className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Bienvenue au paradis
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Une expérience{' '}
            <span className="gradient-text">tropicale</span>{' '}
            unique en Tunisie
          </h2>
          <p className="text-charcoal-500 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Niché dans la magnifique crique de Ghar El Melh, à Bizerte, le Tropical Coucou Beach
            vous invite à vivre une journée hors du temps. Accessible uniquement par une courte
            traversée en bateau de 5 minutes, notre île privée est un véritable sanctuaire de
            détente où la beauté sauvage de la Méditerranée rencontre le luxe tropical.
          </p>
        </FadeInSection>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FadeInSection key={index}>
              <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-charcoal-50/80 to-primary-50/30 border border-charcoal-100/50 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/20">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Highlight banner */}
        <FadeInSection className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="text-center md:text-left flex-1">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                  Plus qu'une plage, une escapade
                </h3>
                <p className="text-primary-100/90 text-sm sm:text-base leading-relaxed max-w-xl">
                  Le Tropical Coucou Beach n'est pas un beach club ordinaire. C'est une île
                  où le temps semble s'arrêter, où le doux bruit des vagues se mêle aux
                  rires des convives. Un lieu unique en Tunisie, pensé pour ceux qui
                  recherchent l'exclusivité et la sérénité au cœur de la nature méditerranéenne.
                </p>
              </div>
              <div className="flex-shrink-0 text-center">
                <div className="text-5xl sm:text-6xl font-bold text-gold-400 font-heading">5 min</div>
                <div className="text-primary-200 text-sm mt-1">de traversée en bateau</div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
