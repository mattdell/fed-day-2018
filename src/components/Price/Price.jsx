import React from 'react';
import styles from './Price.module.css';

const Price = ({ amount }) => (
  <span>
    <span>£ </span>
    <span className={styles.amount}>{amount}</span>
    <span className={styles.timePeriod}>/ mo</span>
  </span>
)

export default Price;