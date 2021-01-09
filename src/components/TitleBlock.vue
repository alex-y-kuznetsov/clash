<template>
  <div class="inner_page_title_block">
      <h1 class="inner_page_title_text">{{ pageName }}</h1>
      <div class="title_buttons"
           v-if="pageName === 'Choose a Character'">
        <button class="button character_title_button"
                v-on:click="$emit('random-button-clicked')">Random</button>
        <button class="button character_title_button character_reset"
                v-bind:disabled="!selectedCharacterId"
                v-on:click.prevent="$emit('reset-button-clicked')">Reset</button>
      </div>
      <div class="title_statistics"
           v-if="pageName === 'Clash!'">
        {{ wonEncounters ? 'Encounters Won: ' + wonEncounters : ''}}
      </div>
    </div>
</template>

<script>
const destinations = {
  StartPage: 'Choose a Character',
  ClashPage: 'Clash!'
};

import { mapState } from "vuex";

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState([
      'selectedCharacterId',
      'wonEncounters'
    ]),
    pageName() {
      return destinations[this.$route.name];
    },
  }
}
</script>