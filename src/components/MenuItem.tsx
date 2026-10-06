import React from 'react';
import { Leaf, Sparkles } from 'lucide-react';
import { MenuItemData } from '../types/menu';
import { formatETB } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemData;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <article
      className={`group rounded-lg px-2.5 py-3 transition-colors hover:bg-[#252321]/55 ${
        !item.available ? 'opacity-60' : ''
      }`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-wrap">
          <h3 className="font-sans text-[15px] sm:text-base font-medium text-[#F1E6D2] group-hover:text-[#D6B477] transition-colors">
            {item.name}
          </h3>

          {item.popular && (
            <span
              className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-sm text-[10px] font-medium uppercase tracking-wider bg-[#4A3528]/90 text-[#D6B477] border border-[#D6B477]/30 shrink-0"
              title="Customer favorite"
            >
              <Sparkles className="w-2.5 h-2.5" />
              Popular
            </span>
          )}

          {item.fasting && (
            <span
              className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-sm text-[10px] font-medium uppercase tracking-wider bg-[#252321] text-[#D6B477]/90 border border-[#D6B477]/25 shrink-0"
              title="Fasting-friendly (Tsom / Plant-Based)"
            >
              <Leaf className="w-2.5 h-2.5 text-[#D6B477]" />
              Fasting
            </span>
          )}
        </div>

        <span
          className="flex-1 min-w-[16px] menu-leader-dots mx-1 self-end mb-1.5"
          aria-hidden="true"
        />

        <span className="shrink-0 font-sans text-[15px] sm:text-base font-semibold text-[#D6B477] tabular-nums tracking-wide">
          {formatETB(item.price)}
        </span>
      </div>

      {(item.description || !item.available) && (
        <div className="mt-1 flex items-start justify-between gap-3">
          {item.description && (
            <p className="text-xs sm:text-[13px] text-[#BDB3A5] leading-relaxed">
              {item.description}
            </p>
          )}

          {!item.available && (
            <span className="shrink-0 text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-400/30">
              Sold Out
            </span>
          )}
        </div>
      )}
    </article>
  );
};
