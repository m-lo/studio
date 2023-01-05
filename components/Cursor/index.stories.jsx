import Cursor from '.';

export default {
  title: 'Components/Cursor',
  component: Cursor,
  parameters: {
    layout: 'fullscreen'
  }
};

export function Default(args) {
  return <Cursor {...args} />;
}
