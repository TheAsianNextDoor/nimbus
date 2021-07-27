import {
    ReactElement,
    useEffect,
} from 'react';

import { StyledCanvas } from './cloudPage.styles';

type CloudPageProps = {
    twitchResponse: any,
};

export const CloudPage = ({ twitchResponse }: CloudPageProps): ReactElement => {
    let canvasRef: HTMLCanvasElement;

    const canvasRefCallback = (element: HTMLCanvasElement) => {
        canvasRef = element;
    };

    useEffect(
        () => {
            const ctx = canvasRef.getContext('2d');
            if (ctx === null) {
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
            Canvas
            <StyledCanvas
                id="wordCloudCanvas"
                ref={canvasRefCallback}
            />
        </>
    );
};
