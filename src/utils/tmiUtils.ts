import tmi from 'tmi.js';

/**
 * Creates a tmi config object
 * @param {String} channelName The Twitch channel to connect an IRC
 * @returns {tmi.Options}
 */
export const createTmiClientConfig = (channelName: string): tmi.Options => ({
    // options: { debug: true },
    channels: [channelName],
});

/**
 * Disconnects the tmi client
 * @returns Promise<void>
 */
export const disconnectTmiClient = async (client: tmi.Client): Promise<[string, number]> => client.disconnect();

/**
 * Creates an IRC client for a given twitch channel
 * @param {tmi.Options} tmiClientConfig The config to use for the Twitch TMI client
 * @returns {void}
 */
export const connectTmiClient = (tmiClientConfig: tmi.Options): tmi.Client => {
    const tmiClient = new tmi.Client(tmiClientConfig);

    tmiClient.connect();

    return tmiClient;
};
