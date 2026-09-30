import React from 'react';
import styles from './PartnersBar.module.css';

export default function PartnersBar() {
  return (
    <section className={styles.partnersSection}>
      <div className={`container ${styles.partnersContainer}`}>
        <p className={styles.partnersText}>Trusted by 500+ leading universities & tech teams</p>
        <div className={styles.logosRow}>
          {/* Logo 1 */}
          <div className={styles.logoItem}>
            <svg width="130" height="34" viewBox="0 0 130 34" fill="none">
              <rect x="2" y="6" width="22" height="22" rx="6" fill="#0052FF" />
              <path d="M8 17L13 22L20 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="32" y="22" fill="#1E293B" fontWeight="700" fontSize="16" fontFamily="Inter">logoipsum</text>
            </svg>
          </div>

          {/* Logo 2 */}
          <div className={styles.logoItem}>
            <svg width="130" height="34" viewBox="0 0 130 34" fill="none">
              <circle cx="13" cy="17" r="10" fill="#0F172A" />
              <circle cx="13" cy="17" r="5" fill="#D2FF00" />
              <text x="32" y="22" fill="#1E293B" fontWeight="700" fontSize="16" fontFamily="Inter">logoipsum</text>
            </svg>
          </div>

          {/* Logo 3 */}
          <div className={styles.logoItem}>
            <svg width="130" height="34" viewBox="0 0 130 34" fill="none">
              <polygon points="13,6 23,26 3,26" fill="#6366F1" />
              <text x="32" y="22" fill="#1E293B" fontWeight="700" fontSize="16" fontFamily="Inter">logoipsum</text>
            </svg>
          </div>

          {/* Logo 4 */}
          <div className={styles.logoItem}>
            <svg width="130" height="34" viewBox="0 0 130 34" fill="none">
              <rect x="4" y="8" width="10" height="18" rx="3" fill="#0052FF" />
              <rect x="16" y="12" width="10" height="14" rx="3" fill="#D2FF00" />
              <text x="32" y="22" fill="#1E293B" fontWeight="700" fontSize="16" fontFamily="Inter">logoipsum</text>
            </svg>
          </div>

          {/* Logo 5 */}
          <div className={styles.logoItem}>
            <svg width="130" height="34" viewBox="0 0 130 34" fill="none">
              <path d="M4 17C4 11 9 6 15 6C21 6 24 10 24 10" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
              <circle cx="15" cy="17" r="4" fill="#0052FF" />
              <text x="32" y="22" fill="#1E293B" fontWeight="700" fontSize="16" fontFamily="Inter">logoipsum</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
