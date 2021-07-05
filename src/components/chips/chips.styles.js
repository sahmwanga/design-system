import styled from 'styled-components';

const chipsBackground = (props) => {
  if (!props.variant) return props.theme.primary;
  switch (props.variant) {
    case 'primary':
      return props.theme.primary;
    case 'secondary':
      return props.theme.secondary;
    case 'tertiary':
      return props.theme.tertiary;
    default:
      return props.them.primary;
  }
};

export const StyledChips = styled.div`
  display: inline-flex;
  flex-direction: row;
  background-color: ${(props) => chipsBackground(props)};
  border-radius: 32px;
  color: ${(props) => props.theme.white};
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  text-align: center;
  padding: 8px 16px;
`;
