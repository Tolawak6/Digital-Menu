import React from 'react';
import { Coffee, Citrus, Croissant } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { OrnamentalDivider } from './MenuMotifs';

export const AboutSection: React.FC = () => {
  const pillarIcons = [
    <Coffee key="coffee" className="w-5 h-5 text-[#D6B477]" />,
    <Citrus key="juice" className="w-5 h-5 text-[#D6B477]" />,
    <Croissant key="pastry" className="w-5 h-5 text-[#D6B477]" />,
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 py-14 sm:py-16 border-t border-[#D6B477]/20 ameen-menu-paper"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#332D27] border border-[#D6B477]/30 text-xs uppercase tracking-[0.2em] text-[#D6B477]">
            <span>{siteConfig.about.eyebrow}</span>
          </div>

          <h2
            id="about-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-[#F1E6D2] leading-tight"
          >
            {siteConfig.about.title}
          </h2>

          <OrnamentalDivider className="justify-start" />

          <p className="font-serif text-lg sm:text-xl text-[#D6B477]/95 leading-relaxed">
            {siteConfig.about.lead}
          </p>

          <div className="space-y-3 text-sm sm:text-base text-[#BDB3A5] leading-relaxed">
            {siteConfig.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
          {siteConfig.about.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="p-4 rounded-xl bg-[#332D27]/90 border border-[#D6B477]/20 space-y-2"
            >
              <div className="w-9 h-9 rounded-lg bg-[#252321] border border-[#D6B477]/30 flex items-center justify-center">
                {pillarIcons[index % pillarIcons.length]}
              </div>
              <h3 className="font-serif text-base font-semibold text-[#F1E6D2]">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#BDB3A5] leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
