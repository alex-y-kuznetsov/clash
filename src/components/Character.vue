<template>
  <div class="character_profile" 
       v-on:click.stop="selectCharacter()"
       v-bind:class="{ 'selected': isSelected, 'inactive': !isStartPage }">
    <div class="character_name">
      {{ currentCharacter.name }}
    </div>
    <div class="character_profile_data">
      <div class="character_profile_image">
        <img v-bind:src="constants.PROJ_PATH + currentCharacter.img" />
      </div>
      <div class="character_profile_stats">
        <div class="character_stats_item" 
            v-for="(stat, index) in currentCharacter.stats"
            v-bind:key="index"
            v-bind:class="stat.name.toLowerCase()">
          <span>{{ stat.name }}: </span>
          <span class="stats_value">{{ stat.value }} {{ stat.name === modifiedStatData.name ? '(' + +modifiedStatData.value + ')' : '' }}</span>
        </div>
      </div>
    </div>
    <div class="character_profile_arsenal">
      <div class="character_stats_item">
        <strong>Item: </strong>
        <div class="character_resourses">
          <div class="resourses_item">
            <div class="resourses_item_visual">
              <img v-bind:src="constants.PROJ_PATH + currentCharacter.item.img" />
            </div>
            <div class="resourses_item_stats">
              {{ currentCharacter.item.name }} <br /> ({{ currentCharacter.item.summary }})
            </div>
          </div>
        </div>
      </div>
      <div class="character_stats_item">
        <strong>Skill: </strong>
        <div class="character_resourses">
          <div class="resourses_item">
            <div class="resourses_item_visual">
              <img v-bind:src="constants.PROJ_PATH + currentCharacter.skill.img" />
            </div>
            <div class="resourses_item_stats">
              {{ currentCharacter.skill.name }} <br /> ({{ currentCharacter.skill.summary }})
            </div>
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
import characters from '@/data/characters.js';
import constants from '@/data/constants.js'

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
      constants,
      characterId: this.id,
      modifiedStatData: null
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
    },
  },
  methods: {
    selectCharacter() {
      if (this.isStartPage) {
        this.$emit('character-selection', this.characterId)
      }
    },
    getModifiedStat() {
      let modifiedStat = this.currentCharacter.stats.find(stat => stat.name === this.currentCharacter.item.modifier);
      this.currentCharacter.stats.forEach(stat => {
        if (stat === modifiedStat) {
          this.modifiedStatData = {
            name: modifiedStat.name,
            value: modifiedStat.value + this.currentCharacter.item.modifierValue
          }
        }   
      })
    }
  },
  created() {
    this.getModifiedStat();
  }
};
</script>