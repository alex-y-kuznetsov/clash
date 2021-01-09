<template>
  <div class="inner_page_controls">
      <button class="button rules_toggler_button"
              v-if="!isRulesShown"
              v-on:click="$store.commit('setRulesShown', true)">?</button>
      <button v-on:click="$emit('to-clash-clicked')"
              v-if="pageName === 'StartPage' && selectedCharacterId"
              class="button transition_button">Next</button>
      <button v-on:click.prevent="$emit('back-clicked')" 
              v-if="pageName === 'ClashPage'"
              class="button transition_button">{{ isCharacterVenturing ? 'Retreat' : 'Back' }}</button>
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