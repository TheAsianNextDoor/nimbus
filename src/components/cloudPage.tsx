import {
    createRef,
    ReactElement,
    useEffect,
} from 'react';

import { StyledCanvas } from './cloudPage.styles';

export const CloudPage = (): ReactElement => {
    const canvasRef = createRef<HTMLCanvasElement>();

    const twitchResponse = [
        'hello',
        'World',
    ];

    useEffect(
        () => {
            const ctx = canvasRef?.current?.getContext('2d');
            if (!ctx) {
                throw new Error('unable to retrieve canvas context');
            }

            ctx.font = '8px serif';
            twitchResponse?.forEach((element: string) => {
                ctx.fillText(element, 10, 50);
            });
        },
        twitchResponse,
    );

    return (
        <>
            Cloud Page
            <StyledCanvas
                id="wordCloudCanvas"
                ref={canvasRef}
            />
        </>
    );
};
