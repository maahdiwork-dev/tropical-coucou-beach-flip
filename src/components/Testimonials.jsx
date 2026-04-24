import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

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

const testimonials = [
  {
    name: 'Nesrine Benzina',
    rating: 5,
    text: "Totalement satisfaite je recommande vivement ! ya3tikom essa77a. tout est super bien.",
    highlight: true,
  },
  {
    name: 'Mohamed Amine',
    rating: 5,
    text: "Une expérience incroyable ! La traversée en bateau donne vraiment un côté aventure. La crique est magnifique et la nourriture était délicieuse. On a passé une journée parfaite en famille. Merci pour tout !",
    highlight: false,
  },
  {
    name: 'Yasmine Trabelsi',
    rating: 5,
    text: "Le cadre est tout simplement magique. Les paillotes pied dans l'eau sont le luxe ultime. Le personnel est adorable et les cocktails du Tropy-Bar sont à tomber. On reviendra sans hésiter !",
    highlight: false,
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'fill-gold-400 text-gold-400'
              : 'fill-charcoal-200 text-charcoal-200'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-b from-charcoal-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeInSection className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Témoignages
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Ce que disent nos{' '}
            <span className="gradient-text">visiteurs</span>
          </h2>
          <p className="text-charcoal-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Découvrez les avis de ceux qui ont déjà vécu l'expérience Tropical Coucou Beach.
          </p>
        </FadeInSection>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeInSection key={index}>
              <div
                className={`relative p-6 sm:p-8 rounded-2xl transition-all duration-500 hover:shadow-xl ${
                  testimonial.highlight
                    ? 'bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-xl shadow-primary-500/20'
                    : 'bg-white border border-charcoal-100 shadow-lg shadow-charcoal-500/5 hover:-translate-y-1'
                }`}
              >
                {/* Quote icon */}
                <Quote
                  className={`w-8 h-8 mb-4 ${
                    testimonial.highlight
                      ? 'text-white/20'
                      : 'text-primary-100'
                  }`}
                />

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Text */}
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 ${
                    testimonial.highlight
                      ? 'text-white/90'
                      : 'text-charcoal-600'
                  }`}
                >
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm ${
                      testimonial.highlight
                        ? 'bg-white/20 text-white'
                        : 'bg-primary-100 text-primary-700'
                    }`}
                  >
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div
                      className={`font-semibold text-sm ${
                        testimonial.highlight ? 'text-white' : 'text-charcoal-900'
                      }`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className={`text-xs ${
                        testimonial.highlight ? 'text-white/60' : 'text-charcoal-400'
                      }`}
                    >
                      Visiteur vérifié
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
