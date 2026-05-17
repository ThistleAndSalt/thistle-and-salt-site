const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#sessions', label: 'Sessions' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

const trustItems = [
  {
    title: 'Guided posing',
    text: 'You will be directed through posing, expression, and movement the entire session.',
  },
  {
    title: 'Comfort focused',
    text: 'An assistant is always present during boudoir sessions for comfort and safety.',
  },
  {
    title: 'Private delivery',
    text: 'Your edited images are delivered through a private online gallery.',
  },
]

const portfolioStyles = [
  'Boudoir',
  'Couples',
  'Maternity',
  'Shower Sessions',
  'Editorial',
  'Fine Art',
  'Black & White',
  'Portraits',
]

const sessions = [
  {
    title: 'Studio Boudoir',
    text: 'A guided studio session built around confidence, privacy, and strong visual storytelling.',
  },
  {
    title: 'Couples Boudoir',
    text: 'An intimate session focused on connection, emotion, and natural chemistry.',
  },
  {
    title: 'Maternity Boudoir',
    text: 'Soft, powerful portraits that celebrate this season with elegance and intention.',
  },
  {
    title: 'Shower Minis',
    text: 'A bold, creative mini session with a wet look and dramatic lighting.',
  },
  {
    title: 'Editorial Portraits',
    text: 'Creative portraits with a polished, magazine inspired feel.',
  },
]

const testimonials = [
  'I was nervous at first, but I felt comfortable almost immediately. The whole session felt relaxed and empowering.',
  'The posing guidance made such a difference. I never had to wonder what to do, and the final images were beautiful.',
  'This was way more than a photoshoot. It helped me see myself with confidence again.',
]

function Button({ children, href, variant = 'primary', ...props }) {
  return (
    <a className={`btn ${variant === 'ghost' ? 'ghost' : ''}`} href={href} {...props}>
      {children}
    </a>
  )
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default function App() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="Thistle & Salt Photography">
            <span>Thistle &amp; Salt</span>
            <span>Photography</span>
          </a>

          <nav className="navlinks" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <Button href="#contact">Book Now</Button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Luxury boudoir photography</p>
              <h1>
                Real
                <br />
                <em>Beauty</em>
                <br />
                Boldly Seen
              </h1>
              <p>
                A private, guided boudoir experience designed to help you feel confident,
                comfortable, and powerful in your own skin.
              </p>

              <div className="hero-actions">
                <Button href="#contact">Start Planning</Button>
                <Button href="#portfolio" variant="ghost">
                  View Styles
                </Button>
              </div>
            </div>

            <div className="hero-card" aria-label="Boudoir portrait hero image">
              <img src="/assets/Whitley.jpg" alt="" className="hero-image" />
              <div className="card-label">
                <strong>Confidence first</strong>
                <p>Soft direction, intentional lighting, and a session built around your comfort.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap section-grid">
            <SectionTitle eyebrow="About the experience" title="More than photos" />

            <div className="content-card">
              <p className="large-quote">
                Boudoir is not about changing who you are. It is about seeing yourself differently.
              </p>
              <p>
                At Thistle &amp; Salt Photography, every session is created with privacy,
                professionalism, and respect. You do not need to know how to pose. You do not need
                modeling experience. You only need to show up, and you will be guided through the rest.
              </p>
              <p>
                Sessions are designed to feel calm, intentional, and empowering from start to finish.
                Whether you are booking for yourself, your partner, a milestone, or simply because you
                deserve it, the goal is to create images that remind you of the confidence that has
                always been there.
              </p>

              <div className="trust-grid">
                {trustItems.map((item) => (
                  <div className="trust-item" key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="wrap section-grid">
            <SectionTitle eyebrow="Take a look" title="Portfolio styles" />

            <div className="portfolio-grid">
              {portfolioStyles.map((style) => (
                <a className="tile" href="#contact" key={style}>
                  <span>{style}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="sessions">
          <div className="wrap section-grid">
            <SectionTitle eyebrow="What I offer" title="Sessions" />

            <div className="content-card">
              <div className="service-list">
                {sessions.map((session) => (
                  <div className="service" key={session.title}>
                    <h3>{session.title}</h3>
                    <p>{session.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="wrap">
            <div className="section-title reviews-title">
              <p>Client words</p>
              <h2>Testimonials</h2>
            </div>

            <div className="testimonials">
              {testimonials.map((quote) => (
                <blockquote key={quote}>
                  <p>{quote}</p>
                  <cite>Client Review</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <div className="contact-panel">
              <div>
                <p className="eyebrow">Like what you see?</p>
                <h2>Let's create something unforgettable.</h2>
                <p>
                  Tell me what kind of session you are interested in, and we can start planning a
                  boudoir experience that feels personal, comfortable, and completely you.
                </p>

                <div className="contact-links">
                  <Button href="mailto:timspillers@yahoo.com?subject=Thistle%20%26%20Salt%20Boudoir%20Session%20Inquiry">
                    Email to Book
                  </Button>

                  <Button
                    href="https://www.instagram.com/"
                    variant="ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>(c) 2026 Thistle &amp; Salt Photography. All rights reserved.</span>
          <span>Luxury boudoir photography focused on confidence and real beauty.</span>
        </div>
      </footer>
    </>
  )
}
