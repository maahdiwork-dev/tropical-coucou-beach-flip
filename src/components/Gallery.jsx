import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera } from 'lucide-react'
import aerialImage from '../assets/images/gallery/01-aerial.jpg'
import cabanesImage from '../assets/images/gallery/02-cabanes.jpg'
import coveImage from '../assets/images/gallery/03-cove.jpg'
import foodImage from '../assets/images/gallery/04-food.jpg'
import sunsetImage from '../assets/images/gallery/05-sunset.jpg'
import ambianceImage from '../assets/images/gallery/06-tropical-ambiance.jpg'

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
    image: aerialImage,
    size: 'sm:col-span-2 sm:row-span-2',
  },
  {
    label: 'Nos cabanes',
    image: cabanesImage,
    size: '',
  },
  {
    label: 'La crique',
    image: coveImage,
    size: '',
  },
  {
    label: 'Cuisine méditerranéenne',
    image: foodImage,
    size: '',
  },
  {
    label: 'Coucher de soleil',
    image: sunsetImage,
    size: '',
  },
  {
    label: 'Ambiance tropicale',
    image: ambianceImage,
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
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  item.size
                }`}
                style={{ minHeight: index === 0 ? '400px' : '220px' }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

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
