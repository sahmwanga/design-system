import React from 'react';
import { StyledTypography } from './Typography.styles';

function Typography({ children, color, ...rest }) {
  return (
    <StyledTypography {...rest} color={color}>
      {children}
    </StyledTypography>
  );
}

export default Typography;
