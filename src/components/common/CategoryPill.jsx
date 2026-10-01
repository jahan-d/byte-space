import React from 'react';
import styles from './CategoryPill.module.css';

export default function CategoryPill({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.pill} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
