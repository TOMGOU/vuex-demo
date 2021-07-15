import * as MutationsType from './mutationsType';
const initState = {
  count: 0
}
const actions = {
  add({ commit }, num) {
    commit(MutationsType.ADD, num);
  },
  minus({ commit }, num) {
    commit(MutationsType.MINUS, num);
  },
}
const mutations = {
  [MutationsType.ADD] (state, num) {
    state.count += num
  },
  [MutationsType.MINUS] (state, num) {
    state.count -= num
  }
}
const getters = {
  count: (state) => {
    return state.count
  }
}

export default {
  namespaced: true,
  state: initState,
  actions,
  mutations,
  getters,
};