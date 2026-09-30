import React from 'react';
import { FiStar, FiBarChart2 } from 'react-icons/fi';
import styles from './CourseCard.module.css';

export default function CourseCard({ course }) {
  const {
    title,
    author = 'purepearl studio',
    rating = 4.5,
    level = 'Beginner',
    price = 25,
    priceLabel = 'lifetime',
    lessons = 17,
    duration = '2 hours 16 mins',
    comments = 59,
    enrolledCount = '26+',
    thumbnail
  } = course;

  return (
    <div className={styles.card}>
      {/* Thumbnail with 3 overlay pills matching Figma */}
      <div className={styles.thumbnailContainer}>
        <img src={thumbnail} alt={title} className={styles.thumbnail} loading="lazy" />
        <div className={styles.metaPillsOverlay}>
          <span className={styles.metaPill}>{lessons} Lessons</span>
          <span className={styles.metaPill}>{duration}</span>
          <span className={styles.metaPill}>{comments} Comments</span>
        </div>
      </div>

      {/* Card Content */}
      <div className={styles.cardBody}>
        {/* Title and Rating */}
        <div className={styles.titleRow}>
          <h3 className={styles.courseTitle}>{title}</h3>
          <div className={styles.ratingBox}>
            <span className={styles.ratingNumber}>{rating}</span>
            <FiStar className={styles.starIcon} />
          </div>
        </div>

        {/* Author */}
        <p className={styles.author}>by {author}</p>

        {/* Level Tag */}
        <div className={styles.levelRow}>
          <span className={styles.levelBadge}>
            <FiBarChart2 className={styles.levelIcon} /> {level}
          </span>

          {/* Avatar stack with lime 26+ counter */}
          <div className={styles.avatarStack}>
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
            <div className={styles.avatarPlus}>{enrolledCount}</div>
          </div>
        </div>

        {/* Price Row */}
        <div className={styles.priceRow}>
          <span className={styles.priceVal}>${price}</span>
          <span className={styles.pricePeriod}>/{priceLabel}</span>
        </div>
      </div>
    </div>
  );
}
