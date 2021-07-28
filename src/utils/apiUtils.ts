import axios from 'axios';
import Uri from 'urijs';

const baseTwitchUrl = new Uri('https://api.twitch.tv/helix/search/channels');

export const createChannelQueryUri = (channelName: string): Uri => baseTwitchUrl.addQuery({
    query: channelName,
    live_only: true,
    first: 1,
});

export const getRequest = async (uri: URI): Promise<any> => {
    const instance = axios.create({
        headers: {
            'client-id': '9irufq7cwgvb6md9hiifo7m77flrw1',
            Authorization: 'Bearer bvc9fkh5jz4lgejzhgz9oyr1535mk8',
        },
    });

    return instance.get(uri.toString());
};
