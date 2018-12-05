import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, isPrimary }) => (
  <span>
    <button className={`${styles.button} ${isPrimary && styles.primary}`}>{children}</button>
  </span>
);

export default Button;
