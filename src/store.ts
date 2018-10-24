import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    SearchBoxData : {
      title: ["Software engineer"],
      locations : ["Barcelona"],
    },

  },

  getters: {

    getSearchBoxData: (state) => state.SearchBoxData,

  },

  mutations: { },

  actions: { },
});
