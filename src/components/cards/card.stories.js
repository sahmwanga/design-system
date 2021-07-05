import Card from './card';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardBody from './CardBody';

export const BasicCard = () => <Card>Total Users</Card>;
export const BasicWithHeading = () => (
  <Card>
    <CardHeader>Total Users</CardHeader>
  </Card>
);
export const BasicWithFooter = () => (
  <Card>
    <CardHeader>Total Users</CardHeader>
    <CardFooter>@2021</CardFooter>
  </Card>
);

export const BasicWithBody = () => (
  <Card>
    <CardHeader>Total Users</CardHeader>
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut euismod
      est, sed laoreet arcu. Duis at turpis id urna tempor malesuada eget et
      enim. Mauris quis turpis ullamcorper, lobortis ligula eu, rhoncus dui.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Nullam bibendum luctus massa, eget sodales lorem
      ultrices sodales. Aenean elementum lorem tellus. Phasellus interdum
      malesuada suscipit.
    </CardBody>
    <CardFooter>@2021</CardFooter>
  </Card>
);

export default {
  title: 'components/card',
  component: Card,
};
