import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#332D27] hover:bg-[#4A3528] text-[#D6B477] border border-[#D6B477]/45 shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B477]"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Configurable WhatsApp Contact Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#D6B477] hover:bg-[#E5CA97] text-[#252321] font-semibold text-xs sm:text-sm shadow-lg shadow-black/50 border border-[#252321]/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F1E6D2]"
        aria-label="Contact Ameen Coffee and Pastry on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-[#252321]/10" />
        <span className="hidden xs:inline">WhatsApp Us</span>
      </a>
    </div>
  );
};
