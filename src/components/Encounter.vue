<template>
  <div class="character_profile encounter_profile">
    <div class="character_name">
      {{ currentEncounter.name }}
    </div>
    <div class="character_profile_data">
      <div class="character_profile_image">
        <img v-bind:src="currentEncounter.img" />
      </div>
      <div class="character_profile_stats">
        <div class="character_stats_item" 
            v-for="(stat, index) in currentEncounter.stats"
            v-bind:key="index"
            v-bind:class="stat.name.toLowerCase()">
          <span>{{ stat.name }}: </span>
          <span class="stats_value">{{ stat.value }}</span>
        </div>
      </div>
    </div>
    <div class="character_profile_summary">
      {{ currentEncounter.bio }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import encounters from '@/data/encounters.js'

export default {
  data() {
    return {

    }
  },
  watch: {
    isCharacterVenturing() {
      if (this.$store.state.isCharacterVenturing) {
        this.$store.commit('setActiveEncounter', this.currentEncounter);
      }
    }
  },
  computed: {
    ...mapState([
      'isCharacterVenturing'
    ]),
    currentEncounter() {
      return encounters.find(encounter => encounter.id === 1)
    }
  }
}
</script>