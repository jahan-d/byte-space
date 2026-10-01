import React from 'react';
import { 
  FiLayout, 
  FiCode, 
  FiServer, 
  FiBriefcase, 
  FiTrendingUp, 
  FiCamera,
  FiArrowRight 
} from 'react-icons/fi';
import styles from './LearningPaths.module.css';

const pathIcons = {
  design: <FiLayout size={26} />,
  development: <FiCode size={26} />,
  'it-software': <FiServer size={26} />,
  business: <FiBriefcase size={26} />,
  marketing: <FiTrendingUp size={26} />,
  photography: <FiCamera size={26} />
};

import { learningPaths } from '../../data/courses';

export default function LearningPaths() {
  return (
    <section className={styles.pathsSection}>
      <div className={`container ${styles.pathsContainer}`}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>Curated Roadmaps</span>
          <h2 className="section-title">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="section-subtitle">
            Choose from curated roadmaps designed by industry professionals to take you from complete beginner to career-ready professional.
          </p>
        </div>

        <div className={styles.pathsGrid}>
          {learningPaths.map((path) => (
            <div key={path.id} className={styles.pathCard}>
              <div 
                className={styles.iconCircle}
                style={{ backgroundColor: path.color, color: path.iconColor }}
              >
                {pathIcons[path.id]}
              </div>

              <div className={styles.pathInfo}>
                <h3 className={styles.pathTitle}>{path.title}</h3>
                <span className={styles.pathCount}>{path.coursesCount}</span>
              </div>

              <div className={styles.arrowBox}>
                <FiArrowRight className={styles.arrowIcon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
