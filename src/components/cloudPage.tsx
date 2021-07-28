import {
    createRef,
    ReactElement,
    useEffect,
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

type UseParamProps = {
    channelName: string
};

export const CloudPage = (): ReactElement => {
    const canvasRef = createRef<HTMLCanvasElement>();
    const { channelName } = useParams<UseParamProps>();
    const [
        tmiClient,
        setTmiClient,
    ] = useState<tmi.Client>();
    const [queue] = useState<Queue<string>>(new Queue());
    const [
        updateFlag,
        flipUpdateFlag,
    ] = useState(false);
    const [maxQueueSize] = useState(50);
    const [timer] = useState(5000);

    // component mount useEffect
    useEffect(
        () => {
            if (!channelName) {
                return;
            }

            setInterval(
                () => {
                    flipUpdateFlag((prev) => !prev);
                },
                timer,
            );

            const client = connectTmiClient(createTmiClientConfig(channelName));
            if (!client) {
                throw new Error(`tmiClient not created properly with channelName: ${channelName}`);
            }

            console.log(tmiClient);
            setTmiClient(client);
            client.on(
                'message',
                (_channel, _tags, message) => {
                    if (queue.size < maxQueueSize) {
                        queue.enqueue(message);
                    } else {
                        queue.dequeue();
                        queue.enqueue(message);
                    }
                },
            );
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    // draw on canvas lifecycle
    useEffect(
        () => {
            console.log(`here ${[...queue]}`);
            const ctx = canvasRef?.current?.getContext('2d');
            if (!ctx) {
                throw new Error('unable to retrieve canvas context');
            }

            ctx.font = '8px serif';
            [...queue].forEach((element: string) => {
                ctx.fillText(element, 10, 50);
            });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [updateFlag],
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
