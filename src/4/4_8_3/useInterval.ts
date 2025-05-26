
import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number) {
    const savedCallback = useRef(callback);

    // Обновляем сохраненный callback, если он изменился
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Устанавливаем интервал
    useEffect(() => {
        if (delay === null) return; // Если delay null, не запускаем интервал
        const id = setInterval(() => savedCallback.current(), delay);
        return () => clearInterval(id);
    }, [delay]); // Перезапускаем интервал при изменении delay
}
