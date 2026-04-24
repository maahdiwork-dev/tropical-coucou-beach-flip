import { motion } from 'framer-motion'
import { Anchor, ChevronDown } from 'lucide-react'
import heroImage from '../assets/images/hero/hero-main.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center wave-divider overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient" />
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
        {/* Subtle wave pattern */}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M0,80 C360,160 720,0 1080,80 C1260,120 1380,100 1440,80 L1440,200 L0,200 Z">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,80 C360,160 720,0 1080,80 C1260,120 1380,100 1440,80 L1440,200 L0,200 Z;
                      M0,100 C360,40 720,140 1080,60 C1260,80 1380,120 1440,100 L1440,200 L0,200 Z;
                      M0,80 C360,160 720,0 1080,80 C1260,120 1380,100 1440,80 L1440,200 L0,200 Z" />
          </path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M0,120 C240,60 480,140 720,100 C960,60 1200,140 1440,120 L1440,200 L0,200 Z">
            <animate attributeName="d" dur="6s" repeatCount="indefinite"
              values="M0,120 C240,60 480,140 720,100 C960,60 1200,140 1440,120 L1440,200 L0,200 Z;
                      M0,100 C240,140 480,60 720,120 C960,140 1200,60 1440,100 L1440,200 L0,200 Z;
                      M0,120 C240,60 480,140 720,100 C960,60 1200,140 1440,120 L1440,200 L0,200 Z" />
          </path>
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 sm:mb-8">
            <Anchor className="w-4 h-4 text-gold-300" />
            <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide uppercase">
              Accessible uniquement par bateau
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Tropical
            <span className="block text-gold-300">Coucou Beach</span>
          </h1>

          {/* Tagline */}
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
            Un coin de paradis niché dans une crique, accessible uniquement par bateau.
            <span className="hidden sm:inline">
              {' '}Vivez une expérience exclusive au cœur de la Méditerranée.
            </span>
          </p>

          {/* Location */}
          <p className="text-primary-200/70 text-sm mb-8 sm:mb-10 flex items-center justify-center gap-2">
            <span>📍</span>
            Ghar El Melh, Bizerte — Île de Coco Beach
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/21697425125?text=Bonjour%2C%20je%20voudrais%20r%C3%A9server."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-white px-8 py-3.5 sm:py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-xl shadow-gold-500/30 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Réserver via WhatsApp
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-white/30 hover:border-white/60 text-white px-8 py-3.5 sm:py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
            >
              Découvrir nos formules
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
