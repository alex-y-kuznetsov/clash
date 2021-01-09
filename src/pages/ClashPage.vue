<template>
  <div class="inner_page clash">
    <TitleBlock />
    <div class="inner_field">
      <div class="battlefield" v-if="selectedCharacterId && !isGameOver">
        <div class="character_zone" >
          <Character v-bind:id="selectedCharacterId" />
          <Bars v-bind:bar-type="'character'" 
                v-on:catch-knock-out="processKnockOut($event)"/>
        </div>
        <Versus v-on:venture-clicked="venture"
                v-on:fight-clicked="fight" />
        <div class="encounter_zone">
          <Encounter v-show="isCharacterVenturing" />
          <Bars v-bind:bar-type="'encounter'" 
                v-if="this.activeEncounterObject"
                v-on:catch-knock-out="processKnockOut($event)" />
          <div class="encounter_introduction" v-if="this.activeEncounterObject">
            A {{ this.activeEncounterObject.name }} appears. Will you fight it?
          </div>
        </div>
      </div>
      <div class="character_error" v-if="selectedCharacterId && isGameOver">Defeat! <br /> The Encounters were too strong and too many. </div>
      <div class="character_error" v-if="!selectedCharacterId">Please go back to the character select screen to select a character.</div>
    </div>
    <Controls v-on:back-clicked="goBack"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import constants from "@/data/constants.js";
import Character from "@/components/Character.vue";
import Bars from "@/components/Bars.vue";
import Encounter from "@/components/Encounter.vue";
import Versus from "@/components/Versus.vue";
import Controls from "@/components/Controls.vue";
import TitleBlock from "@/components/TitleBlock.vue";

export default {
  components: { Character, Bars, Encounter, Versus, Controls, TitleBlock },
  data() {
    return {
      constants,
      characterResourceObject: {
        damageTaken: 0,
        staminaSpent: 0
      },
      encounterResourceObject: {
        damageTaken: 0
      },
      resourcesReset: {
        characterResourcesReset: {
          damageTaken: 0,
          staminaSpent: 0
        },
        encounterResourcesReset: {
            damageTaken: 0
          }
      },
      randomEncounterNumber: null
    }
  },
  computed: {
    ...mapState([
      'selectedCharacterId',
      'selectedCharacterObject',
      'activeEncounterObject',
      'isCharacterVenturing',
      'characterBarsState',
      'wonEncounters',
      'isGameOver'
    ])
  },
  methods: {
    processKnockOut(data) {
      this.$store.commit('setCurrentFight', true);
      const _this = this;
      setTimeout( function() {
        _this.$store.commit('setCharacterVenturing', false);
        _this.$store.commit('setRandomEncounterNumber', { min: _this.constants.FIRST_ENCOUNTER_ID, max: _this.constants.LAST_ENCOUNTER_ID });
        if (data === 'encounter') {
            _this.$store.commit('setWonEncouners');
            _this.$store.commit('setActiveEncounter', null);
            _this.encounterResourceObject.damageTaken = 0;
            _this.$store.commit('updateBarsState', _this.resourcesReset.encounterResourcesReset);
          
        }
        if (data === 'character') {
          _this.$store.commit('setGameOver', true);
          _this.$store.commit('setActiveEncounter', null);
          _this.characterResourceObject.damageTaken = 0;
          _this.characterResourceObject.staminaSpent = 0;
          _this.$store.commit('updateBarsState', _this.resourcesReset.characterResourcesReset);
        }
        _this.$store.commit('setCurrentFight', false);
      }, 1000);  
    },
    fight() {
      const characterAttack = this.selectedCharacterObject.stats[2].value,
            characterDefense = this.selectedCharacterObject.stats[3].value,
            encounterAttack = this.activeEncounterObject.stats[2].value,
            encounterDefense = this.activeEncounterObject.stats[3].value;
      this.characterResourceObject.damageTaken += (encounterAttack - characterDefense);
      this.characterResourceObject.staminaSpent += this.selectedCharacterObject.skill.staminaCost;
      this.encounterResourceObject.damageTaken += (characterAttack - encounterDefense);
      let combinedResourceObject = {
        chracterResources: this.characterResourceObject,
        encounterResources: this.encounterResourceObject
      }
      this.$store.commit('updateBarsState', combinedResourceObject);
    },
    venture() {
      if(!this.isCharacterVenturing) {
        this.$store.commit('setCharacterVenturing', true);
      }
    },
    goBack() {
      this.$store.commit('setCharacterVenturing', false);
      this.$store.commit('setActiveEncounter', null);
      const resourceReset = {
        chracterResources: {
          damageTaken: 0,
          staminaSpent: 0
        },
        encounterResources: {
          damageTaken: 0
        }
      };
      this.$store.commit('updateBarsState', resourceReset);
      this.$store.commit('setGameOver', false);
      this.$store.commit('setWonEncouners', true);
      this.$store.commit('setRandomEncounterNumber', false);
      this.$router.push({name: 'StartPage'});
    }
  }
};
</script>