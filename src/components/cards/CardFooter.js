import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: #c4c4c4;
  padding: 16px 8px;
`;

function CardFooter({ children }) {
  return <StyledFooter>{children}</StyledFooter>;
}

export default CardFooter;
