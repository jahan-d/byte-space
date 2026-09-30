import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import AuthLayout from '../components/auth/AuthLayout';
import styles from './AuthForm.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    alert(`Welcome back to ByteSpace, ${email}!`);
    navigate('/');
  };

  return (
    <AuthLayout
      title="Sign in with ease"
      subtitle="Unlock hundreds of top-tier courses, connect with passionate creators, and fast-track your creative career."
    >
      <div className={styles.header}>
        <span className={styles.badge}>Sign In</span>
        <h2 className={styles.title}>Welcome Back</h2>
        <p className={styles.subtitle}>Enter your details below to access your account</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email Address</label>
          <div className={styles.inputWrapper}>
            <FiMail className={styles.inputIcon} />
            <input
              type="email"
              required
              placeholder="e.g. jahan@bytespace.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <div className={styles.inputWrapper}>
            <FiLock className={styles.inputIcon} />
            <input
              type={showPassword ? 'text' : 'password'}
              required
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.inputIcon}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <div className={styles.rowBetween}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <a href="#" className={styles.forgotLink}>Forgot password?</a>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Sign In
        </button>
      </form>

      <div className={styles.divider}>
        <span className={styles.dividerSpan}>or continue with</span>
      </div>

      <div className={styles.socialButtonsRow}>
        <button type="button" className={styles.socialBtn}>
          <FcGoogle className={styles.socialIcon} />
          <span>Google</span>
        </button>
        <button type="button" className={styles.socialBtn}>
          <FaApple className={styles.socialIcon} />
          <span>Apple</span>
        </button>
      </div>

      <p className={styles.footerSwitch}>
        Don't have an account?{' '}
        <Link to="/signup" className={styles.switchLink}>
          Register here
        </Link>
      </p>
    </AuthLayout>
  );
}
