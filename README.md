# Ameen Coffee and Pastry — Digital Menu

A responsive QR-code menu for **Ameen Coffee and Pastry** in Addis Ababa, Ethiopia. Guests browse directly by menu section (Coffee, Tea, Burgers, Pastries & Bakery, and more), then see a clean text-only item list with prices in ETB. Main categories are kept only as internal data groupings; they are not shown as a separate browsing layer.

## Design and behavior

- Mobile-first section directory with real photo banners for each menu section.
- Direct subcategory browsing, horizontal section shortcuts, and prominent ways back to **All Menu Sections**.
- Global instant search, Popular and Fasting filters.
- Text-only menu item rows—no product thumbnails.
- No printed-menu board or printed-menu modal in the interface.
- No cart or checkout.
- ETB price formatting throughout.
- Hot-drink prices are preserved from the supplied menu. Other researched/estimated prices are clearly marked as estimates that require owner confirmation.
- Contact details, Wi-Fi, address and hours are editable placeholders in `src/data/siteConfig.ts`; no business contact details are presented as confirmed.

## Technology

- React 18, Vite 6 and TypeScript
- Tailwind CSS
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Build and lint:

```bash
npm run build
npm run lint
```

## Project structure

```text
├── public/images/             # Café cover and real menu-section banner photographs
├── src/
│   ├── components/
│   │   ├── Header.tsx                 # Sticky header with a quick return to all sections
│   │   ├── Hero.tsx                   # Café cover and business information
│   │   ├── SubcategoryNavigation.tsx  # Direct section shortcuts
│   │   ├── SubcategoryCards.tsx       # Main menu-section directory
│   │   ├── SearchBar.tsx              # Instant global search
│   │   ├── MenuSection.tsx            # Single-section item list and pricing note
│   │   ├── MenuItem.tsx               # Text-only item row with ETB price
│   │   ├── AboutSection.tsx           # Café story and service pillars
│   │   ├── ContactSection.tsx         # Editable location, phone and hours
│   │   ├── WhatsAppButton.tsx         # Floating contact and back-to-top buttons
│   │   └── Footer.tsx                 # Direct links to all menu sections
│   ├── data/
│   │   ├── menuData.ts                # Menu items, internal categories and sections
│   │   └── siteConfig.ts              # Business details and editable placeholders
│   ├── pages/Home.tsx                 # Main menu controller
│   └── types/menu.ts                  # TypeScript interfaces
├── package.json
└── README.md
```

## Updating menu items and prices

Edit `menuItems` in `src/data/menuData.ts`. Each item has a `category` for internal grouping and a `subcategoryId` that determines the section guests browse directly. Price values are numbers and are rendered as `150 ETB`.

Prices with `priceSource: 'verified-menu'` preserve the supplied menu. Items using `priceSource: 'local-market-estimate'` are proposed estimates and require owner confirmation before being treated as official prices. Their section-level notes are displayed in the menu.

## Updating business details

Edit `src/data/siteConfig.ts` to replace the clearly labeled placeholders for phone, address, Wi-Fi, opening hours and social accounts. Confirm each value with the owner before publishing.
