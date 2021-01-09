<template>
  <div class="inner_page_controls">
      <button class="button rules_toggler_button"
              v-bind:disabled="isRulesShown"
              v-if="pageName !== 'NotFoundPage'"
              v-on:click="$store.commit('setRulesShown', true)">?</button>
      <button v-on:click="$emit('to-clash-clicked')"
              v-if="pageName === 'StartPage' && selectedCharacterId"
              class="button transition_button">Next</button>
      <button v-on:click.prevent="$emit('back-clicked')" 
              v-if="pageName === 'ClashPage'"
              class="button transition_button">{{ isCharacterVenturing ? 'Retreat' : 'Back' }}</button>
      <router-link v-bind:to="{ name: 'StartPage' }"
                   v-if="pageName === 'NotFoundPage'"
                   class="button transition_button">Like, here</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState([
      'isRulesShown',
      'selectedCharacterId',
      'isCharacterVenturing'
    ]),
    pageName() {
      return this.$route.name;
    }
  }
}
</script>