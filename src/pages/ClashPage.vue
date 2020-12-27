<template>
  <div class="inner_page clash">
    <div class="inner_page_title_block">
      <h1 class="character_select_title">Clash!</h1>
      <div class="title_buttons">
      </div>
    </div>
    <div class="inner_field battlefield">
      <div class="character_zone" v-if="selectedCharacterId">
      <Character v-bind:id="selectedCharacterId" />
      <Bars />
      </div>
      <div class="character_error" v-if="!selectedCharacterId">Please go back to the character select screen to select a character</div>
    </div>
    <div class="inner_page_controls">
      <router-link v-bind:to="{ name: 'StartPage' }" class="button">Back</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Character from "@/components/Character.vue";
import Bars from "@/components/Bars.vue";

export default {
  components: { Character, Bars },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'selectedCharacterId',
      'selectedCharacterObject'
    ])
  }
};
</script>