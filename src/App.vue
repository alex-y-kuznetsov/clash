<template>
  <div id="app">
    <Hello />
    <div class="home container">
      <router-view/>
    </div>
    <Rules />
  </div>
</template>

<script>
import Hello from "@/components/Hello.vue";
import Rules from "@/components/Rules.vue";

export default {
  components: { Hello, Rules }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap');
</style>
