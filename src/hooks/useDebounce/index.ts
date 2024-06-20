import { useCallback, useRef } from "react";

const useDebounce = (callback: any, delay?: number) => {
  const timer: any = useRef();

  const debouncedCallback = useCallback((...args: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);      
    }, delay ?? 300);
  },
    [delay, callback]
  );

  return debouncedCallback;
};

export default useDebounce;

