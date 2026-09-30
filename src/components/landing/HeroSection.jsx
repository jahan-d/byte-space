import React, { useState } from 'react';
import { FiSearch, FiLayers, FiTrendingUp, FiStar } from 'react-icons/fi';
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
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Column: Text & Search */}
        <div className={styles.heroLeft}>
          <div className={styles.taglineBadge}>
            <span className={styles.tagDot}></span>
            <span>Over 1,200+ Video Courses</span>
          </div>

          <h1 className={styles.heroTitle}>
            Get Access to Hundreds <br className={styles.desktopBr} />
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

          {/* Quick Category Hints */}
          <div className={styles.quickTags}>
            <span className={styles.quickTagsLabel}>Popular:</span>
            <span className={styles.quickTag}>UI/UX Design</span>
            <span className={styles.quickTag}>Animation</span>
            <span className={styles.quickTag}>Web Dev</span>
            <span className={styles.quickTag}>Marketing</span>
          </div>
        </div>

        {/* Right Column: Student Image & Floating Cards */}
        <div className={styles.heroRight}>
          {/* Lime Green Blob Backdrop */}
          <div className={styles.limeBlob}></div>

          {/* Main Student Cutout Image */}
          <div className={styles.studentImageContainer}>
            <img
              src="/images/hero-student.jpg"
              alt="ByteSpace Student Learning"
              className={styles.studentImage}
            />
          </div>

          {/* Floating Badge 1: UI/UX Design */}
          <div className={`${styles.floatingBadge} ${styles.badgeUiUx} animate-float`}>
            <div className={styles.badgeIconBoxUiUx}>
              <FiLayers size={20} />
            </div>
            <div className={styles.badgeText}>
              <span className={styles.badgeTitle}>UI/UX Design</span>
              <span className={styles.badgeSub}>200 Courses • 1000+ Students</span>
            </div>
          </div>

          {/* Floating Badge 2: Learning Progress */}
          <div className={`${styles.floatingBadge} ${styles.badgeProgress}`}>
            <div className={styles.progressHeader}>
              <div className={styles.badgeIconBoxProgress}>
                <FiTrendingUp size={18} />
              </div>
              <div>
                <span className={styles.badgeTitle}>Learning Progress</span>
                <span className={styles.badgeSub}>Keep going!</span>
              </div>
              <span className={styles.progressPercent}>55%</span>
            </div>
            <div className={styles.progressBarTrack}>
              <div className={styles.progressBarFill} style={{ width: '55%' }}></div>
            </div>
          </div>

          {/* Floating Badge 3: Happy Students */}
          <div className={`${styles.floatingBadge} ${styles.badgeHappyStudents}`}>
            <div className={styles.badgeHeaderRow}>
              <span className={styles.badgeTitle}>Happy Students</span>
              <div className={styles.starRow}>
                <FiStar className={styles.starIcon} />
                <span className={styles.starValue}>4.5</span>
                <span className={styles.reviewCount}>(500)</span>
              </div>
            </div>
            <div className={styles.studentAvatars}>
              <div className={styles.avatarStack}>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Student"
                  className={styles.avatarImg}
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Student"
                  className={styles.avatarImg}
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                  alt="Student"
                  className={styles.avatarImg}
                />
                <div className={styles.avatarCount}>2K+</div>
              </div>
            </div>
          </div>

          {/* Decorative 3D Elements */}
          <div className={styles.decoDonut}></div>
          <div className={styles.decoTriangle}></div>
          <div className={styles.decoSquiggle}></div>
        </div>
      </div>
    </section>
  );
}
