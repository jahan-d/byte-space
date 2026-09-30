import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  FiMail, 
  FiArrowRight, 
  FiTwitter, 
  FiLinkedin, 
  FiYoutube, 
  FiInstagram, 
  FiGithub,
  FiCheck
} from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className={styles.footerWrapper}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Top Section: Newsletter & Columns */}
        <div className={styles.footerTop}>
          {/* Brand & Newsletter Column */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoBadge}>b</span>
              <span className={styles.logoText}>ByteSpace</span>
            </Link>

            <p className={styles.brandDesc}>
              Stay up to date with our latest courses, free workshops, and special discounts by joining our weekly newsletter.
            </p>

            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <div className={styles.inputWrapper}>
                <FiMail className={styles.mailIcon} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailInput}
                  required
                />
              </div>
              <button type="submit" className={styles.subscribeBtn}>
                {subscribed ? <FiCheck /> : <FiArrowRight />}
              </button>
            </form>
            {subscribed && (
              <p className={styles.successMessage}>🎉 Thanks for subscribing to ByteSpace!</p>
            )}

            <p className={styles.privacyNote}>
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>

          {/* Links Columns */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Featured Courses</h4>
            <ul className={styles.linksList}>
              <li><a href="#courses">Learn Figma from Basic</a></li>
              <li><a href="#courses">Build Digital Asset & 3D Web</a></li>
              <li><a href="#courses">The Power of Big Data</a></li>
              <li><a href="#courses">Design Systems Masterclass</a></li>
              <li><a href="#courses">Full-Stack Web Bootcamp</a></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Categories</h4>
            <ul className={styles.linksList}>
              <li><a href="#courses">UI/UX Design</a></li>
              <li><a href="#courses">Development & Coding</a></li>
              <li><a href="#courses">IT & Cloud Computing</a></li>
              <li><a href="#courses">Business & Startup</a></li>
              <li><a href="#courses">Digital Marketing</a></li>
              <li><a href="#courses">Photography & Film</a></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Platform</h4>
            <ul className={styles.linksList}>
              <li><a href="#creators">Become a Creator</a></li>
              <li><Link to="/signup">Student Registration</Link></li>
              <li><Link to="/login">Sign In</Link></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Help Center & FAQ</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.footerDivider}></div>

        {/* Bottom Bar: Copyright & Social */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2026 ByteSpace. Built for the modern creator & learner.
          </p>

          <div className={styles.legalLinks}>
            <a href="#">Terms of Service</a>
            <span className={styles.dot}>•</span>
            <a href="#">Privacy Policy</a>
            <span className={styles.dot}>•</span>
            <a href="#">Cookie Settings</a>
          </div>

          <div className={styles.socialIcons}>
            <a href="#" aria-label="Twitter" className={styles.socialLink}><FiTwitter /></a>
            <a href="#" aria-label="LinkedIn" className={styles.socialLink}><FiLinkedin /></a>
            <a href="#" aria-label="YouTube" className={styles.socialLink}><FiYoutube /></a>
            <a href="#" aria-label="Instagram" className={styles.socialLink}><FiInstagram /></a>
            <a href="#" aria-label="GitHub" className={styles.socialLink}><FiGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
