<template>
  <div class="inner_page character_select">
    <div class="inner_page_title_block">
      <h1 class="character_select_title">Choose a Character</h1>
      <div class="title_buttons">
        <button class="button character_title_button">Create</button>
        <button class="button character_title_button character_reset"
                v-bind:disabled="!selectedCharacter"
                v-on:click.prevent="setSelectedCharacter()">Reset</button>
      </div>
    </div>
    <div class="inner_field character_profiles">
      <Character
        v-for="character in characters"
        v-bind:key="character.id"
        v-bind:id="character.id"
        v-bind:selected="character.id === selectedCharacter"
        v-on:characterSelection="setSelectedCharacter($event)"
      />
    </div>
    <div class="inner_page_controls">
      <router-link v-bind:to="{name: 'ClashPage'}" 
                  v-if="selectedCharacter"
                  class="button next_button">Next</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Character from "@/components/Character.vue";
import characters from "@/data/characters.js";

export default {
  components: { Character },
  data() {
    return {
      characters,
    };
  },
  computed: {
    ...mapState({
      selectedCharacter: 'selectedCharacter'
    })
  },
  methods: {
    setSelectedCharacter(id) {
      let data = id || null;
      this.$store.commit('updateSelectedCharacter', data);
    },
  },
};
</script>
