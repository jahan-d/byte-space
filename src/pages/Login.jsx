import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthLayout from '../components/auth/AuthLayout';
import styles from './AuthForm.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back to ByteSpace!`);
    navigate('/');
  };

  return (
    <AuthLayout
      title="Sign in with ease"
      subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className={styles.header}>
        <span className={styles.categoryLabel}>Sign In</span>
        <h2 className={styles.title}>Welcome Back</h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            required
            placeholder="designer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            required
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.continueBtn}>
          Continue
        </button>
      </form>

      <p className={styles.bottomSwitch}>
        Don't have an account?{' '}
        <Link to="/signup" className={styles.switchLink}>
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}
