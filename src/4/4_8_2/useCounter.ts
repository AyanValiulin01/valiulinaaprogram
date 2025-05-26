import { useState, useEffect } from 'react';

export function useCounter(delay: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, delay);

    return () => clearInterval(id);
  }, [delay]); // Зависимость обновляется при изменении delay

  return count;
}
