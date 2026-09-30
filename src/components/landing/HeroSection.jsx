import React, { useState } from 'react';
import { FiSearch, FiStar } from 'react-icons/fi';
import styles from './HeroSection.module.css';

export default function HeroSection({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <section className={styles.heroWrapper}>
      {/* Grid Pattern Background */}
      <div className={styles.gridOverlay}></div>

      <div className={`container ${styles.heroContainer}`}>
        {/* Left Column: Text & Search */}
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Get Access to Hundreds <br />
            Courses Available
          </h1>

          <p className={styles.heroSubtitle}>
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form className={styles.searchBarForm} onSubmit={handleSearchSubmit}>
            <div className={styles.searchIconWrapper}>
              <FiSearch className={styles.searchIcon} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Course, topic, creator"
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </form>
        </div>

        {/* Right Column: Student Image, Lime Blob, Badges, 3D Shapes */}
        <div className={styles.heroRight}>
          {/* Lime Green Organic Backdrop */}
          <div className={styles.limeBlob}></div>

          {/* 3D Shapes Matching Figma */}
          {/* White 3D Donut Ring */}
          <div className={styles.shapeDonut}>
            <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
              <circle cx="55" cy="55" r="42" stroke="white" strokeWidth="22" strokeLinecap="round" />
            </svg>
          </div>

          {/* White 3D Triangle Polyhedron */}
          <div className={styles.shapePolyhedron}>
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
              <polygon points="45,5 85,75 5,75" fill="#E2E8F0" />
              <polygon points="45,5 85,75 50,85" fill="#CBD5E1" />
              <polygon points="45,5 5,75 50,85" fill="#F8FAFC" />
            </svg>
          </div>

          {/* White Zigzag Squiggle */}
          <div className={styles.shapeSquiggle}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path
                d="M10,20 Q30,10 40,30 T70,40"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Lime 3D Cylinder / Pill Shape */}
          <div className={styles.shapeLimeCylinder}></div>

          {/* Main Student Cutout Image */}
          <div className={styles.studentImageContainer}>
            <img
              src="/images/hero-student.jpg"
              alt="ByteSpace Student Learning"
              className={styles.studentImage}
            />
          </div>

          {/* Floating Badge 1: UI/UX Design */}
          <div className={`${styles.floatingBadge} ${styles.badgeUiUx}`}>
            <span className={styles.badgeTitle}>UI/UX Design</span>
            <span className={styles.badgeSub}>200 Courses • 1000+ Students</span>
          </div>

          {/* Floating Badge 2: Learning Progress 55% */}
          <div className={`${styles.floatingBadge} ${styles.badgeProgress}`}>
            <span className={styles.progressLabel}>Learning Progress</span>
            <span className={styles.progressPercent}>55%</span>
            <div className={styles.progressBarTrack}>
              <div className={styles.progressBarFill}></div>
            </div>
          </div>

          {/* Floating Badge 3: Happy Students */}
          <div className={`${styles.floatingBadge} ${styles.badgeHappyStudents}`}>
            <span className={styles.happyTitle}>Happy Students</span>
            <div className={styles.starRow}>
              <span className={styles.starRating}>4.5</span>
              <span className={styles.starReviews}>[240]</span>
              <FiStar className={styles.starIcon} />
            </div>
            <div className={styles.avatarRow}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80"
                alt="Student"
                className={styles.avatar}
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80"
                alt="Student"
                className={styles.avatar}
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80"
                alt="Student"
                className={styles.avatar}
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&q=80"
                alt="Student"
                className={styles.avatar}
              />
              <div className={styles.avatarPlus}>2K+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
