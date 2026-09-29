'use client';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: 'Rahul Sharma', text: 'Absolutely the best laundry service I have ever used. Fast, clean, and premium packaging.', rating: 5 },
    { name: 'Priya Desai', text: 'They handled my expensive silk sarees with so much care. Highly recommend LuxeDry!', rating: 5 },
    { name: 'Amit Verma', text: 'Pickup on time, delivery on time. Booking a collection on WhatsApp takes a minute.', rating: 5 },
  ];

  return (
    <section className="py-24 bg-slate-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. See why homes and businesses across Bengaluru
            keep coming back to LuxeDry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="flex text-brand-yellow mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic">&ldquo;{review.text}&rdquo;</p>
              <h4 className="font-bold text-slate-800">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
