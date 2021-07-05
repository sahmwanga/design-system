import styled from 'styled-components';

const avatarSize = (props) => {
  switch (props.size) {
    case 'small':
      return '12px';
    case 'medium':
      return '24px';
    case 'large':
      return '48px';
    default:
      return '8px';
  }
};

const avatarImageSize = (props) => {
  switch (props.size) {
    case 'small':
      return '32px';
    case 'medium':
      return '64px';
    case 'large':
      return '128px';
    default:
      return '32px';
  }
};
const avatarFont = (props) => {
  switch (props.size) {
    case 'small':
      return '12px';
    case 'medium':
      return '16px';
    case 'large':
      return '18px';
    default:
      return '8px';
  }
};

export const StyledAvatar = styled.div`
  background-color: ${(props) => props.color || 'lightgray'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => avatarSize(props)};
  font-size: ${(props) => avatarFont(props)};
  border-radius: 100%;
  color: #ffffff;
  width: ${(props) => avatarSize(props)};
  height: ${(props) => avatarSize(props)};
`;

export const StyledImageAvatar = styled.div`
  width: ${(props) => avatarImageSize(props)};
  height: ${(props) => avatarImageSize(props)};
  padding: 0px !important;

  img {
    border-radius: 100%;
    width: ${(props) => avatarImageSize(props)};
    height: ${(props) => avatarImageSize(props)};
  }
`;
