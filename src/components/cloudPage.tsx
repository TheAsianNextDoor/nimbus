import {
    ReactElement,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useParams } from 'react-router-dom';
import tmi from 'tmi.js';
import {
    connectTmiClient,
    createTmiClientConfig,
} from 'utils/tmiUtils';
import Queue from 'yocto-queue';

import { StyledCanvas } from './cloudPage.styles';
import { useThrottledEffect } from './customHookUtils';

type UseParamProps = {
    channelName: string
};

export const CloudPage = (): ReactElement => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { channelName } = useParams<UseParamProps>();
    const [
        tmiClient,
        setTmiClient,
    ] = useState<tmi.Client>();
    const [
        drawDep,
        updateDrawDep,
    ] = useState(false);
    const [queue] = useState<Queue<string>>(new Queue());
    const [maxQueueSize] = useState(10);
    const [timer] = useState(5000);

    // on mount setup
    useEffect(
        () => {
            if (!channelName) {
                console.log('No channelName');
                return;
            }

            const client = connectTmiClient(createTmiClientConfig(channelName));
            if (!client) {
                throw new Error(`tmiClient not created properly with channelName: ${channelName}`);
            }

            console.log(`tmiClient: ${tmiClient}`);
            setTmiClient(client);
            client.on(
                'message',
                (_channel, _tags, message) => {
                    updateDrawDep((prev) => !prev);

                    if (queue.size < maxQueueSize) {
                        queue.enqueue(message);
                    } else {
                        queue.dequeue();
                        queue.enqueue(message);
                    }
                },
            );
        },
        [],
    );

    // draw on canvas lifecycle
    useThrottledEffect(
        () => {
            console.log(`here ${JSON.stringify(queue)}`);
            const ctx = canvasRef?.current?.getContext('2d');
            if (!ctx) {
                throw new Error('unable to retrieve canvas context');
            }

            ctx.font = '8px serif';
            [...queue].forEach((element: string) => {
                ctx.fillText(element, 10, 50);
            });
        },
        timer,
        [
            drawDep,
            canvasRef,
        ],
    );

    return (
        <>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            Cloud Page - {channelName}

            <StyledCanvas
                id="wordCloudCanvas"
                ref={canvasRef}
            />
        </>
    );
};
