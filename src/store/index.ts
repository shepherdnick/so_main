import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    featuresList: ["Alarms", "Raise"]
  },
  getters: {
    getFeatureList: state => state.featuresList
  },
  mutations: {},
  actions: {},
  modules: {}
});
