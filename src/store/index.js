import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import {tasksModule} from "@/store/tasksModule";
const ls = new SecureLS({ isCompression: false });

export const store = new Vuex.Store({
    modules: {
        tasksModule
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ],
});

