import {
    useCallback,
    useEffect,
} from 'react';
import { throttle } from 'throttle-debounce';

export const useThrottledEffect = (
    callback: () => any,
    timeout: number,
    deps: any,
): void => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const throttledCallback = useCallback(
        throttle(
            timeout,
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
