import tmi from 'tmi.js';
import Queue from 'yocto-queue';

const maxQueueSize = 50;
let tmiClient: tmi.Client;

/**
 * Creates a tmi config object
 * @param {String} channelName The Twitch channel to connect an IRC
 * @returns {tmi.Options}
 */
export const createTmiClientConfig = (channelName: string): tmi.Options => ({
    options: { debug: true },
    channels: [channelName],
});

/**
 * Disconnects the tmi client
 * @returns Promise<void>
 */
export const disconnectTmiClient = async (): Promise<[string, number]> => tmiClient.disconnect();

/**
 * Creates an IRC client for a given twitch channel
 * @param {tmi.Options} tmiClientConfig The config to use for the Twitch TMI client
 * @returns {void}
 */
export const connectTmiClient = (tmiClientConfig: tmi.Options): void => {
    tmiClient = new tmi.Client(tmiClientConfig);

    tmiClient.connect();
    const queue = new Queue();

    tmiClient.on(
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
};
