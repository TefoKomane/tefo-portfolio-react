import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#0a0a0f', color: 'white', padding: '3rem 1rem 1.5rem', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(139,92,246,0.6), transparent)',
      }} />

      <div className="max-w-6xl mx-auto" style={{ position: 'relative' }}>

        <div className="grid md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <img
                src="/TK-favicon.png"
                alt="Tefo Komane"
                style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover' }}
              />
              <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: 0 }}>Tefo Komane</h3>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.8rem', lineHeight: '1.6', margin: 0 }}>
              Full Stack Software Developer building technology that solves real problems.
            </p>
            {/* Status indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px' }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 6px #22c55e',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontSize: '0.72rem', color: '#4b5563' }}>Open to opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '14px' }}>
              Navigate
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a href={href} style={{
                    color: '#6b7280', fontSize: '0.82rem', textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#a5b4fc'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; }}
                  >
                    <span style={{ color: '#4338ca', fontSize: '0.6rem' }}>▶</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '14px' }}>
              Connect
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'GitHub', href: portfolioData.github, external: true },
                { label: 'LinkedIn', href: portfolioData.linkedin, external: true },
                { label: 'Email', href: `mailto:${portfolioData.email}`, external: false },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    style={{
                      color: '#6b7280', fontSize: '0.82rem', textDecoration: 'none',
                      display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#a5b4fc'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; }}
                  >
                    <span style={{ color: '#4338ca', fontSize: '0.6rem' }}>▶</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '14px' }}>
              Mission
            </h4>
            <p style={{ color: '#6b7280', fontSize: '0.8rem', lineHeight: '1.6', margin: 0 }}>
              Build software that solves meaningful problems while continuously developing into a dependable Full Stack Developer.
            </p>
            {/* Stack tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
              {['React', 'Node.js', 'MongoDB', 'Vite'].map(tag => (
                <span key={tag} style={{
                  fontSize: '0.65rem', padding: '2px 8px', borderRadius: '4px',
                  border: '1px solid rgba(99,102,241,0.25)',
                  color: '#818cf8', background: 'rgba(99,102,241,0.08)',
                  letterSpacing: '0.03em',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.25rem',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px',
        }}>
          <p style={{ color: '#374151', fontSize: '0.75rem', margin: 0 }}>
            © {currentYear} Tefo Karabo Komane. All rights reserved.
          </p>
          <p style={{ color: '#374151', fontSize: '0.75rem', margin: 0 }}>
            Built with <span style={{ color: '#6366f1' }}>React</span> · <span style={{ color: '#6366f1' }}>Tailwind CSS</span> · <span style={{ color: '#6366f1' }}>Vite</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </footer>
  );
}
