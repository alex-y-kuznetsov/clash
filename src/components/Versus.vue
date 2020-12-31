<template>
  <div class="versus_sign">
    <span>VS</span>
    <button class="button" 
            v-bind:class="{ 'button_exhausted' : !isCharacterReady }"
            v-bind:disabled="!isCharacterReady || isCurrentFight"
            v-if="isCharacterVenturing" 
            v-on:click="$emit('fight-clicked')">{{isCurrentFight ? 'Fighting' : 'Fight' }}</button>
    <button class="button" 
            v-on:click.prevent="$emit('venture-clicked')"
            v-bind:disabled="isCharacterVenturing">{{ isCharacterVenturing ? 'Venturing' : 'Venture' }}</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState([
      'isCharacterReady',
      'isCharacterVenturing',
      'isCurrentFight'
    ]),
    ...mapGetters([
      'isCharacterReady'
    ])
  }
}
</script>