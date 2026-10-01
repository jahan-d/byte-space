import React from 'react';
import { Link } from 'react-router';
import { FiStar, FiBarChart2 } from 'react-icons/fi';
import styles from './AuthLayout.module.css';

export default function AuthLayout({
  title,
  subtitle,
  children
}) {
  return (
    <div className={styles.authWrapper}>
      {/* Grid overlay matching Figma */}
      <div className={styles.gridOverlay}></div>

      {/* Top Left Lime 'b' Logo */}
      <div className={styles.topBar}>
        <Link to="/" className={styles.brandLogo}>
          <span className={styles.logoBadge}>b</span>
        </Link>
      </div>

      <div className={`container ${styles.authContainer}`}>
        {/* Left Column: Heading, Subtitle & Floating Mini Course Cards */}
        <div className={styles.leftCol}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>

          {/* Floating Course Cards Stage */}
          <div className={styles.cardsStage}>
            {/* Lime Donut 3D */}
            <div className={styles.shapeDonut}></div>

            {/* White/Yellow Triangle Polyhedron */}
            <div className={styles.shapeTriangle}></div>

            {/* White Squiggle */}
            <div className={styles.shapeSquiggle}></div>

            {/* Back Card: Build Digital Asset */}
            <div className={`${styles.miniCard} ${styles.backCard}`}>
              <div className={styles.miniThumbnail}>
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                  alt="Build Digital Asset"
                />
                <span className={styles.miniPill}>17 Lessons</span>
              </div>
              <div className={styles.miniCardBody}>
                <h4 className={styles.miniTitle}>Build Digital Asset</h4>
                <p className={styles.miniAuthor}>by purepearl studio</p>
                <div className={styles.miniLevel}>
                  <FiBarChart2 /> Beginner
                </div>
                <div className={styles.miniPrice}>
                  <strong>$25</strong>/lifetime
                </div>
              </div>
            </div>

            {/* Front Card: the Power of Big Data */}
            <div className={`${styles.miniCard} ${styles.frontCard}`}>
              <div className={styles.miniThumbnail}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                  alt="the Power of Big Data"
                />
                <div className={styles.miniOverlayTags}>
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                  <span>59 Comments</span>
                </div>
              </div>
              <div className={styles.miniCardBody}>
                <div className={styles.miniTitleRow}>
                  <h4 className={styles.miniTitle}>the Power of Big Data</h4>
                  <div className={styles.miniRating}>
                    4.5 <FiStar className={styles.starIcon} />
                  </div>
                </div>
                <p className={styles.miniAuthor}>by purepearl studio</p>
                <div className={styles.miniLevelRow}>
                  <span className={styles.miniLevel}>
                    <FiBarChart2 /> Beginner
                  </span>
                  <div className={styles.miniAvatarRow}>
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&q=80" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&q=80" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&q=80" alt="Student" />
                    <span className={styles.miniAvatarPlus}>26+</span>
                  </div>
                </div>
                <div className={styles.miniPrice}>
                  <strong>$25</strong>/lifetime
                </div>
              </div>
            </div>

            {/* Happy Students Floating Badge */}
            <div className={styles.happyBadge}>
              <div className={styles.happyHeader}>
                <span className={styles.happyTitle}>Happy Students</span>
                <span className={styles.happyRating}>
                  4.5 (240) <FiStar className={styles.starIcon} />
                </span>
              </div>
              <div className={styles.happyAvatars}>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=40&q=80" alt="Student" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&q=80" alt="Student" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&q=80" alt="Student" />
                <span className={styles.happyPlus}>2K+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className={styles.rightCol}>
          <div className={styles.formCard}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
