import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCharacter: null
  },
  mutations: {
    updateSelectedCharacter(state, characterId) {
      state.selectedCharacter = characterId;
    }
  },
  actions: {
  },
  modules: {
  }
})
