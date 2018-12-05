import React from 'react';
import styles from './Box.module.css';
import Button from '../Button/Button';
import Price from '../Price/Price';
import Recommended from '../Recommended/Recommended';

const Box = ({ isRecommended }) => (
  <div className={`${styles.box} ${isRecommended && styles.isRecommended}`}>
    { isRecommended && <Recommended /> }
    <h4>Small business</h4>
    <Price amount={200} />
    <ul>
      <li>Aliquet diam gravida</li>
      <li>lihasellus eu condimentum</li>
      <li>Metus non venenatis turuis</li>
    </ul>
    <Button isPrimary={isRecommended}>Sign up today</Button>
  </div>
);

export default Box;
