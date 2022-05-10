import { useState, useCallback } from "react";

export const useToggleState = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const on = useCallback(() => setState(true), [setState]);
  const off = useCallback(() => setState(false), [setState]);
  const toggle = useCallback(
    () => setState((value) => !value),
    [setState, state]
  );

  return [
    state,
    {
      on,
      off,
      toggle,
    },
  ];
};
