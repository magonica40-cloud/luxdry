import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
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
      <AboutUs />
      <Services />
      <WhyLuxeDry />
      <BookingForm />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
