import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCharacterId: null,
    selectedCharacterObject: null
  },
  mutations: {
    updateSelectedCharacter(state, characterObject) {
      characterObject ? state.selectedCharacterId = characterObject.id : state.selectedCharacterId = null;
      state.selectedCharacterObject = characterObject;
    }
  },
  actions: {
  },
  modules: {
  }
})
