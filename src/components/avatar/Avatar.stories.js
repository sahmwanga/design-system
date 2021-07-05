import React from 'react';
import Avatar from './Avatar';
import { DashboardOutlined } from '@material-ui/icons';
import { text, select, withKnobs } from '@storybook/addon-knobs';

const label = 'variant';

const optionsSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export const Basic = () => (
  <Avatar size={select(label, optionsSize, 'small', 'Size')} color="green">
    {text('Avatar', 'AV')}
  </Avatar>
);

export const ImageAvatar = () => (
  <Avatar
    size={select(label, optionsSize, 'small', 'Size')}
    color="green"
    src="https://img2.pngio.com/how-to-create-avatar-images-gravatar-png-499_498.png"
  />
);

export const IconAvatar = () => (
  <Avatar size={select(label, optionsSize, 'small', 'Size')} color="green">
    <DashboardOutlined />
  </Avatar>
);

export default {
  component: Avatar,
  title: 'components/avatar',
  decorators: [withKnobs],
};
