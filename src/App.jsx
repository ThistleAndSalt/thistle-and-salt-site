
import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Lock, Quote, ShieldCheck, ArrowRight, Images, Star } from 'lucide-react'
import { Button } from './components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card.jsx'

const questionnaireHref = 'https://forms.gle/example' // placeholder
const bookingHref = 'https://calendly.com/thistleandsalt/booking' // placeholder

// Default filenames (replace with your actual files in /public/assets or use manifest.json)
const defaultImages = [
  '/assets/hero1.jpg',
  '/assets/hero2.jpg',
  '/assets/portfolio1.jpg',
  '/assets/portfolio2.jpg',
  '/assets/portfolio3.jpg',
]

function useSlideshow(length, delay = 5000) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % length), delay)
    return () => clearInterval(id)
  }, [length, delay])
  return [index, setIndex]
}

export default function App() {
  const [heroImages, setHeroImages] = useState(defaultImages)
  const [galleryImages, setGalleryImages] = useState(defaultImages)
  const [heroIndex] = useSlideshow(heroImages.length, 6000)
  const [pw, setPw] = useState('')
  const [galleriesByPassword, setGalleriesByPassword] = useState({
    rachel2025: { title: 'Rachel — Proof Gallery', images: defaultImages },
    kristen2025: { title: 'Kristen — Proof Gallery', images: [...defaultImages].reverse() },
    sample123: { title: 'Sample Client — Proofs', images: defaultImages },
  })

  // Load /assets/manifest.json if present, so you can manage images without touching code
  useEffect(() => {
    fetch('/assets/manifest.json', { cache: 'no-store' })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data) return
        if (Array.isArray(data.hero) && data.hero.length) setHeroImages(data.hero)
        if (Array.isArray(data.gallery) && data.gallery.length) setGalleryImages(data.gallery)
        if (data.galleriesByPassword) setGalleriesByPassword(data.galleriesByPassword)
      })
      .catch(() => {})
  }, [])

  const match = useMemo(() => galleriesByPassword[pw], [pw, galleriesByPassword])

  return (
    <div className='min-h-screen bg-neutral-950 text-[#E8E3D5]'>
      <header className='sticky top-0 z-40 backdrop-blur bg-neutral-950/85 border-b border-[#D4AF37]/25'>
        <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Camera className='h-6 w-6 text-[#D4AF37]' />
            <span className='font-serif text-xl tracking-wide'>Thistle &amp; Salt Photography</span>
          </div>
          <nav className='hidden md:flex items-center gap-6 text-sm'>
            <a href='#work' className='hover:text-[#D4AF37]'>Portfolio</a>
            <a href='#reviews' className='hover:text-[#D4AF37]'>Reviews</a>
            <a href='#about' className='hover:text-[#D4AF37]'>About</a>
            <a href='#contact' className='hover:text-[#D4AF37]'>Contact</a>
            <a href='#clients' className='hover:text-[#D4AF37] inline-flex items-center gap-1'><Lock className='h-4 w-4 text-[#D4AF37]' /> Client Login</a>
            <a className='hover:text-[#D4AF37] underline underline-offset-4' href={bookingHref}>Book a Session</a>
          </nav>
        </div>
      </header>

      <section className='relative'>
        <div className='relative h-[72vh] overflow-hidden'>
          <AnimatePresence initial={false} mode='wait'>
            <motion.img
              key={heroIndex}
              src={heroImages[heroIndex]}
              alt='Boudoir showcase'
              className='absolute inset-0 w-full h-full object-cover'
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
          <div className='absolute inset-0' style={{background:'radial-gradient(60% 60% at 50% 60%, rgba(212,175,55,0.10) 0%, rgba(0,0,0,0) 70%)'}} />

          <div className='absolute bottom-0 left-0 right-0 px-6 pb-10'>
            <div className='max-w-4xl'>
              <h1 className='font-serif text-4xl md:text-6xl leading-tight'>Luxury boudoir that celebrates you</h1>
              <p className='mt-4 text-[#CFC9B8] md:text-lg max-w-2xl'>
                Boudoir is about body empowerment and building confidence. Most people never feel confident enough to try it. It is time to step out of your comfort zone and unleash the confidence.
              </p>
              <div className='mt-6 flex flex-wrap gap-3'>
                <a href={questionnaireHref} className='inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] text-neutral-900 px-6 py-3'>
                  Take the questionnaire <ArrowRight className='h-4 w-4' />
                </a>
                <a href={bookingHref} className='inline-flex items-center gap-2 rounded-2xl border border-[#D4AF37]/60 text-[#D4AF37] px-6 py-3 hover:bg-[#D4AF37]/10'>
                  Book your session
                </a>
              </div>
              <div className='mt-4 text-sm text-[#CFC9B8]'>I photograph male and female solo sessions and couples sessions.</div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-y border-[#D4AF37]/20 bg-black/40'>
        <div className='max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='flex items-center gap-3'>
            <ShieldCheck className='h-6 w-6 text-[#D4AF37]' />
            <p className='text-[#CFC9B8]'>Private studio and client care are top priorities</p>
          </div>
          <div className='flex items-center gap-3'>
            <Images className='h-6 w-6 text-[#D4AF37]' />
            <p className='text-[#CFC9B8]'>Guided posing with flattering lighting and styling</p>
          </div>
          <div className='flex items-center gap-3'>
            <Star className='h-6 w-6 text-[#D4AF37]' />
            <p className='text-[#CFC9B8]'>Luxury experience from planning to delivery</p>
          </div>
        </div>
      </section>

      <section id='work' className='max-w-6xl mx-auto px-6 py-16'>
        <div className='flex items-end justify-between gap-6'>
          <div>
            <h2 className='font-serif text-3xl md:text-4xl'>Selected Work</h2>
            <p className='text-[#CFC9B8] mt-2'>A curated look at recent sessions</p>
          </div>
          <a href={bookingHref} className='hidden md:inline-flex text-sm text-[#D4AF37] underline underline-offset-4 hover:opacity-80'>Book now</a>
        </div>
        <div className='mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4'>
          {galleryImages.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className='relative group'>
              <img src={src} alt={`Gallery ${i + 1}`} className='h-48 md:h-56 w-full object-cover rounded-2xl shadow' />
              <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#D4AF37]/15 group-hover:ring-[#D4AF37]/30 transition' />
            </motion.div>
          ))}
        </div>
      </section>

      <section id='reviews' className='bg-black/40 border-y border-[#D4AF37]/20'>
        <div className='max-w-6xl mx-auto px-6 py-16'>
          <h2 className='font-serif text-3xl md:text-4xl'>Client Reviews</h2>
          <p className='text-[#CFC9B8] mt-2'>Real words from real sessions</p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              { name: 'Avery R.', quote: 'I never thought I would do a boudoir session. Tim made it effortless and fun. I left feeling powerful and gorgeous.' },
              { name: 'Jordan M.', quote: 'From the first email to the final gallery the experience felt custom and luxurious. Highly recommend.' },
              { name: 'Casey & Taylor', quote: 'Our couples session was the best date we have had in years. The photos are stunning and the confidence boost was real.' },
            ].map((r, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2 text-base'>
                    <Quote className='h-4 w-4 text-[#D4AF37]' /> {r.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='leading-relaxed'>{r.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id='about' className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div>
            <h2 className='font-serif text-3xl md:text-4xl'>A luxury experience centered on you</h2>
            <p className='text-[#CFC9B8] mt-4 leading-relaxed'>
              Your session is fully guided. We plan outfits and vibe together. You will have a private studio with professional lighting. You will be coached through flattering poses that fit your body and mood. The goal is simple. You feel confident and leave with artwork that you love.
            </p>
            <div className='mt-6 flex gap-3'>
              <a href={questionnaireHref} className='inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] text-neutral-900 px-6 py-3'>Start the questionnaire</a>
              <a href={bookingHref} className='inline-flex items-center gap-2 rounded-2xl border border-[#D4AF37]/60 text-[#D4AF37] px-6 py-3 hover:bg-[#D4AF37]/10'>Secure your date</a>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            {defaultImages.slice(0, 4).map((src, i) => (
              <img key={i} src={src} alt='Studio detail' className='rounded-2xl h-44 w-full object-cover' />
            ))}
          </div>
        </div>
      </section>

      <section id='clients' className='bg-black/40 border-y border-[#D4AF37]/20'>
        <div className='max-w-2xl mx-auto px-6 py-16'>
          <h2 className='font-serif text-3xl md:text-4xl flex items-center gap-2'><Lock className='h-6 w-6 text-[#D4AF37]'/>{' '}Client Galleries</h2>
          <p className='text-[#CFC9B8] mt-2'>Enter your private password to view your proof gallery</p>
          <GalleryPassword galleriesByPassword={galleriesByPassword} />
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}

function GalleryPassword({ galleriesByPassword }) {
  const [pw, setPw] = useState('')
  const match = useMemo(() => galleriesByPassword[pw], [pw, galleriesByPassword])
  return (
    <div>
      <div className='mt-6 flex gap-3'>
        <input
          type='password'
          placeholder='Enter gallery password (try: rachel2025, kristen2025, sample123)'
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className='flex-1 bg-neutral-950 border border-[#D4AF37]/30 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]/40 text-[#E8E3D5] placeholder:text-[#CFC9B8]'
        />
        <a className='rounded-2xl border border-[#D4AF37]/60 text-[#D4AF37] px-6 py-3 hover:bg-[#D4AF37]/10'>Open</a>
      </div>
      {match ? (
        <div className='mt-10'>
          <h3 className='font-serif text-2xl text-[#E8E3D5]'>{match.title}</h3>
          <div className='mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'>
            {match.images.map((src, i) => (
              <img key={i} src={src} alt={`Client ${i + 1}`} className='h-44 w-full object-cover rounded-2xl' />
            ))}
          </div>
        </div>
      ) : (
        <p className='mt-6 text-[#CFC9B8] text-sm'>Tip. Manage galleries in <code>/public/assets/manifest.json</code> — no code changes needed.</p>
      )}
    </div>
  )
}

function Contact() {
  return (
    <section id='contact' className='max-w-6xl mx-auto px-6 py-16'>
      <div className='grid md:grid-cols-2 gap-10 items-center'>
        <div>
          <h2 className='font-serif text-3xl md:text-4xl'>Ready when you are</h2>
          <p className='text-[#CFC9B8] mt-4'>Whether it is just for you or for someone special, your session will be custom and private</p>
          <ul className='mt-6 space-y-2 text-[#CFC9B8]'>
            <li>Solo sessions for men and women</li>
            <li>Couples sessions</li>
            <li>Studio in Monroe LA</li>
          </ul>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className='text-lg'>What happens next</CardTitle>
          </CardHeader>
          <CardContent className='space-y-3'>
            <p>1. Fill out the questionnaire so we plan your session</p>
            <p>2. Lock your date with a retainer and a signed agreement</p>
            <p>3. Shoot day with guided posing and expert lighting</p>
            <p>4. Private proof gallery arrives with your password</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className='border-t border-[#D4AF37]/25'>
      <div className='max-w-6xl mx-auto px-6 py-10 text-sm text-[#CFC9B8] flex flex-col md:flex-row items-center justify-between gap-4'>
        <div>&copy; {new Date().getFullYear()} Thistle &amp; Salt Photography • thistleandsalt.com</div>
        <div className='flex gap-6 items-center'>
          <a className='hover:text-[#D4AF37]' href='https://forms.gle/example'>Questionnaire</a>
          <a className='hover:text-[#D4AF37]' href='https://calendly.com/thistleandsalt/booking'>Book</a>
          <a className='hover:text-[#D4AF37]' href='#clients'>Client Login</a>
        </div>
      </div>
    </footer>
  )
}
