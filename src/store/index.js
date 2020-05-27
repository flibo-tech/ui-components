import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var my_store = JSON.parse(localStorage.getItem("my_store"));

export default new Vuex.Store({
  state: {
    component: my_store ? my_store.component : null,
  },
  mutations: {},
  actions: {},
  modules: {},
});
