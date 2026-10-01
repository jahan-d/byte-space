import React from 'react';
import { FiStar, FiCheckCircle } from 'react-icons/fi';
import { testimonials } from '../../data/courses';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={`container ${styles.testimonialsContainer}`}>
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>Student Feedback</span>
          <h2 className="section-title">Discover What Our Community is Saying</h2>
          <p className="section-subtitle">
            See how thousands of passionate learners, developers, and designers achieved their career goals through ByteSpace courses.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <div className={styles.starsRow}>
                {[...Array(t.rating)].map((_, i) => (
                  <FiStar key={i} className={styles.starIcon} />
                ))}
              </div>

              <p className={styles.quoteText}>"{t.quote}"</p>

              <div className={styles.courseTag}>
                <FiCheckCircle className={styles.checkIcon} />
                <span>Enrolled in: {t.course}</span>
              </div>

              <div className={styles.authorRow}>
                <img src={t.avatar} alt={t.name} className={styles.authorAvatar} />
                <div>
                  <h4 className={styles.authorName}>{t.name}</h4>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
