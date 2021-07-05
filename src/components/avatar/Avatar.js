import React from 'react';
import { StyledAvatar, StyledImageAvatar } from './avatar.styles';

function Avatar({ children, src, size, color, ...rest }) {
  if (src) {
    return (
      <StyledImageAvatar size={size} {...rest} color={color}>
        <img src={src} alt="" />
      </StyledImageAvatar>
    );
  }
  return (
    <StyledAvatar size={size} {...rest} color={color}>
      {children}
    </StyledAvatar>
  );
}

export default Avatar;
