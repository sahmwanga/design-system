import React from 'react';
import Footer from './Footer';
import { array, withKnobs } from '@storybook/addon-knobs';

const label = 'Menus';

const defaultValue = [
  {
    title: 'Menu 1',
    items: [{ url: '/', title: 'Home' }],
  },
  {
    title: 'Menu 2',
    items: [
      { url: '/', title: 'item 2' },
      { url: '/', title: 'item 2' },
    ],
  },
];

const groupId = 'content';

export const standardFooter = () => (
  <Footer menus={array(label, defaultValue, groupId)} />
);

export default {
  component: Footer,
  decorators: [withKnobs],
  title: 'components/Footer',
};
