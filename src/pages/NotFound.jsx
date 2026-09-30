import React from 'react';
import { Link } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={`container ${styles.content}`}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.errorTitle}>Oops! Page Not Found</h1>
        <p className={styles.errorText}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className={styles.homeBtn}>
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
