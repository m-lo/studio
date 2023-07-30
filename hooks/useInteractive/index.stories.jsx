import { ArrowLeft, Bottles_02 as Bottles } from '@carbon/icons-react';
import IconButton from 'components/IconButton';
import { ConditionalButton, Cursor } from './components';
import { InteractiveProvider } from '.';

export default {
  title: 'Components/Contexts/Interactive',
  component: InteractiveProvider,
  parameters: {
    layout: 'fullscreen',
  },
};

export function Default(args) {
  return (
    <InteractiveProvider>
      <Cursor {...args} />
      <div style={{
        display: 'flex', gap: 12, padding: 80, alignItems: 'start',
      }}
      >
        <ConditionalButton onClick={() => {}}>
          hello
        </ConditionalButton>
        <ConditionalButton onClick={() => {}}>
          another one
        </ConditionalButton>
        <IconButton size={64}><ArrowLeft size={32} /></IconButton>

      </div>
      <IconButton size={32}><Bottles size={24} /></IconButton>

    </InteractiveProvider>
  );
}
