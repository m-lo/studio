import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(config = {}) {
  const ref = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
        ...config,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [config]);

  return { ref, isIntersecting };
}
