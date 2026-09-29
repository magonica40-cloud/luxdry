import Hero from '@/components/Hero';

import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import DeliveryOptions from '@/components/DeliveryOptions';
import Compliance from '@/components/Compliance';
import WhyLuxeDry from '@/components/WhyLuxeDry';
import FabricCare from '@/components/FabricCare';
import BlogSection from '@/components/BlogSection';
import Testimonials from '@/components/Testimonials';
import ServiceArea from '@/components/ServiceArea';
import Branches from '@/components/Branches';
import PromoBanner from '@/components/PromoBanner';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Infinite Marquee Strip */}
      <div className="bg-brand-navy py-6 overflow-hidden border-y border-white/10 relative">
        <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
        <div className="flex whitespace-nowrap animate-marquee relative z-10">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 text-brand-cyan/80 font-bold uppercase tracking-[0.2em] text-sm">
              <span>★ 5-Star Hotels</span>
              <span>★ Healthcare & Hospitals</span>
              <span>★ Corporate Offices</span>
              <span>★ Premium Salons</span>
              <span>★ University Hostels</span>
              <span>★ High-End Restaurants</span>
              <span>★ Fitness Centers</span>
            </div>
          ))}
        </div>
      </div>

      <AboutUs />
      <Services />

      <HowItWorks />
      <DeliveryOptions />
      <Compliance />
      <WhyLuxeDry />
      <FabricCare />
      <BlogSection />
      <Testimonials />
      <Branches />
      <ServiceArea />
      <PromoBanner />
      <BookingForm />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
