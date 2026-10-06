import React from 'react';
import { MenuSubcategoryEntry } from '../types/menu';

interface SubcategoryNavigationProps {
  subcategories: MenuSubcategoryEntry[];
  selectedSubcategoryId?: string;
  onSelectSubcategory: (subcategoryId?: string) => void;
}

export const SubcategoryNavigation: React.FC<SubcategoryNavigationProps> = ({
  subcategories,
  selectedSubcategoryId,
  onSelectSubcategory,
}) => {
  return (
    <nav aria-label="Browse menu sections" className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] uppercase tracking-[0.18em] text-[#BDB3A5]">
          Menu sections
        </span>
        <span className="text-[11px] text-[#BDB3A5]/80">
          {subcategories.length} sections
        </span>
      </div>

      <div
        className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1"
        role="tablist"
        aria-label="Select a menu section"
      >
        <button
          type="button"
          role="tab"
          aria-selected={!selectedSubcategoryId}
          onClick={() => onSelectSubcategory(undefined)}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 border ${
            !selectedSubcategoryId
              ? 'bg-[#D6B477] text-[#252321] border-[#D6B477] shadow-sm'
              : 'bg-transparent text-[#F1E6D2] border-[#D6B477]/45 hover:border-[#D6B477] hover:text-[#D6B477]'
          }`}
        >
          All Sections
        </button>

        {subcategories.map((subcategory) => {
          const isSelected = selectedSubcategoryId === subcategory.id;
          return (
            <button
              key={subcategory.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelectSubcategory(subcategory.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 border ${
                isSelected
                  ? 'bg-[#D6B477] text-[#252321] border-[#D6B477] shadow-sm'
                  : 'bg-transparent text-[#F1E6D2] border-[#D6B477]/45 hover:border-[#D6B477] hover:text-[#D6B477]'
              }`}
            >
              {subcategory.title}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
