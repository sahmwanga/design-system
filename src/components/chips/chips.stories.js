import React from 'react';
import Chips from './chips';
import { text, select, withKnobs } from '@storybook/addon-knobs';
import Avatar from '../avatar/Avatar';

const label = 'variant';
const options = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};
const defaultValue = 'primary';
const groupId = 'Colors';

export const basicChips = () => (
  <Chips
    color={select(label, options, defaultValue, groupId)}
    label={text('Chips Text', 'Basic')}
    avatar={<Avatar alt="M">M</Avatar>}
    onClick={() => alert('click')}
  />
);

export default {
  component: Chips,
  title: 'components/chips',
  decorators: [withKnobs],
};
