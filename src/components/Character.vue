<template>
  <div class="character_profile" 
       v-on:click.stop="selectCharacter()"
       v-bind:class="{ 'selected': isSelected }">
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
    <div class="character_profile_items">
      <div class="character_stats_item" 
           v-for="(item, index) in currentCharacter.items"
           v-bind:key="index">
        <strong>Starting Items: </strong>
        <span>{{ item.name }} (x{{ item.amount }})</span>
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
    },
    selected: {
      type: Boolean
    }
  },
  data() {
    return {
      characterId: this.id
    };
  },
  computed: {
    isSelected() {
      return this.selected
    },
    currentCharacter() {
      return characters.find(character => character.id === this.characterId);
    }
  },
  methods: {
    selectCharacter() {
      this.$emit('characterSelection', this.characterId)
    }
  }
};
</script>

<style scoped lang="less">
.character_profile {
  margin: 0 10px;
  width: 220px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid #42b983;
  border-radius: 10px;
  cursor: pointer;

  &.selected {
    box-shadow: #FFF 0 -1px 4px, 
    #ff0 0 -2px 10px, 
    #ff8000 0 -10px 20px, 
    red 0 -18px 40px, 
    5px 5px 15px 5px rgba(0,0,0,0);
  }
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
.character_profile_stats,
.character_profile_items {
  margin-bottom: 10px;
}
.character_stats_item {
  margin-bottom: 5px;
}
</style>