import React from 'react';
import { node, func, string } from 'prop-types';

import { StyledButton, StyledLinkButton } from './button.styles';

const Button = ({ children, href, onClick, variant, icon, color, size }) => {
  if (!href)
    return (
      <StyledButton
        variant={variant}
        onClick={onClick}
        color={color}
        size={size}
      >
        {icon && <ButtonIcon name={icon} />} {children}
      </StyledButton>
    );
  return (
    <StyledLinkButton href={href} size={size} variant={variant} color={color}>
      {icon && <ButtonIcon icon={icon} />} {children}
    </StyledLinkButton>
  );
};

const ButtonIcon = ({ name }) => {
  return <span className="button__icon">{name && name}</span>;
};

Button.propTypes = {
  children: node.isRequired,
  href: string,
  onClick: func,
  variant: string,
  icon: node,
  color: string,
};

Button.defaultProps = { variant: 'contained', color: 'primary' };

export default Button;
