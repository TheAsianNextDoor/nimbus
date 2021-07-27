import axios from 'axios';

export const normalizeResponse = (response: any): any => response;

export const getTwitchData = (uri: string): any => axios.get(uri);
