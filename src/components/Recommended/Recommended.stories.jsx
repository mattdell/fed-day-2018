import React from 'react';
import { storiesOf } from '@storybook/react';
import Recommended from './Recommended';

storiesOf('Recommended')
  .add('default', () => (
    <Recommended>Hello World</Recommended>
  ));
  