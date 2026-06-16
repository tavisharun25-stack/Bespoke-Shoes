# AKAR | THE ARTISAN LAB
## Luxury Bespoke Shoe Customization Platform

### 🎨 Project Overview
AKAR is a premium, sustainable bespoke shoe customization website where customers can design their perfect daily shoes with master artisans in Nagpur.

### ✨ Key Features

#### 🛠️ Interactive Customization Builder
- Multi-step shoe configuration wizard
- Real-time 3D preview (placeholder ready for Three.js)
- Choose shoe model, size, width, materials, colors, heel height, and comfort level
- Save multiple designs for later

#### 📸 Real-time Progress Tracking
- Track orders from design to delivery
- Photo updates at each production step
- Order status timeline visualization
- Artisan assignment and information

#### 🖼️ Design Gallery
- Featured pre-designed templates
- Customer showcase section
- One-click customization from templates

#### 👨‍🎨 Artisan Showcase
- Meet the master craftspeople
- View experience and completed shoe count
- Specialization information

#### 💾 Order Management
- Save and manage multiple customizations
- Order history and status tracking
- Payment status monitoring

### 🎯 Customization Options

**Shoe Models:**
- Oxford (Classic Formal)
- Derby (Versatile Formal)
- Loafers (Sophisticated Casual)
- Casual (Modern Everyday)
- Low Top / High Top (Comfort Focused)

**Materials:**
- Premium Leather
- Suede
- Faux Leather
- Mesh
- Cloth
- Bamboo (Sustainable)

**Sizing & Fit:**
- US/UK Standard Sizes (5-15)
- Width Options: Narrow, Standard, Wide
- Shoe Length: Low Top, Mid Top, High Top

