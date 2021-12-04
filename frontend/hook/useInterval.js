/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import { useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
