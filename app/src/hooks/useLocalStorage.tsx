import { useEffect, useState } from "react";

export function useLocalStorage<Type>(
  key: string
): (Type | ((nextState: Type) => void) | null)[] {
  const [state, setState] = useState<Type | null>(null);

  useEffect(() => {
    setState(localStorage.getItem(key) as Type);
  }, [key]);

  const setWithLocalStorage = (nextState: Type) => {
    setState(nextState);
  };

  return [state, setWithLocalStorage];
}
