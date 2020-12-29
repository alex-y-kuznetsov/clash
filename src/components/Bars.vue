<template>
  <div class="bars">
    <div class="bar health_bar">
      <div class="bar_fill" v-bind:style="{ width: calculateRemainingBar(pathToDamageTaken, getBarValue('health')) }"></div>
      <span class="bar_number">{{ calculateRemainingBar(pathToDamageTaken, getBarValue('health'), true) }}</span>
    </div>
    <div class="bar stamina_bar" v-if="barType === 'character'">
      <div class="bar_fill" v-bind:style="{ width: calculateRemainingBar(characterBarsState.staminaSpent, getBarValue('stamina')) }"></div>
      <span class="bar_number">{{ calculateRemainingBar(characterBarsState.staminaSpent, getBarValue('stamina')) }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    barType: {
      type: String
    }
  },
  data() {
    return {
      currentBarType: this.barType
    }
  },
  computed: {
    ...mapState([
      'selectedCharacterObject',
      'activeEncounterObject',
      'characterBarsState',
      'encounterBarsState'
    ]),
    pathToDamageTaken() {
      return this.currentBarType === 'character' ? this.characterBarsState.damageTaken : this.encounterBarsState.damageTaken;
    }
  },
  methods: {
    calculateRemainingBar(valueLost, totalValue, isBarFlag) {
      if (valueLost < 0) {
        return '100%';
      } else if (valueLost >= totalValue) {
        if (isBarFlag) {
          this.$emit('catch-knock-out', this.currentBarType);
        }
        return '0%';
      }
      return Math.round(100 - ((100 * valueLost) / totalValue)) + '%';
    },
    getBarValue(name) {
      if (this.currentBarType === 'character') {
        const statsPath =  this.selectedCharacterObject.stats;
        switch(name) {
          case 'health' : return statsPath[0].modifiedValue ? statsPath[0].modifiedValue : statsPath[0].value;
          case 'stamina' : return statsPath[1].modifiedValue ? statsPath[1].modifiedValue : statsPath[1].value;
        }
      } else if (this.currentBarType === 'encounter') {
        const statsPath =  this.activeEncounterObject.stats;
        return statsPath[0].modifiedValue ? statsPath[0].modifiedValue : statsPath[0].value;
      }
    }
  }
}
</script>