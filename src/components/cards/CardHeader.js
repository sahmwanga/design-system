import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 16px 8px;
`;

function CardHeader({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default CardHeader;
