import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
};

export function Default(args) {
  return (
    <Button {...args}>Button</Button>
  );
}
