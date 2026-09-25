import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Compliance from '@/components/Compliance';
import WhyLuxeDry from '@/components/WhyLuxeDry';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-brand-cyan/20 selection:text-brand-cyan">
      <Navbar />
      <Hero />
      
      {/* Infinite Marquee Strip */}
      <div className="bg-brand-navy py-6 overflow-hidden border-y border-white/10 relative">
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
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
      <Compliance />
      <WhyLuxeDry />
      <BookingForm />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
