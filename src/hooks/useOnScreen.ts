import { RefObject, useEffect, useRef, useState } from "react";

export function useOnScreen(ref: RefObject<Element>) {
  const [isOnScreen, setOnScreen] = useState(true);
  const observerRef = useRef<null | IntersectionObserver>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      observerRef.current?.observe(ref.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
