import React from 'react';
import { node, string, func } from 'prop-types';

import { StyledChips } from './chips.styles';

const Chips = ({ color, label, onClick, avatar, icon }) => {
  const Avatar = avatar;
  return (
    <StyledChips color={color} onClick={onClick}>
      {label}
    </StyledChips>
  );
};

Chips.propTypes = {
  color: string,
  label: string,
  onClick: func,
};

Chips.defaultProps = { color: 'primary' };

export default Chips;
