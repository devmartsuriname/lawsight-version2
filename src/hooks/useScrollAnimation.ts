import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationOptions {
  animationClass?: string;
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = ({
  animationClass = 'animate-fade-in',
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
}: ScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView && elementRef.current) {
      const timer = setTimeout(() => {
        elementRef.current?.classList.add(animationClass);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [inView, animationClass, delay]);

  const setRefs = (element: HTMLDivElement | null) => {
    elementRef.current = element;
    inViewRef(element);
  };

  return { ref: setRefs, inView };
};
