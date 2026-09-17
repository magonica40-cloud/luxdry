import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import WhyLuxeDry from '@/components/WhyLuxeDry';
import FabricCare from '@/components/FabricCare';
import Pricing from '@/components/Pricing';
import BookingForm from '@/components/BookingForm';
import ServiceArea from '@/components/ServiceArea';
import Testimonials from '@/components/Testimonials';
import PromoBanner from '@/components/PromoBanner';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-brand-cyan/20 selection:text-brand-cyan">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <WhyLuxeDry />
      <FabricCare />
      <Pricing />
      <BookingForm />
      <ServiceArea />
      <Testimonials />
      <PromoBanner />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
