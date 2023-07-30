import {
  createContext, useMemo, useRef, useState,
} from 'react';

export const InteractiveContext = createContext({
  isInteractive: false,
  // TODO: link handler vs. button handlers
  // diff behaviour based on next/router
  // check on route change complete
  // AND / OR structure navigation so that same component is used for navUp button
  // so that it doesn't get rerendered?
  effect: () => {},
  bounds: null,
  handlers: {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onMouseUp: () => {},
    onMouseDown: () => {},
  },
});

export default function InteractiveProvider({ children }) {
  const [isInteractive, setIsInteractive] = useState(false);
  const bounds = useRef(undefined);
  const radius = useRef(-1);

  const value = useMemo(() => ({
    isInteractive,
    bounds,
    radius,
    handlers: {
      onMouseEnter: (e) => {
        const {
          left, top, width, height,
        } = e.target.getBoundingClientRect();
        bounds.current = {
          left,
          top,
          width,
          height,
        };
        radius.current = e.target.style.borderRadius || 0;
        setIsInteractive(true);
      },
      onMouseLeave: (e) => {
        bounds.current = undefined;
        radius.current = -1;
        setIsInteractive(false);
      },
      onMouseUp: () => { setIsInteractive(true); },
      onMouseDown: () => { setIsInteractive(false); },
    },
  }), [isInteractive]);

  return (
    <InteractiveContext.Provider value={value}>{children}</InteractiveContext.Provider>
  );
}
