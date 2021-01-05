<template>
  <div class="inner_page character_select">
    <div class="inner_page_title_block">
      <h1 class="inner_page_title_text">Choose a Character</h1>
      <div class="title_buttons">
        <button class="button character_title_button">Create</button>
        <button class="button character_title_button character_reset"
                v-bind:disabled="!selectedCharacterId"
                v-on:click.prevent="setSelectedCharacter()">Reset</button>
      </div>
    </div>
    <div class="inner_field character_profiles">
      <Character
        v-for="character in characters"
        v-bind:key="character.id"
        v-bind:id="character.id"
        v-bind:selected="character.id === selectedCharacterId"
        v-on:character-selection="setSelectedCharacter($event)" />
    </div>
    <div class="inner_page_controls">
      <button v-on:click="goToClash"
              v-if="selectedCharacterId"
              class="button next_button">Next</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Character from "@/components/Character.vue";
import characters from "@/data/characters.js";
import constants from "@/data/constants.js";

export default {
  components: { Character },
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
