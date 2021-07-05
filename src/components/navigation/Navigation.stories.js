import React from 'react';
import Navigation, { NavItem } from './Navigation';
import { select, array, withKnobs } from '@storybook/addon-knobs';

const label = 'Direction';
const options = {
  horizontal: 'horizontal',
  vertical: 'vertical',
};
const defaultValue = [
  { url: '/', title: 'Home', leadingIcon: 'user', trailingIcon: '' },
  { url: '/', title: 'About', leadingIcon: 'user', trailingIcon: '' },
  { url: '/', title: 'Contact', leadingIcon: '', trailingIcon: '' },
];
const groupId = 'Direction';

export const navItem = () => (
  <NavItem
    title="Menu"
    url="/Menu"
    leadingIcon="user"
    style={{
      border: '1px solid #ededed',
    }}
  />
);

export const horizontalNavigation = () => (
  <Navigation
    direction={select(label, options, 'horizontal', groupId)}
    items={array(label, defaultValue)}
  />
);

export const verticalNavigation = () => (
  <Navigation
    direction={select(label, options, 'vertical', groupId)}
    items={array(label, defaultValue, groupId)}
  />
);

export const TabsBar = () => (
  <Navigation
    direction={select(label, options, 'horizontal', groupId)}
    items={array(label, defaultValue, groupId)}
  />
);

export default {
  component: Navigation,
  title: 'link/Navigation',
  decorators: [withKnobs],
};
