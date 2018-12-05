import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button')
  .add('default', () => (
    <Button>Hello World</Button>
  ))
  .add('primary', () => (
    <Button isPrimary>Hello World</Button>
  ));
  