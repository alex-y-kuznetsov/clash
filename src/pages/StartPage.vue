<template>
  <div class="character_select">
    <div class="character_select_title_block">
      <h1 class="character_select_title">Choose A Character</h1>
      <div class="title_buttons">
        <button class="button character_title_button">Create</button>
        <button class="button character_title_button character_reset"
                v-bind:disabled="!selectedCharacter"
                v-on:click.prevent="selectedCharacter = null">Reset</button>
      </div>
    </div>
    <div class="character_profiles">
      <Character
        v-for="character in characters"
        v-bind:key="character.id"
        v-bind:id="character.id"
        v-bind:selected="character.id === selectedCharacter"
        v-on:characterSelection="setSelectedCharacter($event)"
      />
    </div>
    <div class="character_select_controls">
      <router-link v-bind:to="{name: 'ClashPage'}" 
                  v-if="selectedCharacter"
                  class="button next_button">Next</router-link>
    </div>
  </div>
</template>

<script>
import Character from "@/components/Character.vue";
import characters from "@/data/characters.js";

export default {
  components: {
    Character,
  },
  data() {
    return {
      selectedCharacter: null,
      characters,
    };
  },
  methods: {
    setSelectedCharacter(id) {
      this.selectedCharacter = id;
      this.$store.commit('updateSelectedCharacter', id);
    },
  },
};
</script>
