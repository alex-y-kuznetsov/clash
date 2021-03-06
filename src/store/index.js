import Vue from 'vue'
import Vuex from 'vuex'
import randomNumber from '@/helpers/randomNumber.js';

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
    isGameOver: false,
    isCurrentFight: false,
    randomEncounterNumber: null,
    isRulesShown: false
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
    setWonEncouners(state, reset) {
      reset ? state.wonEncounters = 0 : state.wonEncounters++;
    },
    setGameOver(state, boolean) {
      state.isGameOver = boolean;
    },
    setCurrentFight(state, boolean) {
      state.isCurrentFight = boolean;
    },
    setRandomEncounterNumber(state, range) {
      range ?
        state.randomEncounterNumber = randomNumber(range.min, range.max) :
        state.randomEncounterNumber = null;
    },
    setRulesShown(state, boolean) {
      state.isRulesShown = boolean;
    }
  },
  getters: {
    isCharacterReady(state) {
      return state.characterBarsState.staminaSpent < state.selectedCharacterObject.stats[1].value
    }
  },
  modules: {
  }
})
