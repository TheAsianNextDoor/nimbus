import {
    useCallback,
    useEffect,
} from 'react';
import { throttle } from 'throttle-debounce';

export const useThrottledEffect = (
    callback: () => void,
    timer: number,
    deps: any[],
): void => {
    const throttledCallback = useCallback(
        throttle(
            timer,
            true,
            callback,
        ),
        [],
    );

    useEffect(
        () => throttledCallback(),
        [
            deps,
            throttledCallback,
        ],
    );
};
