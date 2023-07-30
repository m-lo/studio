import { useContext } from 'react';
import { InteractiveContext } from './context';

export default function useInteractive() {
  return useContext(InteractiveContext);
}
