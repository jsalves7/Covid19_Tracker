import httpClient from 'axios';
import store from './store';
import SETTINGS from '../config/settings';

const apiHttpClient = httpClient.create({baseURL: SETTINGS.app.API_ENDPOINT});

export default {
    httpClient,
    browser: {
        store
    },
    api: {
        httpClient: apiHttpClient,
        retrieveGlobalData: () => {
            return apiHttpClient.get();
        },
    }
}