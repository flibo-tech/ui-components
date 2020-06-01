import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var my_store = JSON.parse(localStorage.getItem("my_store"));

export default new Vuex.Store({
  state: {
    component: my_store ? my_store.component : null,
    // for dynamic CSS Animation
    active: false
  },
  getters: {
    isLiked: state => {
      if (state.component === "liked") return state.active;
    },
    isLoved: state => {
      if (state.component === "loved") return state.active;
    },
    isDisliked: state => {
      if (state.component === "disliked") return state.active;
    },
    back: state => {
      if (state.component === "back") return state.active;
    }
  },
  mutations: {
    myAction: state => {
      var myAction = state.component;
      if (myAction === "liked" && !state.active) {
        state.active = !state.active;
      } else if (myAction === "loved" && !state.active) {
        state.active = !state.active;
      } else if (myAction === "disliked" && !state.active) {
        state.active = !state.active;
      }
      setTimeout(() => {
        state.active = !state.active;
      }, 1000);
    },
    goBack: state => {
      console.log(state.component);
    }
  },
  actions: {},
  modules: {}
});
