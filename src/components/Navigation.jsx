import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{ position: 'fixed', width: '100%', top: 0, backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}>
        
        <a href="#home" onClick={() => handleNavClick('#home')} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/TK-favicon.png" alt="Tefo Komane" style={{ height: '40px', width: '40px' }} />
        </a>

        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#home" onClick={() => handleNavClick('#home')} style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Home</a>
          <a href="#about" onClick={() => handleNavClick('#about')} style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>About</a>
          <a href="#projects" onClick={() => handleNavClick('#projects')} style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Projects</a>
          <a href="#skills" onClick={() => handleNavClick('#skills')} style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Skills</a>
          <a href="#contact" onClick={() => handleNavClick('#contact')} style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
        </div>

        <a href="#contact" onClick={() => handleNavClick('#contact')} style={{ backgroundColor: '#2563eb', color: 'white', padding: '8px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: '500' }}>
          Get In Touch
        </a>
      </div>
    </nav>
  );
}
