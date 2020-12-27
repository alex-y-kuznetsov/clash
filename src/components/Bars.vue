<template>
  <div class="bars">
    <div class="bar health_bar">
      <div class="bar_fill" v-bind:style="{ width: calculateRemainingBar(damageTaken, getBarValue('health')) }"></div>
      <span class="bar_number">{{ calculateRemainingBar(damageTaken, getBarValue('health')) }}</span>
    </div>
    <div class="bar stamina_bar">
      <div class="bar_fill" v-bind:style="{ width: calculateRemainingBar(staminaSpent, getBarValue('stamina')) }"></div>
      <span class="bar_number">{{ calculateRemainingBar(staminaSpent, getBarValue('stamina')) }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      damageTaken: 20,
      staminaSpent: 15
    }
  },
  computed: {
    ...mapState([
      'selectedCharacterObject'
    ])
  },
  methods: {
    calculateRemainingBar(valueLost, totalValue) {
      if (valueLost < 0) {
        return '100%';
      } else if (valueLost > totalValue) {
        return '0%';
      }
      return Math.round(100 - ((100 * valueLost) / totalValue)) + '%';
    },
    getBarValue(name) {
      const statsPath = this.selectedCharacterObject.stats;
      switch(name) {
        case 'health' : return statsPath[0].modifiedValue ? statsPath[0].modifiedValue : statsPath[0].value;
        case 'stamina' : return statsPath[1].modifiedValue ? statsPath[1].modifiedValue : statsPath[1].value;
      }
    }
  }
}
</script>