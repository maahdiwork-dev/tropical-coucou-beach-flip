import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera } from 'lucide-react'

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

const galleryItems = [
  {
    label: 'Vue aérienne',
    gradient: 'gallery-gradient-1',
    emoji: '🏝️',
    size: 'sm:col-span-2 sm:row-span-2',
  },
  {
    label: 'Nos cabanes',
    gradient: 'gallery-gradient-2',
    emoji: '🏡',
    size: '',
  },
  {
    label: 'La crique',
    gradient: 'gallery-gradient-3',
    emoji: '🌊',
    size: '',
  },
  {
    label: 'Cuisine méditerranéenne',
    gradient: 'gallery-gradient-4',
    emoji: '🍽️',
    size: '',
  },
  {
    label: 'Coucher de soleil',
    gradient: 'gallery-gradient-5',
    emoji: '🌅',
    size: '',
  },
  {
    label: 'Ambiance tropicale',
    gradient: 'gallery-gradient-6',
    emoji: '🌴',
    size: 'sm:col-span-2',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeInSection className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Galerie
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
            Découvrez notre{' '}
            <span className="gradient-text">coin de paradis</span>
          </h2>
          <p className="text-charcoal-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Laissez-vous séduire par les paysages époustouflants de notre île.
            Chaque photo raconte l'histoire d'un lieu unique au monde.
          </p>
        </FadeInSection>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {galleryItems.map((item, index) => (
            <FadeInSection key={index}>
              <div
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.gradient} ${
                  item.size
                }`}
                style={{ minHeight: index === 0 ? '400px' : '220px' }}
              >
                {/* Gradient overlay pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-20 h-20 border border-white/30 rounded-full" />
                  <div className="absolute bottom-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full" />
                </div>

                {/* Center emoji */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                    {item.emoji}
                  </span>
                </div>

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-5 sm:p-6 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                  <div className="flex items-center gap-2 text-white mb-1">
                    <Camera className="w-4 h-4 opacity-70" />
                    <span className="text-xs uppercase tracking-wider opacity-70">Photo</span>
                  </div>
                  <h3 className="text-white font-heading text-lg sm:text-xl font-semibold">
                    {item.label}
                  </h3>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-all duration-500" />
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA */}
        <FadeInSection className="mt-12 text-center">
          <p className="text-charcoal-400 text-sm">
            📸 Suivez-nous sur les réseaux sociaux pour plus de photos et vidéos !
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
