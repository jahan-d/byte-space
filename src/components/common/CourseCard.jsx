import React from 'react';
import { FiStar, FiClock, FiBookOpen, FiMessageSquare, FiBookmark } from 'react-icons/fi';
import styles from './CourseCard.module.css';

export default function CourseCard({ course }) {
  const {
    title,
    author,
    rating,
    reviewCount,
    level,
    price,
    priceLabel = 'lifetime',
    lessons,
    duration,
    comments,
    enrolledCount,
    thumbnail,
    badge
  } = course;

  return (
    <div className={styles.card}>
      {/* Thumbnail with overlay tags */}
      <div className={styles.thumbnailContainer}>
        <img src={thumbnail} alt={title} className={styles.thumbnail} loading="lazy" />
        {badge && <span className={styles.badgeRibbon}>{badge}</span>}
        <button className={styles.bookmarkBtn} aria-label="Bookmark course">
          <FiBookmark />
        </button>

        {/* Floating Meta Pills overlay */}
        <div className={styles.thumbnailMeta}>
          <span className={styles.metaChip}>
            <FiBookOpen className={styles.metaIcon} /> {lessons} Lessons
          </span>
          <span className={styles.metaChip}>
            <FiClock className={styles.metaIcon} /> {duration}
          </span>
          {comments && (
            <span className={styles.metaChip}>
              <FiMessageSquare className={styles.metaIcon} /> {comments}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className={styles.cardBody}>
        {/* Author & Level */}
        <div className={styles.metaRow}>
          <span className={styles.author}>by {author}</span>
          <span className={`${styles.levelBadge} ${styles[level?.toLowerCase().replace(/\s+/g, '')] || ''}`}>
            {level}
          </span>
        </div>

        {/* Title */}
        <h3 className={styles.courseTitle}>{title}</h3>

        {/* Rating and Enrolled */}
        <div className={styles.ratingRow}>
          <div className={styles.ratingBox}>
            <FiStar className={styles.starIcon} />
            <span className={styles.ratingNumber}>{rating}</span>
            {reviewCount && <span className={styles.reviewNumber}>({reviewCount})</span>}
          </div>

          <div className={styles.studentsStack}>
            <div className={styles.avatarGroup}>
              <span className={`${styles.miniAvatar} ${styles.av1}`}></span>
              <span className={`${styles.miniAvatar} ${styles.av2}`}></span>
              <span className={`${styles.miniAvatar} ${styles.av3}`}></span>
            </div>
            <span className={styles.enrolledLabel}>{enrolledCount} enrolled</span>
          </div>
        </div>

        <div className={styles.cardDivider}></div>

        {/* Card Footer: Price & Enroll */}
        <div className={styles.cardFooter}>
          <div className={styles.priceContainer}>
            <span className={styles.currency}>$</span>
            <span className={styles.price}>{price}</span>
            <span className={styles.priceLabel}>/{priceLabel}</span>
          </div>

          <button className={styles.enrollBtn}>
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
