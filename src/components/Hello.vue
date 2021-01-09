<template>
  <div class="hello_screen"
       v-bind:class="{ 'shown': isHelloScreenShown }">
    <h1 class="hello_title">Welcome to Clash!</h1>
    <button class="button hello_start_button"
            v-on:click="isHelloScreenShown = false">Start Game</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHelloScreenShown: true
    }
  }
}
</script>