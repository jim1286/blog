import { useEffect } from "react";

const useKeyDown = (
  callback: (event: KeyboardEvent) => void,
  codes: string[]
) => {
  const onKeyDown = (event: KeyboardEvent) => {
    const wasAnyKeyPressed = codes.some((code) => event.code === code);

    if (wasAnyKeyPressed) {
      event.preventDefault();
      callback(event);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
};

export default useKeyDown;
