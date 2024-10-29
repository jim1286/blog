import { useCallback, useRef } from "react";

const useDebounce = (callback: (value?: string) => void, delay: number) => {
  const timeoutRef = useRef<number | undefined>();

  const debounce = useCallback(
    (value?: string) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay]
  );

  return debounce;
};

export default useDebounce;
