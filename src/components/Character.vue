<template>
  <div class="character_profile">
    <div class="character_name">
      {{ currentCharacter.name }}
    </div>
    <div class="character_profile_image">
      <img v-bind:src="currentCharacter.img" />
    </div>
    <div class="character_profile_stats">
      <div class="character_stats_item" 
           v-for="(stat, index) in currentCharacter.stats"
           v-bind:key="index">
        <strong>{{ stat.name }}: </strong>
        <span>{{ stat.value }}</span>
      </div>
    </div>
    <div class="character_profile_summary">
      {{ currentCharacter.bio }}
    </div>
  </div>
</template>

<script>
import characters from '@/data/characters.js'

export default {
  props: {
    id: {
      type: Number
    }
  },
  data() {
    return {
      characterId: this.id,
    };
  },
  computed: {
    currentCharacter() {
      return characters.find(character => character.id === this.characterId);
    }
  }
};
</script>

<style scoped lang="less">
.character_profile {
  margin: 0 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
}
.character_name {
  font-weight: bold;
  margin-bottom: 10px;
}
.character_profile_image {
  width: 190px;
  height: 160px;
  margin: 0 auto 10px auto;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.character_profile_stats {
  margin-bottom: 10px;
}
.character_stats_item {
  margin-bottom: 5px;
}
</style>