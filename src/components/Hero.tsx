import React from 'react';
import { MapPin, Phone, Wifi, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactUs }) => {
  return (
    <section id="home" className="relative bg-[#252321]">
      {/* Top Café Cover Image (just like the oddmenu.com QR menu demo screenshot) */}
      <div className="relative h-48 sm:h-64 w-full max-w-4xl mx-auto overflow-hidden">
        <img
          src="/images/hero-cafe.jpg"
          alt="Ameen Coffee and Pastry warm café interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252321] via-black/25 to-black/30" />

        {/* Top-Right Badge on Cover Image (like the language pill in the screenshot) */}
        <div className="absolute top-3.5 right-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#252321]/90 backdrop-blur-md text-[#F1E6D2] border border-[#D6B477]/35 text-xs font-medium shadow-md">
            <span>English &bull; ETB</span>
          </span>
        </div>
      </div>

      {/* Overlapping Rounded Main Header Card */}
      <div className="relative z-10 -mt-7 max-w-4xl mx-auto rounded-t-[28px] bg-[#252321] border-t border-[#D6B477]/25 px-4 sm:px-8 pt-6 pb-3">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#F1E6D2] tracking-tight">
          {siteConfig.brandName}
        </h1>

        {/* Compact Address, Phone, Wi-Fi & Hours Row (matching the demo screenshot) */}
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#BDB3A5]">
          <button
            type="button"
            onClick={onContactUs}
            className="inline-flex items-center gap-1.5 hover:text-[#D6B477] transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#D6B477] shrink-0" />
            <span>{siteConfig.contact.addressLine1}</span>
          </button>

          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="inline-flex items-center gap-1.5 hover:text-[#D6B477] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D6B477] shrink-0" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>

          <span className="inline-flex items-center gap-1.5">
            <Wifi className="w-4 h-4 text-[#D6B477] shrink-0" />
            <span>{siteConfig.wifiPlaceholder}</span>
          </span>

          <button
            type="button"
            onClick={onContactUs}
            className="inline-flex items-center gap-1.5 hover:text-[#D6B477] transition-colors"
          >
            <Clock className="w-4 h-4 text-[#D6B477] shrink-0" />
            <span>{siteConfig.openingHours[0]?.hours ?? 'Hours: please ask staff'}</span>
          </button>
        </div>

        {/* Concise Welcoming Description */}
        <p className="mt-3 text-xs sm:text-sm text-[#BDB3A5] leading-relaxed max-w-2xl">
          <span className="text-[#D6B477] font-medium">
            {siteConfig.tagline}
          </span>{' '}
          {siteConfig.heroSupportingText} 
           
        </p>
      </div>
    </section>
  );
};
