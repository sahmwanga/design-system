import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

export const basicLink = () => (
  <a href="#">{text('Link Text', 'Basic Link')}</a>
);

export default {
  title: 'components/link',
  decorators: [withKnobs],
};
