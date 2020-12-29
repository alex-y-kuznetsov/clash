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
    },
    wonEncounters: 0,
    isGameOver: false
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
      if (combinedResourceObject.chracterResources) {
        state.characterBarsState = combinedResourceObject.chracterResources;
      }
      if (combinedResourceObject.encounterResources) {
        state.encounterBarsState = combinedResourceObject.encounterResources;
      }
    },
    countWonEncouners(state) {
      state.wonEncounters ++;
    },
    setGameOver(state) {
      state.isGameOver = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
