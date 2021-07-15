import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    colorCode: 'green'
  },
  mutations: {
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber;
    },
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber;
    },
    setColorCode(state, newVal) {
      state.colorCode = newVal;
    }
  },
  actions: {
    decreaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => commit('decreaseCounter', response.data));
    },
    increaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => commit('increaseCounter', response.data));
    },
    setColorCode({ commit }, newVal) {
      commit('setColorCode', newVal)
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {},
});
