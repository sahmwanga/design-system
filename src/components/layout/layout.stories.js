import { StyledGrid, StyledContainer } from './index';

export const Container = () => {
  return <StyledContainer>test</StyledContainer>;
};
export const Grid = () => {
  return (
    <div>
      <StyledGrid></StyledGrid>
    </div>
  );
};

// export const Grid = () => {
//   return (
//     <div>
//       <Row>
//         <Column md="1" style={{ backgroundColor: '#ffffff' }}>
//           1
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#ffffcc' }}>
//           2
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#ff22dd' }}>
//           3
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#ee22ee' }}>
//           4
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#ddffff' }}>
//           5
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#22ffff' }}>
//           6
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#f3ddff' }}>
//           7
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#ffddff' }}>
//           8
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#ffeeef' }}>
//           9
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#fee22f' }}>
//           10
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#ffffff' }}>
//           11
//         </Column>
//         <Column md="1" style={{ backgroundColor: '#ffffff' }}>
//           12
//         </Column>
//       </Row>
//     </div>
//   );
// };
// export const GridWithSpan = () => {
//   return (
//     <div>
//       <Row>
//         <Column md="3">1</Column>
//         <Column md="3">2</Column>
//         <Column md="3">3</Column>
//         <Column md="3">4</Column>
//         <Column md="3">5</Column>
//         <Column md="3">6</Column>
//         <Column md="3">7</Column>
//         <Column md="3">8</Column>
//         <Column md="3">9</Column>
//         <Column md="3">10</Column>
//         <Column md="3">11</Column>
//         <Column md="3">12</Column>
//       </Row>
//     </div>
//   );
// };
// export const GridWithContainer = () => {
//   return (
//     <Container>
//       <Row>
//         <Column md="1" style={{ backgroundColor: 'green' }}>
//           md:8 - sm:6 - xs:12
//         </Column>
//         <Column md="1" style={{ backgroundColor: 'blue' }}>
//           2
//         </Column>
//         <Column md="1">3</Column>
//         <Column md="1">4</Column>
//         <Column md="1">5</Column>
//         <Column md="1">6</Column>
//         <Column md="1">7</Column>
//         <Column md="1">8</Column>
//         <Column md="1">9</Column>
//         <Column md="1">10</Column>
//         <Column md="1">11</Column>
//         <Column md="1">12</Column>
//       </Row>
//     </Container>
//   );
// };

export default {
  title: 'layout',
};
