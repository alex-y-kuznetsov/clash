<template>
  <div class="inner_page character_select">
    <TitleBlock v-on:random-button-clicked="chooseRandomCharacter"
                v-on:reset-button-clicked="setSelectedCharacter"/>
    <div class="inner_field character_profiles">
      <Character
        v-for="character in characters"
        v-bind:key="character.id"
        v-bind:id="character.id"
        v-bind:selected="character.id === selectedCharacterId"
        v-on:character-selection="setSelectedCharacter($event)" />
    </div>
    <Controls v-on:to-clash-clicked="goToClash"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Character from "@/components/Character.vue";
import Controls from "@/components/Controls.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import characters from "@/data/characters.js";
import constants from "@/data/constants.js";
import randomNumber from '@/helpers/randomNumber.js';

export default {
  components: { Character, Controls, TitleBlock },
  data() {
    return {
      characters,
      constants
    };
  },
  computed: {
    ...mapState([
      'selectedCharacterId'
    ])
  },
  methods: {
    chooseRandomCharacter() {
      this.setSelectedCharacter(randomNumber(this.constants.FIRST_CHARACTER_ID, this.constants.LAST_CHARACTER_ID))
    },
    goToClash() {
      this.$store.commit('setRandomEncounterNumber', { min: this.constants.FIRST_ENCOUNTER_ID, max: this.constants.LAST_ENCOUNTER_ID })
      this.$router.push({name: 'ClashPage'});
    },
    setSelectedCharacter(id) {
      let dataObject = this.characters.find(character => character.id === id) || null;
      if (dataObject) {
        let modifiedStat = dataObject.stats.find(stat => stat.name === dataObject.item.modifier);
        dataObject.stats.forEach(stat => {
          if (stat === modifiedStat) {
            stat.modifiedValue = modifiedStat.value + dataObject.item.modifierValue
          }   
        })
      }
      this.$store.commit('updateSelectedCharacter', dataObject);
    }
  },
};
</script>
