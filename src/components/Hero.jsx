import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '20px', paddingRight: '20px', background: 'linear-gradient(to bottom right, #2563eb, #7c3aed)', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
        
        <div>
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '24px' }}>
            {portfolioData.name}
          </h1>
          
          <p style={{ fontSize: '24px', marginBottom: '16px', opacity: 0.9 }}>
            {portfolioData.title}
          </p>
          
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.8, lineHeight: '1.6' }}>
            {portfolioData.hero.subheadline}
          </p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
            <a
              href="#projects"
              style={{ backgroundColor: 'white', color: '#2563eb', padding: '12px 32px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              style={{ border: '2px solid white', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}
            >
              Get In Touch
            </a>
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white', opacity: 0.9, textDecoration: 'none' }}
            >
              <svg style={{ width: '32px', height: '32px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white', opacity: 0.9, textDecoration: 'none' }}
            >
              <svg style={{ width: '32px', height: '32px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c-.009.015-.021.029-.033.042h.033v-.042c.537-.827 1.5-2.006 3.644-2.006 2.664 0 4.659 1.719 4.659 5.417v5.887zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.703 1.915-1.703 1.144 0 1.915.752 1.915 1.703 0 .946-.771 1.704-1.915 1.704zm1.589 11.019H3.75V9.787h3.176v10.665zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="/tefo-profile.jfif" 
            alt="Tefo Karabo Komane" 
            style={{
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid rgba(255,255,255,0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
