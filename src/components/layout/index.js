import styled from 'styled-components';

const getWidthString = (span) => {
  if (!span) return;

  let width = (span / 12) * 100;
  return `width: ${width}%;`;
};

export const Row = styled.div`
  &:after {
    content: '';
    clear: both;
    display: table;
  }
`;

export const Column = styled.div`
  float: left;
  margin: 0px 5px;

  ${({ xs }) => (xs ? getWidthString(xs) : 'width:100%')}

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media only screen and (min-width: 768px) {
    width: 750px;
  }

  @media only screen and (min-width: 992px) {
    width: 970px;
  }

  @media only screen and (min-width: 1200px) {
    width: 1170px;
  }
`;
