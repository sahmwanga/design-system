import React from 'react';
import Tabs from './Tabs';

import { select, array, withKnobs } from '@storybook/addon-knobs';

const label = 'Direction';
const options = {
  horizontal: 'horizontal',
  vertical: 'vertical',
};
const defaultValue = [
  { url: '/', title: 'Home', leadingIcon: '', trailingIcon: '' },
  { url: '/', title: 'About', leadingIcon: '', trailingIcon: '' },
  { url: '/', title: 'Contact', leadingIcon: '', trailingIcon: '' },
  { url: '/', title: 'New', leadingIcon: '', trailingIcon: '' },
];
const defaultValueWithIcon = [
  { url: '/', title: 'Home', leadingIcon: 'user', trailingIcon: '' },
  { url: '/', title: 'About', leadingIcon: 'user', trailingIcon: '' },
  { url: '/', title: 'Contact', leadingIcon: 'sdf', trailingIcon: '' },
  { url: '/', title: 'New', leadingIcon: 'sdf', trailingIcon: '' },
];

const groupId = 'Direction';

const TabHomeComponent = () => <div>TabHomeComponent page</div>;
const TabAboutComponent = () => <div>TabAbountComponent page</div>;
const TabContactComponent = () => <div>TabContactComponent page</div>;
const TabNewComponent = () => <div>TabContactComponent page</div>;

export const BasicTabs = () => (
  <Tabs
    direction={select(label, options, 'horizontal', groupId)}
    items={array(label, defaultValue)}
    components={[
      TabHomeComponent,
      TabNewComponent,
      TabAboutComponent,
      TabContactComponent,
    ]}
  />
);
export const TabsWithIcon = () => (
  <Tabs
    direction={select(label, options, 'horizontal', groupId)}
    items={array(label, defaultValueWithIcon)}
    components={[
      TabHomeComponent,
      TabNewComponent,
      TabAboutComponent,
      TabContactComponent,
    ]}
  />
);

export default {
  component: Tabs,
  title: 'link/Tabs',
  decorators: [withKnobs],
};
