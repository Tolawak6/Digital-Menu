import React from 'react';
import { MenuSubcategoryEntry } from '../types/menu';

interface SubcategoryCardsProps {
  subcategories: MenuSubcategoryEntry[];
  itemCounts: Record<string, number>;
  onSelectSubcategory: (subcategoryId: string) => void;
}

export const SubcategoryCards: React.FC<SubcategoryCardsProps> = ({
  subcategories,
  itemCounts,
  onSelectSubcategory,
}) => {
  return (
    <section aria-labelledby="browse-sections-heading" className="space-y-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#D6B477]">
            Browse the menu
          </p>
          <h2
            id="browse-sections-heading"
            className="font-serif text-xl sm:text-2xl font-semibold text-[#F1E6D2]"
          >
            Choose a section
          </h2>
        </div>
        <span className="text-xs text-[#BDB3A5]">Tap to see items</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {subcategories.map((subcategory) => (
          <button
            key={subcategory.id}
            type="button"
            onClick={() => onSelectSubcategory(subcategory.id)}
            className="group relative h-32 sm:h-40 rounded-2xl overflow-hidden border border-[#D6B477]/25 hover:border-[#D6B477]/70 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B477] transition-all text-center"
          >
            <img
              src={subcategory.bannerImage}
              alt={subcategory.title}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-3">
              <h3 className="font-sans text-sm sm:text-base font-bold uppercase tracking-wider text-[#F1E6D2] drop-shadow">
                {subcategory.title}
              </h3>
              {subcategory.subtitle && (
                <p className="mt-1 line-clamp-2 text-[10px] sm:text-xs leading-snug text-[#F1E6D2]/85 drop-shadow">
                  {subcategory.subtitle}
                </p>
              )}
              <span className="mt-2 inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-[#252321]/85 text-[#D6B477] border border-[#D6B477]/35">
                {itemCounts[subcategory.id] ?? 0} items
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
