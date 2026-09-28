'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu when the route changes (including via browser back).
  // Adjusting state during render rather than in an effect avoids a cascading render.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]) && !href.includes('#');

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center gap-6">
        <Link href="/" className="flex items-center z-50 shrink-0">
          <img
            src="/logo_cropped.png"
            alt="LuxeDry"
            width={570}
            height={469}
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-20' : 'h-28'}`}
          />
        </Link>

        {/* Nav pushed to the right side */}
        <nav className="hidden lg:flex items-center gap-7 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-semibold transition-colors ${
                isActive(link.href)
                  ? 'text-brand-cyan'
                  : 'text-slate-600 hover:text-brand-cyan'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center shrink-0">
          <Link href="/#book" className="btn-primary py-3 px-7 text-base whitespace-nowrap">
            Get a Custom Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 text-slate-800 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden flex flex-col items-center justify-center gap-6 overflow-y-auto`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-bold transition-colors ${
                isActive(link.href) ? 'text-brand-cyan' : 'text-slate-800 hover:text-brand-cyan'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/#book" onClick={() => setIsOpen(false)} className="btn-primary mt-4">
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
