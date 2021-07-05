import React from 'react';
import Typography from './Typography';
import { text, withKnobs } from '@storybook/addon-knobs';

export const Basic = () => (
  <div>
    <Typography variant="h1">{text('Heading', 'Heading 1')}</Typography>
    <Typography variant="h2">{text('Heading', 'Heading 2')}</Typography>
    <Typography variant="h3">{text('Heading', 'Heading 3')}</Typography>
    <Typography variant="h4">{text('Heading', 'Heading 4')}</Typography>
    <Typography variant="h5">{text('Heading', 'Heading 5')}</Typography>
    <Typography variant="h6">{text('Heading', 'Heading 6')}</Typography>
  </div>
);

export default {
  component: Typography,
  title: 'components/typography',
  decorators: [withKnobs],
};
