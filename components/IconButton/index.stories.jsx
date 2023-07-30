import { ArrowLeft } from '@carbon/icons-react';
import IconButton from '.';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

export function Default(args) {
  return (
    <IconButton {...args}><ArrowLeft size={32} /></IconButton>
  );
}
