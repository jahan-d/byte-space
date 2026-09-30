import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/landing/HeroSection';
import PartnersBar from '../components/landing/PartnersBar';
import DiscoverSection from '../components/landing/DiscoverSection';
import LearningPaths from '../components/landing/LearningPaths';
import CreatorSpotlight from '../components/landing/CreatorSpotlight';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/common/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleHeroSearch = (term) => {
    setSearchQuery(term);
    // Smooth scroll down to the courses section
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      <Navbar cartCount={2} />
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
