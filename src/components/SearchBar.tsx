import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="relative w-full">
      <label htmlFor="menu-search-input" className="sr-only">
        Search menu items
      </label>
      <input
        id="menu-search-input"
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search coffee, macchiato, spris, burger, croissant..."
        className="w-full pl-5 pr-12 py-3 rounded-full bg-[#332D27] text-[#F1E6D2] placeholder-[#BDB3A5]/80 text-sm border border-[#D6B477]/25 focus:border-[#D6B477] focus:outline-none focus:ring-1 focus:ring-[#D6B477] transition-all shadow-inner"
      />
      {searchQuery ? (
        <button
          type="button"
          onClick={() => onSearchChange('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#252321] text-[#D6B477] hover:bg-[#4A3528] flex items-center justify-center border border-[#D6B477]/30 transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      ) : (
        <span
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#252321] text-[#D6B477] flex items-center justify-center border border-[#D6B477]/25 shadow-sm"
          aria-hidden="true"
        >
          <Search className="w-4 h-4" />
        </span>
      )}
    </div>
  );
};
