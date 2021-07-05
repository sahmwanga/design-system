import React from 'react';
import Button from './Button';
import { DashboardOutlined } from '@material-ui/icons';
import { text, select, withKnobs } from '@storybook/addon-knobs';

const label = 'variant';
const optionsVariant = {
  contained: 'contained',
  outlined: 'outlined',
};

const optionsColor = {
  primary: 'primary',
  secondary: 'secondary',
  tertial: 'tertial',
};
const optionsSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const defaultValuevariant = 'contained';
const defaultValueColor = 'primary';

export const basicButton = () => (
  <Button
    color={select(label, optionsColor, defaultValueColor, 'color')}
    variant={select(label, optionsVariant, defaultValuevariant, 'variant')}
    size={select(label, optionsSize, 'small', 'Size')}
  >
    {text('Button Text', 'Basic Button')}
  </Button>
);

export const functionButton = () => (
  <Button
    color={select(label, optionsColor, defaultValueColor, 'color')}
    variant={select(label, optionsVariant, defaultValuevariant, 'variant')}
    onClick={() => alert('alert')}
  >
    Function Button
  </Button>
);

export const iconButton = () => (
  <Button
    color={select(label, optionsColor, defaultValueColor, 'color')}
    variant={select(label, optionsVariant, defaultValuevariant, 'variant')}
    icon={<DashboardOutlined />}
  >
    Icon Button
  </Button>
);

export const linkedButton = () => <Button href="#">Linked Button</Button>;

export default {
  component: Button,
  title: 'components/form/Button',
  decorators: [withKnobs],
};
