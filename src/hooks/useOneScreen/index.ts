import { useEffect, useState, useRef, RefObject } from "react";

const useOnScreen = (ref: RefObject<HTMLElement>) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting));
  }, []);

  useEffect(() => {
    // @ts-expect-error ignore
    observerRef.current.observe(ref.current);

    return () => {
      // @ts-expect-error ignore
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};

export default useOnScreen;