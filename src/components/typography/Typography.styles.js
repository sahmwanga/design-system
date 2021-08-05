import styled from 'styled-components';

const fontSize = (props) => {
  switch (props.variant) {
    case 'h1':
      return '2em'; // 32px
    case 'h2':
      return '1.5em'; // 24px
    case 'h3':
      return '1.17em'; // 18.72px
    case 'h4':
      return '1em'; // 16px
    case 'h5':
      return '0.83em'; //13.28px
    case 'h6':
      return '0.83em'; //13.28px
    default:
      return '0.75px'; // 12px
  }
};

export const StyledTypography = styled.h1`
  font-size: ${(props) => fontSize(props)};
`;
