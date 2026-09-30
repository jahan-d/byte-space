import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import AuthLayout from '../components/auth/AuthLayout';
import styles from './AuthForm.module.css';

export default function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert('Please agree to the Terms & Privacy Policy to continue.');
      return;
    }
    alert(`Account created successfully! Welcome to ByteSpace, ${fullName}.`);
    navigate('/');
  };

  return (
    <AuthLayout
      title="Sign up and come in"
      subtitle="Join over 100,000+ students and creators accelerating their creative and technical journey today."
    >
      <div className={styles.header}>
        <span className={styles.badge}>Create an Account</span>
        <h2 className={styles.title}>Welcome to ByteSpace</h2>
        <p className={styles.subtitle}>Fill in your details below to get started</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Full Name</label>
          <div className={styles.inputWrapper}>
            <FiUser className={styles.inputIcon} />
            <input
              type="text"
              required
              placeholder="e.g. Nusrat Jahan"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

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
              placeholder="At least 8 characters"
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
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
            />
            <span>I agree to ByteSpace Terms & Privacy Policy</span>
          </label>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Create Account
        </button>
      </form>

      <div className={styles.divider}>
        <span className={styles.dividerSpan}>or sign up with</span>
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
        Already have an account?{' '}
        <Link to="/login" className={styles.switchLink}>
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
