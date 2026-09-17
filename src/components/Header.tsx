'use client';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <img src="/logo.jpeg" alt="Luxedry Logo" className={styles.logoImg} />
        </a>

        {/* Nav */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {['Services','How It Works','Pricing','Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g,'-')}`} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#schedule" className="btn-primary" style={{padding:'0.6rem 1.4rem',fontSize:'0.85rem'}} onClick={() => setMenuOpen(false)}>
            Schedule Pickup
          </a>
        </nav>

        {/* Hamburger */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? styles.barOpen : ''}></span>
          <span className={menuOpen ? styles.barOpen : ''}></span>
          <span className={menuOpen ? styles.barOpen : ''}></span>
        </button>
      </div>
    </header>
  );
}
