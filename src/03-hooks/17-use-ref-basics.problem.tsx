import { useEffect, useRef } from "react";

export const Component = () => {
  const id = useRef<string | undefined>();

  useEffect(() => {
    id.current = "Random value!";
  }, []);

  return <div></div>;
};
