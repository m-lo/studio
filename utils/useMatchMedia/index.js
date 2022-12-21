import { useCallback, useEffect, useState } from 'react';

const useMatchMedia = (query = '(max-width: 560px)') => {
  const [value, setValue] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      media.addEventListener('change', updateTarget);

      if (media.matches) {
        setValue(true);
      }

      return () => media.removeEventListener('change', updateTarget);
    }
  }, []);

  return value;
};

export default useMatchMedia;
