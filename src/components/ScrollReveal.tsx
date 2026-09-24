'use client';
import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  className = '', 
  stagger = false 
}: { 
  children: React.ReactNode; 
  className?: string;
  stagger?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const baseClass = stagger ? 'reveal-stagger' : 'reveal-up';
  
  return (
    <div 
      ref={ref} 
      className={`${baseClass} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
