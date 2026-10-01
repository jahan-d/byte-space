import React from 'react';
import { FiUsers, FiBook, FiStar, FiArrowUpRight } from 'react-icons/fi';
import { creators } from '../../data/courses';
import styles from './CreatorSpotlight.module.css';

export default function CreatorSpotlight() {
  return (
    <section id="creators" className={styles.creatorsSection}>
      <div className={`container ${styles.creatorsContainer}`}>
        {/* Section Header */}
        <div className={styles.headerArea}>
          <div className={styles.taglineBadge}>
            <span className={styles.tagDot}></span>
            <span>World-Class Instructors</span>
          </div>
          <h2 className={styles.sectionTitleWhite}>
            Learn from the Best Creators & Industry Pioneers
          </h2>
          <p className={styles.sectionSubtitleLight}>
            Our instructors aren't just teachers — they are real-world practitioners, design leads, and software engineers who build tomorrow's technology.
          </p>
        </div>

        {/* Creators Grid */}
        <div className={styles.creatorsGrid}>
          {creators.map((creator) => (
            <div key={creator.id} className={styles.creatorCard}>
              {/* Creator Photo Container */}
              <div className={styles.imageWrapper}>
                <img
                  src={creator.image}
                  alt={creator.displayName}
                  className={styles.creatorImage}
                  loading="lazy"
                />
                {/* Lime Name Badge matching Figma */}
                <div className={styles.nameBadge}>
                  {creator.name}
                </div>
              </div>

              {/* Creator Info */}
              <div className={styles.creatorContent}>
                <div className={styles.nameRow}>
                  <div>
                    <h3 className={styles.displayName}>{creator.displayName}</h3>
                    <p className={styles.creatorRole}>{creator.role}</p>
                  </div>
                  <button className={styles.profileBtn} aria-label={`View ${creator.displayName}'s profile`}>
                    <FiArrowUpRight />
                  </button>
                </div>

                <p className={styles.bioText}>{creator.bio}</p>

                {/* Stats */}
                <div className={styles.statsRow}>
                  <div className={styles.statItem}>
                    <FiUsers className={styles.statIcon} />
                    <span>{creator.students}</span>
                  </div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statItem}>
                    <FiBook className={styles.statIcon} />
                    <span>{creator.courses} Courses</span>
                  </div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statItem}>
                    <FiStar className={`${styles.statIcon} ${styles.starGold}`} />
                    <span>{creator.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Become a creator CTA */}
        <div className={styles.becomeCreatorBanner}>
          <div className={styles.bannerText}>
            <h3>Unlock Your Potential as a Creator with Bytespace</h3>
            <p>Create & manage courses easily with our intuitive suite of creator tools. Reach hundreds of thousands of motivated learners worldwide.</p>
          </div>
          <button className={styles.joinCreatorBtn}>
            Become a Creator
          </button>
        </div>
      </div>
    </section>
  );
}
