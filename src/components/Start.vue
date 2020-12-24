<template>
  <div class="character_select">
    <div class="character_select_title_block">
      <h1 class="character_select_title">Choose A Character</h1>
      <div class="title_buttons">
        <button class="character_tittle_button">Create</button>
        <button class="character_tittle_button character_reset"
                v-bind:disabled="!selectedCharacter"
                v-on:click.prevent="selectedCharacter = null">Reset</button>
      </div>
    </div>
    <div class="character_profiles">
      <Character
        v-for="character in characters"
        v-bind:key="character.id"
        v-bind:id="character.id"
        v-bind:selected="character.id === selectedCharacter"
        v-on:characterSelection="setSelectedCharacter($event)"
      />
    </div>
  </div>
</template>

<script>
import Character from "@/components/Character.vue";
import characters from "@/data/characters.js";

export default {
  components: {
    Character,
  },
  data() {
    return {
      selectedCharacter: null,
      characters,
    };
  },
  methods: {
    setSelectedCharacter(id) {
      this.selectedCharacter = id;
    },
  },
};
</script>

<style scoped lang="less">
.character_select {
  padding: 20px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.character_select_title_block {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
.character_select_title {
  color: #42b983;
  text-align: left;
  margin: 0;
}
.character_tittle_button {
  border: 2px solid #42b983;
  padding: 5px;
  background-color: transparent;
  border-radius: 10px;
  height: 40px;
  align-self: center;
  color: #42b983;
  width: 200px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  &:focus {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: none;
  }
  &:hover {
    background-color: #42b983;
    color: #ffffff;
  }
}
.character_reset {
  border-color: tomato;
  color: tomato;
  margin-left: 10px;
  &:hover {
    background-color: tomato;
    color: #ffffff;
  }
  &:disabled {
    border-color: #cccccc;
    color: #cccccc;
    pointer-events: none;
  }
}
.character_profiles {
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin: auto;
  width: 100%;
}
</style>