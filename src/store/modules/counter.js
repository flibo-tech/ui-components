const state = {
  counter: 5,
  min_rating_completed: false
};

const getters = {
  count: state => {
    return state.counter;
  }
};

const mutations = {
  increase: state => {
    if (state.counter < 25) {
      state.counter += 1;
    }
    if (state.counter > 5) {
      state.min_rating_completed = true;
    }
  }
};

const actions = {
  increase: ({ commit }) => {
    commit("increase");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
