export type MenuCategoryId =
  | 'hot-drinks'
  | 'cold-drinks'
  | 'fresh-juices'
  | 'food-snacks';

export type PriceSource = 'verified-menu' | 'local-market-estimate';

export type MenuDisplayMode = 'classic' | 'illustrated';

export interface MenuSubcategory {
  id: string;
  title: string;
  subtitle?: string;
  bannerImage: string;
}

/** A browseable menu section with its internal pricing note attached. */
export interface MenuSubcategoryEntry extends MenuSubcategory {
  parentCategoryId: MenuCategoryId;
  priceNote: string;
}

export interface MenuCategory {
  id: MenuCategoryId;
  title: string;
  amharicHint?: string;
  subtitle: string;
  badgeText?: string;
  description: string;
  bannerImage: string;
  defaultDisplayMode: MenuDisplayMode;
  priceNote: string;
  subcategories: MenuSubcategory[];
}

export interface MenuItemData {
  id: string;
  name: string;
  /** Optional note if the original printed menu had an alternate/ambiguous spelling */
  originalMenuNote?: string;
  price: number;
  currency: 'ETB';
  category: MenuCategoryId;
  subcategoryId: string;
  subcategoryTitle: string;
  description?: string;
  available: boolean;
  featured?: boolean;
  popular?: boolean;
  /** Plant-based / Ethiopian Orthodox fasting-friendly (Tsom) item */
  fasting?: boolean;
  priceSource: PriceSource;
}

export interface OpeningHourEntry {
  days: string;
  hours: string;
  note?: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  heroSupportingText: string;
  currency: 'ETB';
  wifiPlaceholder: string;
  isContactPlaceholder: boolean;
  ownerConfigNotice: string;
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
    emailDisplay: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    landmarkNote: string;
  };
  openingHours: OpeningHourEntry[];
  socials: {
    instagram: string;
    telegram: string;
    tiktok: string;
    facebook: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    paragraphs: string[];
    pillars: {
      title: string;
      description: string;
    }[];
  };
}
