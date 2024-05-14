import { useState } from "react";

export const useHook = () => {
  const [count, setCount] = useState(0);
  const [vini, setVini] = useState(0);

  return { count, setCount, vini, setVini };
};
