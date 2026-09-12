import { useEffect, useMemo, useState } from 'react'

const navItems = ['Home', 'About', 'Themes', 'Timeline', 'Sponsors', 'Mentors', 'FAQ', 'Contact']
const assetPath = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`

const themes = [
  {
    title: 'Cybersecurity',
    description: 'Secure systems, detect threats, and build resilient digital defenses for modern infrastructure.',
    icon: '🛡️',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Explore anomaly detection, predictive security models, and intelligent defense systems.',
    icon: '🤖',
  },
  {
    title: 'Digital Forensics',
    description: 'Investigate evidence, reconstruct attacks, and analyze artifacts in digital incident response.',
    icon: '🧬',
  },
  {
    title: 'Network Security',
    description: 'Design secure networks, monitor traffic, and protect organizational communication channels.',
    icon: '📡',
  },
  {
    title: 'Web Security',
    description: 'Uncover vulnerabilities, harden applications, and defend against exploitation in web ecosystems.',
    icon: '🌐',
  },
  {
    title: 'Cloud Security',
    description: 'Harden cloud-native systems, secure data flows, and manage identity in distributed environments.',
    icon: '☁️',
  },
  {
    title: 'IoT Security',
    description: 'Protect connected devices, build secure edge ecosystems, and strengthen smart environments.',
    icon: '🔌',
  },
  {
    title: 'Blockchain',
    description: 'Assess trust models, secure smart contracts, and examine decentralized security challenges.',
    icon: '⛓️',
  },
  {
    title: 'Threat Intelligence',
    description: 'Analyze attacker behavior, map indicators, and turn intelligence into proactive defense.',
    icon: '🧠',
  },
]

const stats = [
  { value: 500, suffix: '+', label: 'Participants' },
  { value: 100, suffix: '+', label: 'Teams' },
  { value: 20, suffix: '+', label: 'Institutions' },
  { value: 24, suffix: '', label: 'Hours' },
  { value: 10, suffix: '+', label: 'Problem Statements' },
]

const timeline = [
  'Registration Opens',
  'Team Formation',
  'Problem Statement Release',
  'Hackathon Begins',
  'Mentoring',
  'Submission',
  'Judging',
  'Results',
]

const benefits = [
  'Build Real Solutions',
  'Learn Cybersecurity',
  'Meet Experts',
  'Compete With Top Teams',
  'Get Recognition',
  'Win Exciting Prizes',
]

const prizes = [
  { rank: '1st Prize', amount: '₹XX,XXX', highlight: true },
  { rank: '2nd Prize', amount: '₹XX,XXX', highlight: false },
  { rank: '3rd Prize', amount: 'Coming Soon', highlight: false },
]

const sponsorGroups = [
  { type: 'TITLE SPONSOR', items: ['Title Sponsor'] },
  { type: 'GOLD SPONSORS', items: ['Gold Sponsor', 'Gold Sponsor'] },
  { type: 'SILVER SPONSORS', items: ['Silver Sponsor', 'Silver Sponsor', 'Silver Sponsor'] },
  { type: 'PARTNERS', items: ['Partner', 'Partner', 'Partner'] },
]

const mentors = [
  {
    name: 'Mentor Name',
    designation: 'Cybersecurity Expert',
    organization: 'NIET Cyber Invaders',
    socials: { x: '#', in: '#', gh: '#' },
  },
  {
    name: 'Mentor Name',
    designation: 'Threat Intelligence Lead',
    organization: 'Cyber Security Community',
    socials: { x: '#', in: '#', gh: '#' },
  },
  {
    name: 'Mentor Name',
    designation: 'Digital Forensics Mentor',
    organization: 'Research & Innovation',
    socials: { x: '#', in: '#', gh: '#' },
  },
]

const faqs = [
  { question: 'Who can participate?', answer: 'The hackathon is open to students and aspiring cybersecurity enthusiasts who are eager to build, learn, and compete in a collaborative environment.' },
  { question: 'Is there a registration fee?', answer: 'Registration details will be announced soon. Until then, this page uses placeholder information and the event remains open to all eligible participants.' },
  { question: 'How many members can be in a team?', answer: 'Teams typically consist of 2 to 5 members, with final participant details announced closer to the event date.' },
  { question: 'Can students from different colleges form a team?', answer: 'Yes, cross-college teams are welcome as long as all members meet the participation requirements and team registration is completed properly.' },
  { question: 'What technologies can we use?', answer: 'Participants may use a wide range of tools, frameworks, and technologies, provided they align with the hackathon themes and comply with ethical use guidelines.' },
  { question: 'Is prior cybersecurity experience required?', answer: 'No prior experience is required. The event is designed to welcome learners, builders, and enthusiasts from different experience levels.' },
  { question: 'What should we bring?', answer: 'Bring a laptop, your development tools, any required hardware, and a strong curiosity to build secure real-world solutions.' },
  { question: 'How will judging work?', answer: 'Judging will focus on innovation, technical execution, security thinking, feasibility, and alignment with the problem statements and event themes.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const [visibleStats, setVisibleStats] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.site-header')
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const statSection = document.querySelector('.stats-section')
    if (!statSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisibleStats(true)
      },
      { threshold: 0.35 },
    )

    observer.observe(statSection)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [menuOpen])

  const statsMarkup = useMemo(
    () =>
      stats.map((stat) => ({
        ...stat,
        displayValue: stat.value.toLocaleString(),
      })),
    [],
  )

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand-cluster" aria-label="NIET and Cyber Invaders branding">
            <img src={assetPath('NIET_Logo.webp')} alt="NIET Greater Noida" className="brand-logo brand-logo--niet" />
            <img src={assetPath('Cyber_Invaders_log.webp')} alt="Cyber Invaders" className="brand-logo brand-logo--invaders" />
          </div>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => {
              const link = item === 'Home' ? '#home' : `#${item.toLowerCase()}`
              return (
                <a key={item} href={link} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              )
            })}
            <a href="#register" className="nav-cta">REGISTER NOW</a>
          </nav>

          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-overlay" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">NIET Greater Noida</p>
              <p className="eyebrow accent">Cyber Invaders</p>
              <h1>
                <span className="block">CYBERSECURITY</span>
                <span className="block accent-text">HACKATHON</span>
              </h1>
              <h2>NIET CYBER ARSENAL</h2>
              <p className="tagline">Think. Hack. Defend. Evolve.</p>
              <div className="hero-meta">
                <span>DATE: COMING SOON</span>
                <span>VENUE: NIET GREATER NOIDA</span>
              </div>
              <div className="cta-row">
                <a href="#register" className="primary-btn">REGISTER NOW</a>
                <a href="#about" className="secondary-btn">EXPLORE EVENT</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-shell">
          <div className="container about-grid">
            <div className="section-copy reveal">
              <p className="section-kicker">ABOUT THE EVENT</p>
              <h3>Where curious minds turn ideas into cyber defense solutions.</h3>
              <p>
                The NIET Cybersecurity Hackathon is a high-energy, student-first challenge designed to explore the
                future of digital defense. From secure application design to threat intelligence and forensics, the event
                invites participants to build solutions that matter in a rapidly evolving technology landscape.
              </p>
              <p>
                Participants will work on real-world cybersecurity problems, collaborate with peers, and learn from a
                community of mentors, builders, and digital defenders. Whether you are exploring ethical hacking,
                malware analysis, network security, or AI-driven defense systems, this event is built to help you grow.
              </p>
            </div>
            <div className="about-card reveal">
              <div className="mini-panel">
                <span className="pulse-dot" />
                <span>Threat analysis in action</span>
              </div>
              <div className="signal-box">
                <div>
                  <strong>24H</strong>
                  <span>Build cycle</span>
                </div>
                <div>
                  <strong>AI</strong>
                  <span>Security focus</span>
                </div>
              </div>
              <div className="module-list">
                <div><span className="list-index">01</span> Secure application development</div>
                <div><span className="list-index">02</span> Threat modeling and mitigation</div>
                <div><span className="list-index">03</span> Real-time problem solving</div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section section-shell">
          <div className="container stats-grid">
            {statsMarkup.map((stat, index) => (
              <div key={stat.label} className="stat-card reveal-delay" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="stat-value">
                  {visibleStats ? <span>{stat.displayValue}</span> : '0'}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="themes" className="themes-section section-shell">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">THEMES</p>
              <h3>Explore security challenges shaping tomorrow.</h3>
            </div>
            <div className="theme-grid">
              {themes.map((theme) => (
                <article key={theme.title} className="theme-card reveal">
                  <div className="theme-icon">{theme.icon}</div>
                  <h4>{theme.title}</h4>
                  <p>{theme.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="timeline-section section-shell">
          <div className="container">
            <div className="section-heading center">
              <p className="section-kicker">TIMELINE</p>
              <h3>From registration to recognition.</h3>
            </div>
            <div className="timeline">
              {timeline.map((item, idx) => (
                <div key={item} className="timeline-item">
                  <div className="timeline-node" aria-hidden="true" />
                  <div className="timeline-card">
                    <span>{`0${idx + 1}`}</span>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section section-shell">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">WHY PARTICIPATE</p>
              <h3>Build skills, confidence, and recognition.</h3>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <div key={benefit} className="benefit-card reveal">
                  <span className="benefit-index" aria-hidden="true">◆</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="prizes-section section-shell">
          <div className="container">
            <div className="section-heading center">
              <p className="section-kicker">PRIZES</p>
              <h3>Recognition for innovative cyber talent.</h3>
            </div>
            <div className="prizes-grid">
              {prizes.map((prize) => (
                <div key={prize.rank} className={`prize-card ${prize.highlight ? 'featured' : ''}`}>
                  <span className="prize-rank">{prize.rank}</span>
                  <strong>{prize.amount}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sponsors" className="sponsors-section section-shell">
          <div className="container">
            <div className="section-heading center">
              <p className="section-kicker">SPONSORS</p>
              <h3>Support from the cybersecurity ecosystem.</h3>
            </div>
            <div className="sponsors-list">
              {sponsorGroups.map((group) => (
                <div key={group.type} className="sponsor-group">
                  <h4>{group.type}</h4>
                  <div className="sponsor-row">
                    {group.items.map((item) => (
                      <div key={`${group.type}-${item}`} className="sponsor-box">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mentors" className="mentors-section section-shell">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">MENTORS & JUDGES</p>
              <h3>Learn from experienced security leaders.</h3>
            </div>
            <div className="mentor-grid">
              {mentors.map((mentor) => (
                <article key={mentor.name} className="mentor-card reveal">
                  <div className="mentor-avatar" aria-label={mentor.name}>{mentor.name.split(' ')[0][0]}</div>
                  <h4>{mentor.name}</h4>
                  <p className="mentor-designation">{mentor.designation}</p>
                  <p className="mentor-org">{mentor.organization}</p>
                  <div className="mentor-socials">
                    <a href={mentor.socials.x} aria-label="X profile">X</a>
                    <a href={mentor.socials.in} aria-label="LinkedIn profile">in</a>
                    <a href={mentor.socials.gh} aria-label="GitHub profile">GH</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-section section-shell">
          <div className="container">
            <div className="section-heading center">
              <p className="section-kicker">GALLERY</p>
              <h3>Cyber challenge energy in motion.</h3>
            </div>
            <div className="gallery-grid">
              <img src={assetPath('cybersecurity_background.webp')} alt="Cybersecurity hacker environment" loading="lazy" />
              <div className="gallery-panel">
                <span>LIVE HACK</span>
                <strong>Secure ideas.</strong>
                <strong>Build defense.</strong>
              </div>
              <div className="gallery-panel dark-panel">
                <span>NETWORK</span>
                <strong>Threat intelligence</strong>
                <strong>collaboration</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section section-shell">
          <div className="container faq-layout">
            <div className="faq-heading">
              <p className="section-kicker">FAQ</p>
              <h3>Everything you should know before you register.</h3>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={faq.question} className={`faq-item ${activeFaq === index ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={activeFaq === index}
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </button>
                  <div className="faq-answer" aria-hidden={activeFaq !== index}>{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="register" className="cta-section section-shell">
          <div className="container cta-wrap">
            <div>
              <p className="section-kicker">READY TO ENTER THE CYBER ARENA?</p>
              <h3>Think like an attacker. Build like a defender.</h3>
            </div>
            <a href="#home" className="primary-btn">REGISTER NOW</a>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand-mark">
              <img src={assetPath('NIET_Logo.webp')} alt="NIET Greater Noida" className="brand-logo brand-logo--small" />
              <img src={assetPath('Cyber_Invaders_log.webp')} alt="Cyber Invaders" className="brand-logo brand-logo--small" />
            </div>
            <p className="footer-title">NIET Greater Noida × Cyber Invaders</p>
            <p>Cybersecurity Hackathon</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {navItems.map((item) => (
                <li key={item}><a href={`#${item === 'Home' ? 'home' : item.toLowerCase()}`}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>Email: hello@cyberinvaders.example</li>
              <li>Location: NIET Greater Noida</li>
              <li>Social: @CyberInvaders</li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 NIET Greater Noida × Cyber Invaders</p>
          <p>All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
