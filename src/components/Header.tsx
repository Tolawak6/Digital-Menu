import React, { useState } from 'react';
import { ArrowLeft, Coffee, LayoutGrid, Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeaderProps {
  activeSection: string;
  isSubcategorySelected: boolean;
  onNavigate: (sectionId: string) => void;
  onBrowseAll: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  isSubcategorySelected,
  onNavigate,
  onBrowseAll,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const browseAll = () => {
    setMobileMenuOpen(false);
    onBrowseAll();
    onNavigate('menu');
  };

  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#252321]/95 backdrop-blur-md border-b border-[#D6B477]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Brand also serves as a quick route back to the section directory. */}
        <button
          type="button"
          onClick={browseAll}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
          aria-label={`${siteConfig.brandName} — browse all menu sections`}
        >
          <div className="w-9 h-9 rounded-full bg-[#332D27] border border-[#D6B477]/45 flex items-center justify-center shrink-0">
            <Coffee className="w-4 h-4 text-[#D6B477]" />
          </div>
          <div>
            <span className="block font-serif text-base sm:text-lg font-bold text-[#F1E6D2] group-hover:text-[#D6B477] transition-colors leading-tight">
              {siteConfig.brandName}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-[#BDB3A5]">
              Digital Menu &bull; ETB
            </span>
          </div>
        </button>

        {/* About and contact remain secondary links; menu browsing stays prominent. */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-[#D6B477]'
                  : 'text-[#BDB3A5] hover:text-[#F1E6D2]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={browseAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#D6B477] text-[#252321] hover:bg-[#E5CA97] transition-colors"
            aria-label={isSubcategorySelected ? 'Return to all menu sections' : 'Browse all menu sections'}
          >
            {isSubcategorySelected ? (
              <ArrowLeft className="w-3.5 h-3.5" />
            ) : (
              <LayoutGrid className="w-3.5 h-3.5" />
            )}
            <span>{isSubcategorySelected ? 'All Sections' : 'Browse'}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full text-[#F1E6D2] hover:text-[#D6B477] bg-[#332D27] border border-[#D6B477]/25"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#252321] border-t border-[#D6B477]/20 px-4 py-3 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left px-3 py-2 rounded text-sm font-medium text-[#F1E6D2] hover:bg-[#332D27] hover:text-[#D6B477]"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
