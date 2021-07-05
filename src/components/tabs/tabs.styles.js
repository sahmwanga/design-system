import styled from 'styled-components';

export const StyledTab = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.primary};
  padding: 16px;
  width: 200px;
  align-items: center;
  text-align: center;
  font-width: 500px;

  &.active {
    background: #fafbfc;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const StyledTabsContent = styled.div`
  display: inline-flex;
  padding: 16px;
  padding: 6px 12px;
  border-radius10px 10px 0px 0px;
`;

export const StyledTabs = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 10px 10px 0px 0px;
`;
