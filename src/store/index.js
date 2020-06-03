import Vue from "vue";
import Vuex from "vuex";

import counter from "./modules/counter";

Vue.use(Vuex);

var my_store = JSON.parse(localStorage.getItem("my_store"));

export default new Vuex.Store({
  state: {
    component: my_store ? my_store.component : null,
    swiped: "",
    reaction: "",
    // for dynamic CSS Animation
    active: false
  },
  getters: {
    isLiked: state => {
      if (state.reaction === "liked") return state.active;
    },
    isLoved: state => {
      if (state.reaction === "loved") return state.active;
    },
    isDisliked: state => {
      if (state.reaction === "disliked") return state.active;
    },
    isSeen: state => {
      if (state.reaction === "notSeen") return state.active;
    },
    back: state => {
      if (state.reaction === "back") return state.active;
    }
  },
  mutations: {
    myAction: state => {
      var myAction = state.component;
      if (myAction === "liked") {
        state.reaction = myAction;
      } else if (myAction === "loved") {
        state.reaction = myAction;
      } else if (myAction === "disliked") {
        state.reaction = myAction;
      } else if (myAction === "notSeen") {
        state.reaction = myAction;
      } else if (myAction === "back") {
        state.reaction = myAction;
      }
      state.active = !state.active;
      setTimeout(() => {
        state.active = !state.active;
        state.reaction = "";
      }, 1000);
    },
    cardAction: (state, payload) => {
      state.swiped = payload;
      if (state.swiped === "left") {
        state.reaction = "disliked";
      }
      if (state.swiped === "right") {
        state.reaction = "liked";
      }
      if (state.swiped === "up") {
        state.reaction = "loved";
      }
      if (state.swiped === "down") {
        state.reaction = "notSeen";
      }
      state.active = !state.active;

      setTimeout(() => {
        state.active = !state.active;
        state.reaction = "";
      }, 1000);
    }
  },
  actions: {
    direction: ({ commit }, payload) => {
      commit("cardAction", payload);
    }
  },
  modules: {
    counter
  }
});
