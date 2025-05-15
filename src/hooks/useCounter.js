import { useEffect, useState } from "react";

export function useCounter() {
  const [state, setState] = useState();
  const [count, setCount] = useState(0);

  function add() {
    setState("apple");
  }

  useEffect(() => {
    add();
  }, [count]);

  return { count, setCount, state, setState };
}
