<template>
  <div class="character_profile" 
       v-on:click.stop="selectCharacter()"
       v-bind:class="{ 'selected': isSelected, 'inactive': !isStartPage }">
    <div class="character_name">
      {{ currentCharacter.name }}
    </div>
    <div class="character_profile_data">
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
    </div>
    <div class="character_profile_items">
      <div class="character_stats_item" 
           v-for="(item, index) in currentCharacter.items"
           v-bind:key="index">
        <strong>Starting Item: </strong>
        <div class="character_inventory">
          <div class="inventory_item">
            <div class="inventory_item_visual">
              <img v-bind:src="item.img" />
            </div>
            <div class="inventory_item_stats">{{ item.name }} ({{ item.stats.summary }})</div>
          </div>
        </div>
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
    isStartPage() {
      return this.$route.name === 'StartPage';
    },
    currentCharacter() {
      return characters.find(character => character.id === this.characterId);
    }
  },
  methods: {
    selectCharacter() {
      if (this.isStartPage) {
        this.$emit('characterSelection', this.characterId)
      }
    }
  }
};
</script>