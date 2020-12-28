import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCharacterId: null,
    selectedCharacterObject: null,
    isCharacterVenturing: false,
    activeEncounterObject: null,
    barsState: {
      damageTaken: 0,
      staminaSpent: 0
    }
  },
  mutations: {
    updateSelectedCharacter(state, characterObject) {
      characterObject ? state.selectedCharacterId = characterObject.id : state.selectedCharacterId = null;
      state.selectedCharacterObject = characterObject;
    },
    setCharacterVenturing(state, boolean) {
      state.isCharacterVenturing = boolean;
    },
    setActiveEncounter(state, encounterObject) {
      encounterObject ? state.activeEncounterObject = encounterObject : state.activeEncounterObject = null;
    },
    updateBarsState(state, barsObject) {
      state.barsState = barsObject;
    }
  },
  actions: {
  },
  modules: {
  }
})
