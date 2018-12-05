import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from './Box';

storiesOf('Box')
  .add('default', () => (
    <Box />
  ))
  .add('recommended', () => (
    <Box isRecommended />
  ));
  