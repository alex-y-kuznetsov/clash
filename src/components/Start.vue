<template>
  <div class="character_select">
    <h1 class="character_select_title">Choose Your Character</h1>
    <div class="character_profiles">
      <Character v-bind:id="1" />
      <Character v-bind:id="2" />
      <Character v-bind:id="3" />
    </div>
  </div>
</template>

<script>
import Character from '@/components/Character.vue'

export default {
  components: {
    Character
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.character_select {
  padding: 20px 0;
}
.character_select_title {
  color: tomato;
}
.character_profiles {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
</style>