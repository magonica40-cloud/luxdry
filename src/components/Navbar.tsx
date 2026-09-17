'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why LuxeDry', href: '#why-luxedry' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Areas We Serve', href: '#service-area' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50">
          <img src="/logo.jpeg" alt="LuxeDry" className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-brand-cyan transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#book" className="btn-primary py-2.5 px-6 text-sm">Book a Pickup</a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden z-50 text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col items-center justify-center gap-6`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-bold text-slate-800 hover:text-brand-cyan">
              {link.name}
            </a>
          ))}
          <a href="#book" onClick={() => setIsOpen(false)} className="btn-primary mt-4">Book a Pickup</a>
        </div>
      </div>
    </header>
  );
}
