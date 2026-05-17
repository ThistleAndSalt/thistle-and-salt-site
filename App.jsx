
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Quote, ShieldCheck, ArrowRight, Images, Star, CheckCircle2, HelpCircle } from 'lucide-react'
import { Button } from './components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card.jsx'

const questionnaireHref = 'https://forms.gle/example' // TODO: real link
const bookingHref = 'https://calendly.com/thistleandsalt/booking' // TODO: real link

export default function App() {
  const heroImage = '/assets/Whitley.jpg' // hero image included in /public/assets

  return (
    <div className='min-h-screen bg-neutral-950 text-[#E8E3D5]'>

      <header className='sticky top-0 z-40 backdrop-blur bg-neutral-950/85 border-b border-[#D4AF37]/25'>
        <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Camera className='h-6 w-6 text-[#D4AF37]' />
            <span className='font-serif text-xl tracking-wide'>Thistle &amp; Salt Photography</span>
          </div>
          <nav className='hidden md:flex items-center gap-6 text-sm'>
            <a href='#experience' className='hover:text-[#D4AF37]'>Experience</a>
            <a href='#packages' className='hover:text-[#D4AF37]'>Packages</a>
            <a href='#pricing' className='hover:text-[#D4AF37]'>Pricing</a>
            <a href='#faq' className='hover:text-[#D4AF37]'>FAQ</a>
            <Button asChild variant='outline' size='md' className='rounded-2xl'><a href={bookingHref}>Book a Session</a></Button>
          </nav>
        </div>
      </header>

      <section className='relative'>
        <div className='relative h-[72vh] overflow-hidden'>
          <motion.img src={heroImage} alt='Boudoir hero' className='absolute inset-0 w-full h-full object-cover'
            initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}/>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
          <div className='absolute inset-0' style={{background:'radial-gradient(60% 60% at 50% 60%, rgba(212,175,55,0.10) 0%, rgba(0,0,0,0) 70%)'}} />
          <div className='absolute bottom-0 left-0 right-0 px-6 pb-10'>
            <div className='max-w-4xl'>
              <h1 className='font-serif text-4xl md:text-6xl leading-tight'>Luxury boudoir that celebrates you</h1>
              <p className='mt-4 text-[#CFC9B8] md:text-lg max-w-2xl'>Body empowerment. Confidence. Art you’re proud of. Step out of your comfort zone—this is your moment.</p>
              <div className='mt-6 flex flex-wrap gap-3'>
                <Button asChild size='lg' className='rounded-2xl'><a href={questionnaireHref}>Start the Questionnaire <ArrowRight className='ml-2 h-4 w-4'/></a></Button>
                <Button asChild variant='outline' size='lg' className='rounded-2xl'><a href={bookingHref}>Book Your Session</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-y border-[#D4AF37]/20 bg-black/40'>
        <div className='max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='flex items-center gap-3'><ShieldCheck className='h-6 w-6 text-[#D4AF37]'/><p className='text-[#CFC9B8]'>Private studio & client-first care</p></div>
          <div className='flex items-center gap-3'><Images className='h-6 w-6 text-[#D4AF37]'/><p className='text-[#CFC9B8]'>Guided posing & expert lighting</p></div>
          <div className='flex items-center gap-3'><Star className='h-6 w-6 text-[#D4AF37]'/><p className='text-[#CFC9B8]'>Boutique, luxury experience</p></div>
        </div>
      </section>

      <section id='experience' className='bg-black/40 border-y border-[#D4AF37]/20'>
        <div className='max-w-6xl mx-auto px-6 py-16'>
          <h2 className='font-serif text-3xl md:text-4xl'>The Experience</h2>
          <div className='mt-8 grid md:grid-cols-3 gap-6'>
            {[{title:'Plan',desc:'Style consult, wardrobe guidance, and session game plan.'},{title:'Shoot',desc:'Private studio, guided posing, premium lighting and direction.'},{title:'Reveal',desc:'Private proofing gallery, retouching, and artwork options.'}].map((s, i)=> (
              <Card key={i}><CardHeader><CardTitle className='text-xl flex items-center gap-2'><CheckCircle2 className='h-5 w-5 text-[#D4AF37]'/>{s.title}</CardTitle></CardHeader><CardContent>{s.desc}</CardContent></Card>
            ))}
          </div>
          <div className='mt-8'><Button asChild size='lg' className='rounded-2xl'><a href={bookingHref}>Secure Your Date</a></Button></div>
        </div>
      </section>

      <section id='packages' className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid md:grid-cols-3 gap-6'>
          {[{name:'Solo', blurb:'Empowering session crafted just for you.'},{name:'Mens', blurb:'Refined, confident portraits for men.'},{name:'Couples', blurb:'Intimate session that celebrates connection.'}].map((p,i)=> (
            <Card key={i}><CardHeader><CardTitle className='text-xl'>{p.name}</CardTitle></CardHeader><CardContent><p className='text-[#CFC9B8]'>{p.blurb}</p><div className='mt-6'><Button asChild variant='outline' className='rounded-2xl'><a href={bookingHref}>Book {p.name}</a></Button></div></CardContent></Card>
          ))}
        </div>
      </section>

      <section id='pricing' className='bg-black/40 border-y border-[#D4AF37]/20'>
        <div className='max-w-6xl mx-auto px-6 py-16'>
          <h2 className='font-serif text-3xl md:text-4xl'>Collections & Pricing</h2>
          <p className='text-[#CFC9B8] mt-2'>Choose a collection to match your vibe. Payment plans available.</p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {tiers.map((tier,i)=> (
              <Card key={i} className={`${tier.highlight ? 'ring-1 ring-[#D4AF37]/40' : ''}`}>
                <CardHeader>
                  <CardTitle className='text-xl flex items-baseline justify-between'>
                    <span>{tier.name}</span>
                    <span className='text-2xl text-[#D4AF37]'>{tier.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2'>
                    {tier.items.map((it,idx)=> (
                      <li key={idx} className='flex items-start gap-2'><CheckCircle2 className='mt-1 h-4 w-4 text-[#D4AF37]'/><span>{it}</span></li>
                    ))}
                  </ul>
                  <div className='mt-6'><Button asChild className='rounded-2xl'><a href={bookingHref}>{tier.cta}</a></Button></div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className='text-xs text-[#CFC9B8] mt-6'>Prices shown are placeholders—send your real rates and I’ll update.</p>
        </div>
      </section>

      <section id='reviews' className='bg-black/40 border-y border-[#D4AF37]/20'>
        <div className='max-w-6xl mx-auto px-6 py-16'>
          <h2 className='font-serif text-3xl md:text-4xl'>Client Reviews</h2>
          <p className='text-[#CFC9B8] mt-2'>Real words from real sessions</p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            {reviews.map((r, i) => (
              <Card key={i}><CardHeader><CardTitle className='flex items-center gap-2 text-base'><Quote className='h-4 w-4 text-[#D4AF37]' /> {r.name}</CardTitle></CardHeader><CardContent><p className='leading-relaxed'>{r.quote}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section id='faq' className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='font-serif text-3xl md:text-4xl'>FAQ</h2>
        <div className='mt-8 divide-y divide-[#D4AF37]/20'>
          {faqData.map((f, i)=> <FAQ key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      <section id='contact' className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div>
            <h2 className='font-serif text-3xl md:text-4xl'>Ready when you are</h2>
            <p className='text-[#CFC9B8] mt-4'>Whether it’s just for you or someone special, your session will be custom and private.</p>
            <ul className='mt-6 space-y-2 text-[#CFC9B8]'><li>Solo sessions for women & men</li><li>Couples sessions</li><li>Studio in North LA</li></ul>
            <div className='mt-6 flex gap-3'><Button asChild className='rounded-2xl'><a href={questionnaireHref}>Take the questionnaire</a></Button><Button asChild variant='outline' className='rounded-2xl'><a href={bookingHref}>Book a session</a></Button></div>
          </div>
          <Card>
            <CardHeader><CardTitle className='text-lg'>Send a message</CardTitle></CardHeader>
            <CardContent>
              <form name='contact' method='POST' data-netlify='true' netlify-honeypot='bot-field' className='space-y-3'>
                <input type='hidden' name='form-name' value='contact' />
                <p className='hidden'><label>Don’t fill this out: <input name='bot-field' /></label></p>
                <input className='w-full rounded-2xl bg-neutral-950 border border-[#D4AF37]/30 px-4 py-3' name='name' placeholder='Name' required />
                <input className='w-full rounded-2xl bg-neutral-950 border border-[#D4AF37]/30 px-4 py-3' type='email' name='email' placeholder='Email' required />
                <textarea className='w-full rounded-2xl bg-neutral-950 border border-[#D4AF37]/30 px-4 py-3' name='message' placeholder='Tell me about your session…' rows={4} />
                <Button type='submit' className='rounded-2xl'>Send</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className='border-t border-[#D4AF37]/25'>
        <div className='max-w-6xl mx-auto px-6 py-10 text-sm text-[#CFC9B8] flex flex-col md:flex-row items-center justify-between gap-4'>
          <div>&copy; {new Date().getFullYear()} Thistle &amp; Salt Photography • thistleandsalt.com</div>
          <div className='flex gap-6 items-center'>
            <a className='hover:text-[#D4AF37]' href={questionnaireHref}>Questionnaire</a>
            <a className='hover:text-[#D4AF37]' href={bookingHref}>Book</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className='py-4'>
      <button className='w-full text-left flex items-center justify-between' onClick={()=>setOpen(!open)}>
        <span className='font-medium'>{q}</span>
        <HelpCircle className='h-5 w-5 text-[#D4AF37]'/>
      </button>
      {open && (<p className='mt-3 text-[#CFC9B8]'>{a}</p>)}
    </div>
  )
}

const tiers = [
  { name:'Essentials', price:'$399', items:['Pre-session planning','Up to 60-minute session','1 look • 1 set','5 retouched images'], cta:'Book Essentials' },
  { name:'Signature', price:'$699', items:['Wardrobe consult','Up to 2-hour session','2–3 looks • multiple sets','12 retouched images'], highlight:true, cta:'Book Signature' },
  { name:'Luxe', price:'$1199', items:['Full creative direction','Up to 3-hour session','Unlimited looks • studio & window light','25 retouched images • album credit'], cta:'Book Luxe' },
]

const reviews = [
  { name: 'Krystyna', quote: 'I never thought I would do a boudoir session. Tim made it effortless and fun. I left feeling powerful and gorgeous.' },
  { name: 'Ryan', quote: 'From the first email to the final gallery the experience felt custom and luxurious. Highly recommend.' },
  { name: 'Savannah', quote: 'Our couples session was the best date we have had in years. The photos are stunning and the confidence boost was real.' },
]

const faqData = [
  { q: 'I am nervous and not a model—will you pose me?', a: 'Absolutely. Sessions are fully guided with posing and expression coaching tailored to you.' },
  { q: 'What should I bring?', a: 'We plan wardrobe together. Bring 2–4 outfits you love; I provide styling guidance and accessories.' },
  { q: 'Can couples book?', a: 'Yes. I photograph confident, intimate couples sessions that focus on your connection.' },
  { q: 'Do you retouch?', a: 'Professional, tasteful retouching is included on delivered images.' },
  { q: 'Where are you located?', a: 'Private studio in North LA; on-location available upon request.' },
]
