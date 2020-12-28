import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCharacterId: null,
    selectedCharacterObject: null,
    isCharacterVenturing: false,
    activeEncounterObject: null,
    characterBarsState: {
      damageTaken: 0,
      staminaSpent: 0
    },
    encounterBarsState: {
      damageTaken: 0,
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
    updateBarsState(state, combinedResourceObject) {
      state.characterBarsState = combinedResourceObject.chracterResources;
      state.encounterBarsState = combinedResourceObject.encounterResources;
    }
  },
  actions: {
  },
  modules: {
  }
})
