const state = {
  counter: 5
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
