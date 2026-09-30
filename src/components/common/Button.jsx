import React from 'react';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  icon = null,
  onClick,
  type = 'button',
  ...props
}) {
  const classNames = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
