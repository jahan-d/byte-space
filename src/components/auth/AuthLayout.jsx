import React from 'react';
import { Link } from 'react-router';
import { FiStar, FiCheck, FiArrowLeft } from 'react-icons/fi';
import styles from './AuthLayout.module.css';

export default function AuthLayout({
  title,
  subtitle,
  children
}) {
  return (
    <div className={styles.authWrapper}>
      {/* Back to Home Link */}
      <Link to="/" className={styles.backHomeBtn}>
        <FiArrowLeft /> Back to ByteSpace
      </Link>

      <div className={styles.authContainer}>
        {/* Left Side: Branding, Features & Social Proof */}
        <div className={styles.leftCol}>
          <Link to="/" className={styles.brandLogo}>
            <span className={styles.logoBadge}>b</span>
            <span className={styles.logoText}>ByteSpace</span>
          </Link>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>

            <ul className={styles.perksList}>
              <li className={styles.perkItem}>
                <span className={styles.perkIcon}><FiCheck /></span>
                <span>Access 1,200+ on-demand industry courses</span>
              </li>
              <li className={styles.perkItem}>
                <span className={styles.perkIcon}><FiCheck /></span>
                <span>Learn directly from top creators and mentors</span>
              </li>
              <li className={styles.perkItem}>
                <span className={styles.perkIcon}><FiCheck /></span>
                <span>Certificates of completion & portfolio reviews</span>
              </li>
            </ul>

            {/* Testimonial Quote */}
            <div className={styles.floatingPreviewCard}>
              <div className={styles.previewStars}>
                <FiStar className={styles.star} />
                <FiStar className={styles.star} />
                <FiStar className={styles.star} />
                <FiStar className={styles.star} />
                <FiStar className={styles.star} />
              </div>
              <p className={styles.previewQuote}>
                "ByteSpace helped me transition into a high-paying product design role within 4 months."
              </p>
              <div className={styles.previewAuthor}>
                <span className={styles.authorName}>Alex Morgan</span>
                <span className={styles.authorRole}>Product Designer at Meta</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form Card */}
        <div className={styles.rightCol}>
          <div className={styles.formCard}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
