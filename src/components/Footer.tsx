import React from 'react';
import { Coffee, QrCode } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { menuSubcategories } from '../data/menuData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onBrowseAll: () => void;
  onSelectSubcategory: (subcategoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onBrowseAll,
  onSelectSubcategory,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1D1B19] border-t border-[#D6B477]/20 text-[#BDB3A5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            <button
              type="button"
              onClick={onBrowseAll}
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-10 h-10 rounded-full bg-[#332D27] border border-[#D6B477]/45 flex items-center justify-center shrink-0">
                <Coffee className="w-5 h-5 text-[#D6B477]" />
              </div>
              <span>
                <span className="block font-serif text-lg font-bold text-[#D6B477] group-hover:text-[#E5CA97]">
                  {siteConfig.brandName}
                </span>
                <span className="block text-xs uppercase tracking-[0.18em] text-[#BDB3A5]">
                  {siteConfig.contact.city}, {siteConfig.contact.country}
                </span>
              </span>
            </button>

            <p className="text-sm leading-relaxed">
              &ldquo;{siteConfig.tagline}&rdquo; — Ethiopian coffee, fresh juices,
              bakery pastries, and comforting café meals.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#252321] border border-[#D6B477]/20 text-xs text-[#F1E6D2]">
              <QrCode className="w-4 h-4 text-[#D6B477]" />
              <span>Made for quick table-side menu browsing</span>
            </div>
          </div>

          <div className="md:col-span-5 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#D6B477] tracking-wide uppercase">
              Menu Sections
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {menuSubcategories.map((subcategory) => (
                <li key={subcategory.id}>
                  <button
                    type="button"
                    onClick={() => onSelectSubcategory(subcategory.id)}
                    className="text-left hover:text-[#D6B477] transition-colors"
                  >
                    {subcategory.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#D6B477] tracking-wide uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col items-start gap-2 text-sm">
              <button
                type="button"
                onClick={onBrowseAll}
                className="hover:text-[#D6B477] transition-colors"
              >
                Browse All Sections
              </button>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="hover:text-[#D6B477] transition-colors"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="hover:text-[#D6B477] transition-colors"
              >
                Contact &amp; Hours
              </button>
            </div>
            <p className="pt-3 text-xs text-[#BDB3A5]/85 leading-relaxed border-t border-[#D6B477]/15">
              All prices are displayed in Ethiopian Birr (<strong>ETB</strong>).
              Hot-drink prices match the supplied menu; prices in other sections
              are estimates pending owner confirmation.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-[#D6B477]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#BDB3A5]/80">
          <p>
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved.
          </p>
          <p>Addis Ababa, Ethiopia &bull; Digital Café Menu</p>
        </div>
      </div>
    </footer>
  );
};
