import React from 'react';
import { node, func, string } from 'prop-types';

import { StyledInput, StyledInputLabel } from './input.styles';

const Input = (props) => {
  const { type, leadingIcon, trailingIcon, label, ...rest } = props;
  return (
    <>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledInput type={type} {...rest}></StyledInput>
    </>
  );
};

Input.propTypes = {
  type: string.isRequired,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
