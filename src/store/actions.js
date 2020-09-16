import {debounce, mutate} from "overmind";

export default {
    app: {
        setLoading: ({state}, loading) => {
            state.app.loading = loading;
        }
    },
    covidTracker: {},
};
