'use client';
import { site } from '@/data/site';
import { InstagramIcon, WhatsAppIcon } from '@/components/SocialIcons';

const base =
  'w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-[fadeUp_0.5s_ease]';

export default function FloatingSocial() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white`}
        aria-label="LuxeDry on Instagram"
      >
        <InstagramIcon size={27} />
      </a>

      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#25D366] text-white`}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={27} />
      </a>
    </div>
  );
}
