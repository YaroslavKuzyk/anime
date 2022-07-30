import Vue from 'vue';
import Vuex from 'vuex';
import { Header } from "./Header";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        Header
    }
});
