import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Navigation from '../navigation/Navigation';

import { StyledFooter } from './Footer.styles';

const Footer = ({ menus }) => {
  return (
    <StyledFooter>
      {menus.map(({ items, title }) => (
        <>
          {title && <h3 className="footer_title">{title}</h3>}
          <Navigation direction="vertical" items={items} />
        </>
      ))}
    </StyledFooter>
  );
};

Footer.propTypes = {
  menus: arrayOf({
    items: arrayOf(shape({ title: string.isRequired, url: string.isRequired })),
    title: string,
  }),
};

Footer.defaultProps = { menus: [] };

export default Footer;
