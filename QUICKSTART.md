# AKAR Bespoke Shoes - Getting Started Guide

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
```

## What's Inside

### Pages
- **Home** - Landing page with brand story and features
- **Customize** - Interactive 4-step shoe customization builder
- **Gallery** - Browse pre-designed templates
- **About** - Company info, location, and process
- **Orders** - Track your custom shoe orders

### Key Components
- **Navbar** - Navigation with mobile menu
- **Footer** - Links and contact information
- **CustomizationBuilder** - Main form for designing shoes
- **ShoePreview3D** - Real-time preview (placeholder for 3D)
- **OrderTracking** - Order status and progress

### State Management
- Uses Zustand for state
- Auto-saves to browser localStorage
- No backend required for MVP

## Features

✅ Full shoe customization (model, size, material, color, heel, comfort)
✅ Order tracking with progress updates
✅ Artisan showcase
✅ Pre-designed templates
✅ Responsive design (mobile + desktop)
✅ Luxury dark theme
✅ Save multiple designs

## Customization Tips

### Add Your Logo/Images
1. Replace emoji placeholders in components
2. Add image files to `public/images/`
3. Update image paths in components

### Update Brand Colors
1. Edit `src/index.css` for global styles
2. Update `tailwind.config.js` for color palette
3. Luxury gold is `#d4af37`

### Add More Artisans
1. Update artisan list in `src/pages/Home.tsx`
2. Add artisan data to store if needed

### Add More Templates
1. Update templates in `src/store/useShoeStore.ts`
2. Add thumbnail images
3. Update gallery in `src/pages/Gallery.tsx`

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- React Router
- Zustand
- Lucide Icons

## Next Steps

1. **Add Your Images** - Replace black placeholders with your brand assets
2. **Customize Brand Colors** - Adjust gold and greens to match your brand
3. **Add Artisan Photos** - Update artisan profile pictures
4. **Configure Pricing** - Add price calculation logic
5. **Integrate Backend** - Connect to API for orders
6. **Add Payment** - Integrate UPI, card, cash payment methods
7. **3D Visualization** - Implement Three.js for 3D shoe preview

## Contact
📧 tavisharun29@gmail.com
📍 Nagpur, India

---

Happy designing! 🎨👞
