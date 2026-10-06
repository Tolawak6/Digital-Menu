import { SiteConfig } from '../types/menu';

/**
 * ============================================================================
 * AMEEN COFFEE AND PASTRY — SITE & BUSINESS CONFIGURATION
 * ============================================================================
 * OWNER / ADMINISTRATOR NOTE:
 * Phone number, exact street address, Wi-Fi password, opening hours, and
 * social media handles below are set to clearly labeled editable placeholders.
 * Replace the placeholder values below with your official business details
 * before publishing the live QR menu.
 * ============================================================================
 */
export const siteConfig: SiteConfig = {
  brandName: 'Ameen Coffee and Pastry',
  tagline: 'Good Coffee. Fresh Bites. Warm Moments.',
  heroSupportingText:
    'Discover your favorite coffee, refreshing juices, delicious pastries, and freshly prepared meals, all in one place.',
  currency: 'ETB',
  wifiPlaceholder: 'Ask staff for Wi-Fi (Placeholder)',
  isContactPlaceholder: true,
  ownerConfigNotice:
    'Contact details, exact street address, and opening hours shown below are editable placeholders in src/data/siteConfig.ts awaiting owner confirmation.',
  contact: {
    phoneDisplay: '+251 9XX XXX XXX',
    phoneHref: '+251900000000',
    whatsappNumber: '251900000000',
    whatsappDefaultMessage:
      'Selam Ameen Coffee and Pastry! I am browsing your digital menu and would like to ask a question.',
    emailDisplay: 'contact@ameencoffee.et (Placeholder)',
    addressLine1: 'Addis Ababa, Ethiopia',
    addressLine2: 'Sub-City / Woreda / Street Address Placeholder',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    landmarkNote:
      'Update landmark directions in src/data/siteConfig.ts (e.g., neighborhood & nearby building)',
  },
  openingHours: [
    {
      days: 'Monday – Sunday',
      hours: '07:00 AM – 09:30 PM (Placeholder)',
      note: 'Morning coffee, fresh juices, pastries & all-day café meals',
    },
    {
      days: 'Public Holidays',
      hours: 'Hours subject to confirmation by management',
    },
  ],
  socials: {
    instagram: '@ameencoffeepastry (Placeholder)',
    telegram: 't.me/ameencoffeepastry (Placeholder)',
    tiktok: '@ameencoffeepastry (Placeholder)',
    facebook: 'Ameen Coffee and Pastry (Placeholder)',
  },
  about: {
    eyebrow: 'Addis Ababa Coffeehouse & Kitchen',
    title: 'Rooted in Ethiopian Coffee Culture, Crafted for Everyday Warmth',
    lead: 'At Ameen Coffee and Pastry, every cup begins with Ethiopia’s unmistakable coffee heritage—paired with freshly baked pastries, vibrant tropical fruit juices, and comforting café meals.',
    paragraphs: [
      'Inspired by the classic warmth of Addis Ababa neighborhood coffee houses, our menu brings together rich espresso creations, aromatic spiced teas, and our signature roasted peanut (Loozii) specialties.',
      'Whether you are stopping by for a morning macchiato and flaky croissant, cooling down with a layered Ethiopian Spris juice, or sharing freshly grilled burgers and club sandwiches with friends, our table is always open.',
    ],
    pillars: [
      {
        title: 'Authentic Ethiopian Roast',
        description:
          'From bold Espresso and layered Macchiato to Fasting Macchiato and signature Peanut Loozii blends.',
      },
      {
        title: 'Freshly Blended Juices',
        description:
          'Seasonal avocado, mango, papaya, and iconic multi-layered Ethiopian Spris prepared to order.',
      },
      {
        title: 'Daily Pastries & Café Kitchen',
        description:
          'Golden croissants, cake slices, hearty burgers, club sandwiches, and crispy sides made fresh.',
      },
    ],
  },
};
