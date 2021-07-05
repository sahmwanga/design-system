import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
  padding: 16px 8px;
`;

function CardBody({ children }) {
  return <StyledBody>{children}</StyledBody>;
}

export default CardBody;
