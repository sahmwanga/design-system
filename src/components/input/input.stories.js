import React from 'react';
import Input from './input';
import { text, select, withKnobs } from '@storybook/addon-knobs';

export const basicInput = () => <Input placeholder="Input" />;

export const inputWithLabel = () => (
  <Input placeholder="Input" label="Input Label" />
);

export default {
  component: Input,
  title: 'components/Form/Input',
  decorators: [withKnobs],
};
