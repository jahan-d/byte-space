import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import CartDrawer from '../components/common/CartDrawer';
import HeroSection from '../components/landing/HeroSection';
import PartnersBar from '../components/landing/PartnersBar';
import DiscoverSection from '../components/landing/DiscoverSection';
import LearningPaths from '../components/landing/LearningPaths';
import CreatorSpotlight from '../components/landing/CreatorSpotlight';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/common/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleHeroSearch = (term) => {
    setSearchQuery(term);
    // Smooth scroll down to the courses section
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="home-page">
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
      />
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
      />
      <main>
        <HeroSection onSearch={handleHeroSearch} />
        <PartnersBar />
        <DiscoverSection searchFilter={searchQuery} />
        <LearningPaths />
        <CreatorSpotlight />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
