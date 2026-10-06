import React from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import { MenuItemData, MenuSubcategoryEntry } from '../types/menu';
import { MenuItem } from './MenuItem';

interface MenuSectionProps {
  section: MenuSubcategoryEntry;
  items: MenuItemData[];
  onBrowseAll?: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  section,
  items,
  onBrowseAll,
}) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      id={`section-${section.id}`}
      className="space-y-4 scroll-mt-24"
      aria-labelledby={`heading-${section.id}`}
    >
      {onBrowseAll && (
        <button
          type="button"
          onClick={onBrowseAll}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#332D27] text-[#F1E6D2] hover:text-[#D6B477] border border-[#D6B477]/30 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#D6B477]" />
          <span>All Menu Sections</span>
        </button>
      )}

      <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden border border-[#D6B477]/30 shadow-lg">
        <img
          src={section.bannerImage}
          alt={section.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h2
            id={`heading-${section.id}`}
            className="font-sans text-xl sm:text-3xl font-bold uppercase tracking-[0.12em] text-[#F1E6D2] drop-shadow"
          >
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="mt-1 text-xs sm:text-sm text-[#F1E6D2]/85 font-medium">
              {section.subtitle}
            </p>
          )}
          <span className="mt-2 inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#252321]/85 text-[#D6B477] border border-[#D6B477]/35">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        </div>
      </div>

      <div className="flex items-start gap-2 px-3.5 py-2.5 rounded-xl bg-[#332D27]/80 border border-[#D6B477]/20 text-xs leading-relaxed text-[#BDB3A5]">
        <Info className="w-4 h-4 text-[#D6B477] shrink-0 mt-0.5" />
        <span>{section.priceNote}</span>
      </div>

      <div className="rounded-2xl bg-[#332D27]/85 border border-[#D6B477]/20 p-3 sm:p-5 shadow-md divide-y divide-[#D6B477]/10">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
