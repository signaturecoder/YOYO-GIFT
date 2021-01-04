import renderer from 'react-test-renderer';
import Button from './Button';

it('renders without crashing', () => {
  const tree = renderer.create(Button).toJSON();
  expect(tree).toMatchSnapshot();
});