**Comfort & Details:**
- Heel Heights: 0.5" - 3" (in 0.5" increments)
- Sole Types: Leather, Crepe Rubber, Commando Rubber, Rubber
- Insole Options: Basic Cushion, Memory Foam, Orthotic Foam, Premium Gel
- Sole Thickness: 10mm - 16mm
- Custom Color Selection
- Special Notes for Artisan

### 📍 Location & Contact
**Location:** Nagpur, India  
**Email:** tavisharun29@gmail.com  
**Timeline:** 7-15 days (varies by shoe type)

### 🛠️ Tech Stack

**Frontend:**
- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- React Hook Form for forms
- Zustand for state management
- Lucide React for icons

**State Management:**
- Zustand with localStorage persistence
- Auto-save customizations and orders

**Ready for Future Enhancement:**
- Three.js for 3D shoe visualization
- Payment Gateway Integration (UPI, Cards, Cash)
- Backend API Integration
- Admin Dashboard
- Email Notifications

### 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Top navigation with mobile menu
│   ├── Footer.tsx              # Footer with links and contact
│   ├── CustomizationBuilder.tsx # Main 4-step customization form
│   ├── ShoePreview3D.tsx        # 3D preview placeholder
│   ├── OrderTracking.tsx        # Order status and progress display
│   └── ArtisanCard.tsx          # Artisan profile card
│
├── pages/
│   ├── Home.tsx                 # Landing page with hero and features
│   ├── Customize.tsx            # Customization page wrapper
│   ├── Gallery.tsx              # Design gallery and templates
│   ├── About.tsx                # About brand and location
│   └── Orders.tsx               # My Orders page
│
├── store/
│   └── useShoeStore.ts          # Zustand state management
│
├── types/
│   └── shoe.ts                  # TypeScript interfaces
│
├── App.tsx                      # Main app with routing
├── index.tsx                    # React entry point
└── index.css                    # Global styles with luxury theme

public/
└── index.html                   # HTML template

package.json                     # Dependencies and scripts
tailwind.config.js               # Tailwind configuration
tsconfig.json                    # TypeScript configuration
```

### 🚀 Getting Started

#### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/bespoke-shoes.git
cd bespoke-shoes

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

#### Build for Production
```bash
npm run build
```

### 🎨 Design System

**Color Palette:**
- Primary Gold: `#d4af37` - Luxury accent
- Dark Background: `#0f0f0f` - Premium dark theme
- Light Text: `#e8e8e8` - High contrast
- Green Sustainable: `#2d5016` - Eco-friendly accent

**Typography:**
- Headers: Playfair Display (serif) - Elegant luxury feel
- Body: Raleway (sans-serif) - Modern readability

**Effects:**
- Glass morphism cards (frosted glass effect)
- Gradient borders
- Smooth transitions
- Responsive design

### 💾 Data Persistence

All user data is stored in browser localStorage:
- `customizations` - Saved shoe designs
- `orders` - Order history and status

*Note: This is for demo purposes. Production should use a backend database.*

### 📋 Features by Page

#### Home Page
- Hero section with CTA
- Why Choose AKAR (3 feature cards)
- Customization options showcase
- 4-step journey timeline
- Featured artisans section
- Call-to-action for customization

#### Customize Page
- 4-step customization builder
  - Step 1: Model & Fit (model, size, width, length)
  - Step 2: Materials (fabric, sole, insole)
  - Step 3: Details (color, heel, thickness, notes)
  - Step 4: Review & Confirm
- Real-time shoe preview
- Progress indicator
- Save functionality

#### Gallery Page
- Featured templates (3 pre-designed)
- Customer showcase section (placeholder)
- Quick-start customization buttons

#### Orders Page
- List of all orders
- Order tracking with timeline
- Production progress photos section
- Artisan information
- Order details and payment status

#### About Page
- Brand story and values
- Location information
- Team contact
- Process explanation
- Company values (Craftsmanship, Sustainability, Individuality)

### 🔄 User Flow

1. **User lands on Home** → Sees brand story and features
2. **Browse Gallery** → Explores pre-designed templates or inspiration
3. **Customize Shoe** → Goes through 4-step wizard
   - Select model and sizing
   - Choose materials
   - Customize details (color, heel, etc.)
   - Review and submit
4. **Order Confirmed** → Redirected to Orders page
5. **Track Progress** → View production status and progress photos
6. **Receive Shoe** → Order marked as delivered

### 🎁 Demo Data Included

**Artisans:**
- Rajesh Kumar - Formal Wear Specialist (15 years, 500+ shoes)
- Priya Sharma - Modern Design Expert (12 years, 450+ shoes)
- Amit Patel - Sustainable Materials Specialist (10 years, 380+ shoes)

**Pre-designed Templates:**
- Classic Oxford - Premium Leather black
- Urban Casual - Gold Mesh
- Eco-Friendly Boot - Bamboo green

### 🔮 Future Enhancements

- [ ] 3D Shoe Visualization (Three.js)
- [ ] Payment Gateway Integration (UPI, Cards, Cash)
- [ ] Backend API (Node.js + MongoDB)
- [ ] Email Notifications
- [ ] Admin Dashboard for Artisans
- [ ] Customer Reviews & Ratings
- [ ] Wishlist Feature
- [ ] Size Recommendation Quiz
- [ ] Live Chat Support
- [ ] Mobile App Version
- [ ] AR Try-on Feature
- [ ] Subscription Box Service

### 📱 Responsive Design

Fully responsive across:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

### ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Contrast-friendly color scheme
- Focus states on interactive elements

### 📝 Notes for Development

1. **3D Preview** - Currently shows emoji placeholder. Ready for Three.js integration in `ShoePreview3D.tsx`
2. **Payment** - UI ready, needs backend integration
3. **Progress Photos** - Placeholder image sections, ready for file upload
4. **Images** - Black open spaces as requested, ready for your brand assets
5. **Local Storage** - Perfect for MVP, upgrade to backend when ready

### 🤝 Contributing

When adding features:
1. Follow the existing component structure
2. Use TypeScript interfaces for type safety
3. Update types in `src/types/shoe.ts`
4. Use Tailwind classes for styling
5. Test on mobile and desktop

### 📄 License

All rights reserved © 2024 AKAR | THE ARTISAN LAB

---

**Ready to launch your bespoke shoe empire!** 🚀

For questions or support: tavisharun29@gmail.com
