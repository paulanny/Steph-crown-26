import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { galleryContent } from '../content/birthdayContent'
import { SectionWrapper } from './SectionWrapper'

function GalleryImage({ item, onOpen }) {
  const [loaded, setLoaded] = useState(false)
  const [broken, setBroken] = useState(false)

  return (
    <motion.button
      type="button"
      layout
      onClick={() => onOpen(item)}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-navy/60 text-left shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft/70 light:border-navy/12 light:bg-white/75 light:shadow-[0_20px_45px_-12px_rgba(18,26,46,0.1)]"
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {!broken ? (
          <motion.img
            src={item.src}
            alt={item.caption}
            loading="lazy"
            className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => setBroken(true)}
            initial={{ scale: 1.08, opacity: 0 }}
            whileInView={{ scale: 1, opacity: loaded ? 1 : 0 }}
            viewport={{ once: true }}
          />
        ) : null}
        {broken || !loaded ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy via-midnight to-navy px-4 text-center light:from-[#e8e2da] light:via-[#ded8cf] light:to-[#d4cec4]">
            <p className="text-xs font-medium uppercase tracking-widest text-gold/80 light:text-[#4a3a0f]">Image slot</p>
            <p className="mt-2 text-sm text-cream/55 light:text-inkSoft">
              {/* REPLACE: add file matching src in src/content/birthdayContent.js → galleryContent.items */}
              Place your photo at{' '}
              <code className="rounded bg-white/5 px-1.5 py-0.5 text-gold-soft/90 light:bg-ink/8 light:text-[#4a3a0f]">
                public{item.src}
              </code>
            </p>
          </div>
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 light:from-navy/25" />
      </div>
      <p className="px-4 py-3 text-sm text-cream/75 light:text-inkMuted">{item.caption}</p>
    </motion.button>
  )
}

export function MemoryGallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <SectionWrapper id="gallery" eyebrow={galleryContent.sectionEyebrow}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-medium text-cream light:text-ink md:text-5xl">
          {galleryContent.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-cream/70 light:text-inkMuted md:text-lg">{galleryContent.intro}</p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {galleryContent.items.map((item) => (
          <GalleryImage key={item.id} item={item} onOpen={setLightbox} />
        ))}
      </div>

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-midnight/85 p-4 backdrop-blur-md light:bg-navy/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged photo"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-navy shadow-card light:border-navy/12 light:bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="max-h-[80vh] w-full object-contain"
              />
              <p className="border-t border-white/10 bg-midnight/80 px-4 py-3 text-center text-sm text-cream/80 light:border-navy/15 light:bg-[#f0ebe3] light:text-inkMuted">
                {lightbox.caption}
              </p>
              <button
                type="button"
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-midnight/80 text-cream backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-gold light:border-navy/20 light:bg-white light:text-ink light:shadow-md"
                onClick={() => setLightbox(null)}
                aria-label="Close enlarged image"
              >
                <IoClose className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionWrapper>
  )
}
