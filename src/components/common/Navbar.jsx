import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

export default function Navbar({ cartCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbarContainer}`}>
        {/* Brand Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoBadge}>b</span>
          <span className={styles.logoText}>ByteSpace</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.navLinks}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
            }
          >
            Courses
          </NavLink>
          <a href="/#creators" className={styles.navLink}>
            Creators
          </a>
        </nav>

        {/* Right Actions */}
        <div className={styles.navActions}>
          <Link to="/login" className={styles.signInLink}>
            Sign In
          </Link>
          <Link to="/signup" className={styles.joinUsBtn}>
            Join Us
          </Link>
          <button className={styles.cartBtn} aria-label="Shopping Cart">
            <FiShoppingCart className={styles.cartIcon} />
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className={styles.mobileToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={styles.mobileNavLink}
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className={styles.mobileNavLink}
          >
            Courses
          </NavLink>
          <a
            href="/#creators"
            onClick={() => setMobileMenuOpen(false)}
            className={styles.mobileNavLink}
          >
            Creators
          </a>
          <div className={styles.mobileAuthRow}>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileSignIn}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.joinUsBtn}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
