import {debounce, mutate, pipe} from "overmind";
import SETTINGS from '../config/settings';

export default {
    app: {
        setLoading: ({state}, loading) => {
            state.app.loading = loading;
        }
    },
    covidTracker: {
        retrieveGlobalData: pipe(
           debounce(SETTINGS.app.DEBOUNCE_TIME),
           mutate(async ({state, effects: {api}, actions}) => {
               actions.app.setLoading = true;
               
               try {
                    const {data} = await api.retrieveGlobalData();
                    state.covidTracker.globalData = data;
               } catch (error) {
                   console.log(error)
               }

               actions.app.setLoading = false;
           })
        )
    },
};
