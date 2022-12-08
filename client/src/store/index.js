import { createStore } from "vuex";

export default createStore({
    state: {
        crimes: [],
    },
    getters: {
        getTopCrimes: (state) => {
            let crimes = state.crimes.slice(0, 10);
            return crimes;
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});
