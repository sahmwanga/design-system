import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import {
  StyledNavigation,
  StyledIcon,
  StyledLink,
  NavItemWrapper,
} from './navigation.styles';
import { HomeWorkSharp } from '@material-ui/icons';

export const NavItem = ({ leadingIcon, trailingIcon, url, title, ...rest }) => {
  return (
    <NavItemWrapper {...rest}>
      {leadingIcon && (
        <StyledIcon>
          <HomeWorkSharp />
        </StyledIcon>
      )}
      <StyledLink href={url}>{title}</StyledLink>
      {trailingIcon && (
        <StyledIcon>
          <HomeWorkSharp />
        </StyledIcon>
      )}
    </NavItemWrapper>
  );
};

const Navigation = ({ direction, items }) => {
  return (
    <StyledNavigation direction={direction}>
      {items.map(({ url, title, leadingIcon, trailingIcon }) => (
        <NavItem
          url={url}
          title={title}
          leadingIcon={leadingIcon}
          trailingIcon={trailingIcon}
        />
      ))}
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  direction: string.isRequired,
  items: arrayOf(shape({ title: string.isRequired, url: string.isRequired })),
};

Navigation.defaultProps = { direction: 'horizontal', items: [] };

NavItem.propTypes = {
  url: string.isRequired,
  title: string.isRequired,
};

export default Navigation;
