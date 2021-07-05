import styled from 'styled-components';

export const StyledLink = styled.a`
  color: #1dbfb5;
  text-decoration: none;
  font-size: 16px;
  padding: 16px;
  padding-left: 8px;
  text-transform: capitalize;
`;

export const NavItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  &:hover {
    color: #136661;
  }
`;

export const StyledIcon = styled.span`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
`;
// export const StyledIcon = styled(StyledLink).attrs('a', 'span')`
//   // display: flex;
//   // padding-left: 8px;
//   // padding-right: 8px;
// `;

export const StyledNavigation = styled.nav`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  flex-direction: ${(props) =>
    props.direction !== 'horizontal' ? 'column' : undefined};

  a + a {
    margin-top: ${(props) =>
      props.direction === 'vertical' ? '8px' : undefined};
    margin-left: ${(props) =>
      props.direction === 'vertical' ? undefined : '8px'};
  }

  a:active {
    background-color: ${(props) => props.theme.primary};
  }
`;
