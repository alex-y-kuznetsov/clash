<template>
  <div class="inner_page clash">
    <div class="inner_page_title_block">
      <h1 class="character_select_title">Clash!</h1>
      <div class="title_buttons">
      </div>
    </div>
    <div class="inner_field">
      <div class="battlefield" v-if="selectedCharacterId">
        <div class="character_zone" >
          <Character v-bind:id="selectedCharacterId" />
          <Bars />
        </div>
        <div class="versus_sign">
          <span>VS</span>
          <button class="button" v-if="isCharacterVenturing" v-on:click="fight">Fight</button>
          <button class="button" v-on:click.prevent="venture"
                  v-bind:disabled="isCharacterVenturing">{{ isCharacterVenturing ? 'Venturing' : 'Venture' }}</button>
        </div>
        <div class="encounter_zone">
          <Encounter v-show="isCharacterVenturing" />
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
      resourceObject: {
        damageTaken: 0,
        staminaSpent: 0
      }
    }
  },
  computed: {
    ...mapState([
      'selectedCharacterId',
      'selectedCharacterObject',
      'isCharacterVenturing',
      'activeEncounterObject'
    ])
  },
  methods: {
    fight() {
      this.resourceObject.damageTaken += this.activeEncounterObject.stats[2].value;
      this.resourceObject.staminaSpent += this.selectedCharacterObject.skill.staminaCost;
      this.$store.commit('updateBarsState', this.resourceObject);
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
        damageTaken: 0,
        staminaSpent: 0
      };
      this.$store.commit('updateBarsState', resourceReset);
      this.$router.push({name: 'StartPage'});
    }
  }
};
</script>