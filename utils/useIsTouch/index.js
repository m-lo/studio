import { useEffect, useState } from 'react';

export default function useIsTouch() {
  const [isTouch, setIsTouch] = useState();
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
    }
  }, []);
  return isTouch;
}
