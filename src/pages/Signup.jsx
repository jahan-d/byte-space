import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthLayout from '../components/auth/AuthLayout';
import styles from './AuthForm.module.css';

export default function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created successfully! Welcome to ByteSpace.`);
    navigate('/');
  };

  return (
    <AuthLayout
      title="Sign up and come in"
      subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <div className={styles.header}>
        <span className={styles.categoryLabel}>Create an Account</span>
        <h2 className={styles.title}>Welcome to ByteSpace</h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Full Name</label>
          <input
            type="text"
            required
            placeholder="Jamie Davis"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={styles.input}
          />
        </div>

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
        Already have an account?{' '}
        <Link to="/login" className={styles.switchLink}>
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
