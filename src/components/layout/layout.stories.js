import { Row, Column, Container } from './index';

export const Grid = () => {
  return (
    <div>
      <Row>
        <Column md="1">1</Column>
        <Column md="1">2</Column>
        <Column md="1">3</Column>
        <Column md="1">4</Column>
        <Column md="1">5</Column>
        <Column md="1">6</Column>
        <Column md="1">7</Column>
        <Column md="1">8</Column>
        <Column md="1">9</Column>
        <Column md="1">10</Column>
        <Column md="1">11</Column>
        <Column md="1">12</Column>
      </Row>
    </div>
  );
};
export const GridWithSpan = () => {
  return (
    <div>
      <Row>
        <Column md="3">1</Column>
        <Column md="3">2</Column>
        <Column md="3">3</Column>
        <Column md="3">4</Column>
        <Column md="3">5</Column>
        <Column md="3">6</Column>
        <Column md="3">7</Column>
        <Column md="3">8</Column>
        <Column md="3">9</Column>
        <Column md="3">10</Column>
        <Column md="3">11</Column>
        <Column md="3">12</Column>
      </Row>
    </div>
  );
};
export const GridWithContainer = () => {
  return (
    <Container>
      <Row>
        <Column md="1" style={{ backgroundColor: 'green' }}>
          md:8 - sm:6 - xs:12
        </Column>
        <Column md="1" style={{ backgroundColor: 'blue' }}>
          2
        </Column>
        <Column md="1">3</Column>
        <Column md="1">4</Column>
        <Column md="1">5</Column>
        <Column md="1">6</Column>
        <Column md="1">7</Column>
        <Column md="1">8</Column>
        <Column md="1">9</Column>
        <Column md="1">10</Column>
        <Column md="1">11</Column>
        <Column md="1">12</Column>
      </Row>
    </Container>
  );
};

export default {
  title: 'layout',
};
