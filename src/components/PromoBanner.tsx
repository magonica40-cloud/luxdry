'use client';
export default function PromoBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 text-center relative overflow-hidden bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-soft">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-purple/20 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm border border-white/30">
              Special Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Your First Pickup Starts Here.
            </h2>
            <p className="text-lg md:text-xl font-medium text-white/90 mb-10 max-w-2xl mx-auto">
              Experience professional laundry care without leaving home. Book now and get 20% off your first order!
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#book" className="px-8 py-4 bg-white text-brand-blue font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Book Your Pickup
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-brand-cyan/20 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
