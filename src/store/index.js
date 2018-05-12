import Vue from 'vue';
import Vuex from 'vuex';

import machines from './machines';

Vue.use(Vuex);

const store = new Vuex.Store({ modules: { machines } });

export default store;
