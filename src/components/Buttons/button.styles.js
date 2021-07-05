import styled from 'styled-components';

const buttonBackground = (props) => {
  if (!props.color) return props.theme.primary;
  switch (props.color) {
    case 'primary':
      return props.theme.primary;
    case 'secondary':
      return props.theme.secondary;
    case 'tertial':
      return props.theme.tertial;
    default:
      return props.them.primary;
  }
};
const paddingHandler = (props) => {
  if (!props.size) return '16px';
  switch (props.size) {
    case 'small':
      return '8px';
    case 'medium':
      return '12px';
    case 'large':
      return '16px';
    default:
      return '16px';
  }
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => paddingHandler(props)};
  background-color: ${(props) =>
    props.variant === 'outlined' ? 'transparent' : buttonBackground(props)};
  border: ${(props) =>
    props.variant === 'outlined'
      ? `1px solid ${buttonBackground(props)}`
      : 'none'};
  color: ${(props) =>
    props.variant === 'outlined' ? buttonBackground(props) : '#EDEDED'};
  cursor: pointer;
  font-weight: 400;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.5s easy;
  white-space: nowrap;
  border-radius: 5px;

  .button__icon {
    display: inline-flex;
    margin-right: 8px;
  }
`;

export const StyledLinkButton = styled(StyledButton).attrs({ as: 'a' })`
  background-color: ${(props) => props.theme.secondary};
`;
