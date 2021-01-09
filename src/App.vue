<template>
  <div id="app">
    <div class="home container">
      <router-view/>
    </div>
    <Rules />
  </div>
</template>

<script>
const destinations = {
  StartPage: 'Character Selection',
  ClashPage: 'Clash'
};

import Rules from "@/components/Rules.vue";

export default {
  components: { Rules },
  computed: {
    pageName() {
      return destinations[this.$route.name];
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap');
</style>
