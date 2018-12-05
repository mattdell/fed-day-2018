import React from 'react';
import { storiesOf } from '@storybook/react';
import Price from './Price';

storiesOf('Price')
  .add('default', () => (
    <Price amount={200}/>
  ));
  