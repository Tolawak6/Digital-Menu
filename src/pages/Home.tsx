import React, { useState, useMemo, useEffect } from 'react';
import { SearchX, RotateCcw, Sparkles, Leaf } from 'lucide-react';
import { menuItems, menuSubcategories } from '../data/menuData';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SubcategoryNavigation } from '../components/SubcategoryNavigation';
import { SubcategoryCards } from '../components/SubcategoryCards';
import { SearchBar } from '../components/SearchBar';
import { MenuSection } from '../components/MenuSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<
    string | undefined
  >(undefined);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyPopular, setOnlyPopular] = useState<boolean>(false);
  const [onlyFasting, setOnlyFasting] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = ['home', 'menu', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSearchingOrFiltering =
    searchQuery.trim().length > 0 || onlyPopular || onlyFasting;

  // Search and quick filters are global so guests can find any of the menu items.
  const filteredItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return menuItems.filter((item) => {
      if (onlyPopular && !item.popular && !item.featured) {
        return false;
      }
      if (onlyFasting && !item.fasting) {
        return false;
      }
      if (!normalizedQuery) {
        return true;
      }

      const inName = item.name.toLowerCase().includes(normalizedQuery);
      const inDescription = item.description
        ? item.description.toLowerCase().includes(normalizedQuery)
        : false;
      const inSubcategory = item.subcategoryTitle
        .toLowerCase()
        .includes(normalizedQuery);
      const inMenuNote = item.originalMenuNote
        ? item.originalMenuNote.toLowerCase().includes(normalizedQuery)
        : false;

      return inName || inDescription || inSubcategory || inMenuNote;
    });
  }, [searchQuery, onlyPopular, onlyFasting]);

  const visibleItems = useMemo(() => {
    if (isSearchingOrFiltering || !selectedSubcategoryId) {
      return filteredItems;
    }
    return filteredItems.filter(
      (item) => item.subcategoryId === selectedSubcategoryId
    );
  }, [filteredItems, isSearchingOrFiltering, selectedSubcategoryId]);

  const visibleSections = useMemo(
    () =>
      menuSubcategories.filter((section) =>
        visibleItems.some((item) => item.subcategoryId === section.id)
      ),
    [visibleItems]
  );

  const itemCountsBySubcategory = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of menuItems) {
      counts[item.subcategoryId] = (counts[item.subcategoryId] ?? 0) + 1;
    }
    return counts;
  }, []);

  const scrollToElement = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToElement(sectionId);
  };

  const handleBrowseAll = () => {
    setSelectedSubcategoryId(undefined);
    setSearchQuery('');
    setOnlyPopular(false);
    setOnlyFasting(false);
    setActiveSection('menu');
    window.setTimeout(() => scrollToElement('menu'), 20);
  };

  const handleSelectSubcategory = (subcategoryId?: string) => {
    if (!subcategoryId) {
      handleBrowseAll();
      return;
    }

    setSelectedSubcategoryId(subcategoryId);
    setSearchQuery('');
    setOnlyPopular(false);
    setOnlyFasting(false);
    setActiveSection('menu');
    window.setTimeout(() => scrollToElement('menu'), 20);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      // Any typed query searches the full menu rather than a single section.
      setSelectedSubcategoryId(undefined);
    }
  };

  const handlePopularToggle = () => {
    setOnlyPopular((current) => !current);
    setSelectedSubcategoryId(undefined);
  };

  const handleFastingToggle = () => {
    setOnlyFasting((current) => !current);
    setSelectedSubcategoryId(undefined);
  };

  const isOverview = !selectedSubcategoryId && !isSearchingOrFiltering;

  return (
    <div className="min-h-screen flex flex-col bg-[#252321] text-[#F1E6D2]">
      <Header
        activeSection={activeSection}
        isSubcategorySelected={Boolean(selectedSubcategoryId)}
        onNavigate={handleNavigateSection}
        onBrowseAll={handleBrowseAll}
      />

      <main className="flex-1">
        <Hero onContactUs={() => handleNavigateSection('contact')} />

        <section
          id="menu"
          className="scroll-mt-16 max-w-4xl mx-auto px-4 sm:px-8 pt-2 pb-14 space-y-5"
          aria-label="Digital Menu"
        >
          <SubcategoryNavigation
            subcategories={menuSubcategories}
            selectedSubcategoryId={selectedSubcategoryId}
            onSelectSubcategory={handleSelectSubcategory}
          />

          <div className="space-y-2.5">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />

            <div className="flex items-center justify-between gap-2 flex-wrap pt-0.5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePopularToggle}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                    onlyPopular
                      ? 'bg-[#D6B477] text-[#252321] border-[#D6B477] font-semibold'
                      : 'bg-[#332D27]/70 text-[#BDB3A5] border-[#D6B477]/20 hover:text-[#F1E6D2]'
                  }`}
                  aria-pressed={onlyPopular}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Popular</span>
                </button>

                <button
                  type="button"
                  onClick={handleFastingToggle}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                    onlyFasting
                      ? 'bg-[#D6B477] text-[#252321] border-[#D6B477] font-semibold'
                      : 'bg-[#332D27]/70 text-[#BDB3A5] border-[#D6B477]/20 hover:text-[#F1E6D2]'
                  }`}
                  aria-pressed={onlyFasting}
                >
                  <Leaf className="w-3 h-3" />
                  <span>Fasting (Tsom)</span>
                </button>
              </div>

              {(selectedSubcategoryId || isSearchingOrFiltering) && (
                <button
                  type="button"
                  onClick={handleBrowseAll}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#D6B477] hover:underline"
                >
                  &larr; All Menu Sections
                </button>
              )}
            </div>
          </div>

          {isOverview ? (
            <div className="pt-2">
              <SubcategoryCards
                subcategories={menuSubcategories}
                itemCounts={itemCountsBySubcategory}
                onSelectSubcategory={handleSelectSubcategory}
              />
            </div>
          ) : visibleItems.length > 0 ? (
            <div className="pt-2 space-y-10">
              {visibleSections.map((section) => {
                const sectionItems = visibleItems.filter(
                  (item) => item.subcategoryId === section.id
                );
                return (
                  <MenuSection
                    key={section.id}
                    section={section}
                    items={sectionItems}
                    onBrowseAll={
                      selectedSubcategoryId && !isSearchingOrFiltering
                        ? handleBrowseAll
                        : undefined
                    }
                  />
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl bg-[#332D27] border border-[#D6B477]/30 p-8 sm:p-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#252321] border border-[#D6B477]/35 flex items-center justify-center mx-auto">
                <SearchX className="w-6 h-6 text-[#D6B477]" />
              </div>
              <h2 className="font-serif text-xl font-bold text-[#F1E6D2]">
                No Menu Items Found
              </h2>
              <p className="text-sm text-[#BDB3A5] max-w-md mx-auto">
                No items matched{' '}
                {searchQuery ? (
                  <span className="text-[#F1E6D2] font-medium">
                    &ldquo;{searchQuery}&rdquo;
                  </span>
                ) : (
                  'your selected filters'
                )}
                .
              </p>
              <button
                type="button"
                onClick={handleBrowseAll}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#D6B477] text-[#252321] hover:bg-[#E5CA97] transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Show All Menu Sections</span>
              </button>
            </div>
          )}
        </section>

        <AboutSection />
        <ContactSection />
      </main>

      <Footer
        onNavigate={handleNavigateSection}
        onBrowseAll={handleBrowseAll}
        onSelectSubcategory={handleSelectSubcategory}
      />

      <WhatsAppButton />
    </div>
  );
};
