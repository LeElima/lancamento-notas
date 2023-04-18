import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alunos:[],
    notas:[],

  },
  getters: {
  },
  mutations: {
    novoAluno(state, payload){
      state.alunos!.push(payload as never);
    },
    novaNota(state, payload){
      state.notas!.push(payload as never);
    }
  },
  actions: {
  },
  modules: {
  },
});
