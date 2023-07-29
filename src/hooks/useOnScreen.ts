import { RefObject, useEffect, useReducer, useRef } from "react";

type Data = {
  onScreen: boolean;
  from: "top" | "bottom";
};

function reducer(oldData: Data, newData: Partial<Data>) {
  return {
    ...oldData,
    ...newData,
  };
}

export function useOnScreen(ref: RefObject<Element>) {
  const [data, dispatch] = useReducer(reducer, {
    onScreen: false,
    from: "top",
  });

  const observerRef = useRef<null | IntersectionObserver>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      dispatch({
        onScreen: entry.isIntersecting,
        from: entry.boundingClientRect.top >= 0 ? "bottom" : "top",
      });
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

  return data;
}
