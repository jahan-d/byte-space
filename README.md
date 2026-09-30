# ByteSpace — Online Course & Learning Platform

> A modern, responsive e-learning platform website built from Figma designs. Features a complete interactive landing page, interactive Course Details page, custom 404 page, and bonus authentication pages (Login and Signup).

🔗 **Live Demo**: [https://bytespace-sooty.vercel.app](https://bytespace-sooty.vercel.app)  
📁 **Repository**: [https://github.com/jahan-d/byte-space](https://github.com/jahan-d/byte-space)  
🌿 **Pull Request**: [View Feature Pull Request](https://github.com/jahan-d/byte-space/pull/new/feature/landing-and-auth)

---

## 🌟 Key Features

### 1. Landing Page (8 Comprehensive Sections)
- **Header & Navigation**: ByteSpace brand icon, desktop links with active page underline, action links (Sign In, Join Us, Cart with badge), and responsive mobile drawer.
- **Hero Section**: 
  - Responsive headline and subtext.
  - Interactive search bar with 1-click popular category tags.
  - Student hero portrait with signature organic lime-green blob backdrop.
  - 3 floating glassmorphism cards: **UI/UX Design**, **Learning Progress (55%)**, and **Happy Students (4.5 ⭐)** with avatar stack.
  - Floating 3D geometric accents (donut, triangle, squiggles).
- **Partner Logos Bar**: 5 SVG brand logos (`Logoipsum`) in a clean horizontal strip.
- **Discover Courses ("Discover Your Passion, Build Your Skills")**:
  - Top filter control bar (`Filter`, `Level`, `Category`, `Most relevant` sort).
  - Interactive **Category Pills** (`Featured`, `Music`, `Drawing & Painting`, `Marketing`, `Animation`, `Social Media`, `UI/UX Design`, `Creative Marketing`, `Cooking`).
  - Live category & search filtering.
  - **3×3 Responsive Course Card Grid** (9 courses) with lesson count, duration, comments chips, difficulty level badge, star ratings, enrolled avatars, and `$25/lifetime` pricing.
- **Learning Paths**: 6 roadmaps (*Design, Development, IT & Software, Business, Marketing, Photography*) with custom icons and course counters.
- **Creator Spotlight**: 4 instructor cards (*Nusrat Jahan, Tushar Sinha, Fahim Ahmed, Sharif Uddin Rifat*) with lime name badges, student counts, course counts, ratings, and "Become an Instructor" banner.
- **Testimonials**: 3 student reviews with 5-star ratings and enrolled course tags.
- **Footer**: Newsletter subscription form with interactive feedback state, course links, categories, platform links, legal terms, and social media links.

### 2. Course Details Page (`/course/:id`)
- Video hero banner with play preview overlay.
- Interactive curriculum tabs: `About`, `Lessons` (detailed breakdown), and `Reviews`.
- Course description, "Sneak Peak" visual screenshot gallery, and "Key Learning Points" checklist.
- Sticky enrollment sidebar card featuring price breakdown (`$25/lifetime`), 30-day money-back guarantee, and course perks checklist.

### 3. Bonus Auth Pages (Extra Credit)
- **Login Page (`/login`)**: Full-screen split layout on blue brand background with ByteSpace perks, testimonial quote, email & password form, Google & Apple social sign-in, and switch link to registration.
- **Signup Page (`/signup`)**: Split layout with inputs for Full Name, Email, Password, terms agreement checkbox, and switch link to login.

### 4. Custom 404 Page (`*`)
- Clean 404 error page with ByteSpace branding and quick return link to the homepage.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 19 + Vite (Fast HMR, optimized production builds)
- **Routing**: React Router v7 (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`)
- **Styling**: Pure **Vanilla CSS Modules** (No Tailwind dependency)
- **Design Tokens**: Centralized CSS Custom Properties (`variables.css`, `reset.css`, `global.css`)
- **Deployment**: Vercel with SPA client-side routing rewrites (`vercel.json`)

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/jahan-d/byte-space.git
cd byte-space

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📄 License

This project was built for the Frontend Assessment task.
