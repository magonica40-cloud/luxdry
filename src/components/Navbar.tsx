'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]) && !href.includes('#');

  const onDarkHero = pathname !== '/';
  const menuButtonTone = scrolled || !onDarkHero ? 'text-slate-800' : 'text-white';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2'
          : onDarkHero
            ? 'bg-slate-950/45 backdrop-blur-md border-b border-white/10 py-3'
            : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center gap-6">
        <Link href="/" className="flex items-center z-50 shrink-0 transition-all duration-300">
          <Image
            src={!scrolled && onDarkHero ? '/logo_care_light.png' : '/logo_care.png'}
            alt="Luxe Dry Care"
            width={!scrolled && onDarkHero ? 593 : 570}
            height={!scrolled && onDarkHero ? 391 : 381}
            priority
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'}`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-semibold transition-colors ${
                isActive(link.href)
                  ? 'text-brand-cyan'
                  : scrolled || !onDarkHero
                    ? 'text-slate-600 hover:text-brand-cyan'
                    : 'text-white/90 hover:text-white'
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

        <button
          suppressHydrationWarning
          className={`lg:hidden z-[80] ml-auto transition-colors ${menuButtonTone}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[70] w-screen h-screen bg-slate-950/95 backdrop-blur-sm transition-all duration-300 ease-out lg:hidden ${
          isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-7 px-6 text-center">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 text-white/80 hover:text-white"
            aria-label="Close menu"
          >
            <X size={30} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-bold transition-colors ${
                isActive(link.href) ? 'text-brand-cyan' : 'text-white hover:text-brand-cyan'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/#book" onClick={() => setIsOpen(false)} className="btn-primary mt-4 text-lg">
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
