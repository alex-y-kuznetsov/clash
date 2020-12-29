<template>
  <div class="inner_page clash">
    <div class="inner_page_title_block">
      <h1 class="character_select_title">Clash!</h1>
      <div class="title_statistics">
        {{ wonEncounters ? 'Encounters Won: ' + wonEncounters : ''}}
      </div>
    </div>
    <div class="inner_field">
      <div class="battlefield" v-if="selectedCharacterId">
        <div class="character_zone" >
          <Character v-bind:id="selectedCharacterId" />
          <Bars v-bind:bar-type="'character'" 
                v-on:catch-knock-out="processKnockOut($event)"/>
        </div>
        <div class="versus_sign">
          <span>VS</span>
          <button class="button" 
                  v-bind:class="{ 'button_exhausted' : !isCharacterReady }"
                  v-bind:disabled="!isCharacterReady"
                  v-if="isCharacterVenturing" 
                  v-on:click="fight">Fight</button>
          <button class="button" 
                  v-on:click.prevent="venture"
                  v-bind:disabled="isCharacterVenturing">{{ isCharacterVenturing ? 'Venturing' : 'Venture' }}</button>
        </div>
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
      <div class="character_error" v-if="!selectedCharacterId">Please go back to the character select screen to select a character</div>
    </div>
    <div class="inner_page_controls">
      <button v-on:click.prevent="goBack" class="button">{{ isCharacterVenturing ? 'Retreat' : 'Back' }}</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Character from "@/components/Character.vue";
import Bars from "@/components/Bars.vue";
import Encounter from "@/components/Encounter.vue";

export default {
  components: { Character, Bars, Encounter },
  data() {
    return {
      characterResourceObject: {
        damageTaken: 0,
        staminaSpent: 0
      },
      encounterResourceObject: {
        damageTaken: 0
      }
    }
  },
  computed: {
    ...mapState([
      'selectedCharacterId',
      'selectedCharacterObject',
      'isCharacterVenturing',
      'activeEncounterObject',
      'characterBarsState',
      'wonEncounters'
    ]),
    isCharacterReady() {
      return this.characterBarsState.staminaSpent < this.selectedCharacterObject.stats[1].value
    }
  },
  methods: {
    processKnockOut(data) {
      console.log(data + ' is out');
      if (data === 'encounter') {
        this.$store.commit('countWonEncouners');
        this.$store.commit('setCharacterVenturing', false);
        this.$store.commit('setActiveEncounter', null);
        const encounterResourcesReset = {
          encounterResources: {
            damageTaken: 0
          }
        };
        this.encounterResourceObject.damageTaken = 0;
        this.$store.commit('updateBarsState', encounterResourcesReset);
      }
      if (data === 'character') {
        this.$store.commit('setGameOver');
        this.$store.commit('setCharacterVenturing', false);
        this.$store.commit('setActiveEncounter', null);
        const characterResourcesReset = {
          characterResources: {
            damageTaken: 0,
            staminaSpent: 0
          }
        };
        this.characterResourceObject.damageTaken = 0;
        this.characterResourceObject.staminaSpent = 0;
        this.$store.commit('updateBarsState', characterResourcesReset);
      }
    },
    fight() {
      this.characterResourceObject.damageTaken += this.activeEncounterObject.stats[2].value;
      this.characterResourceObject.staminaSpent += this.selectedCharacterObject.skill.staminaCost;
      this.encounterResourceObject.damageTaken += this.selectedCharacterObject.stats[2].value;
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
      this.$router.push({name: 'StartPage'});
    }
  }
};
</script>