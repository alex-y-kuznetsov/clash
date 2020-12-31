<template>
<div class="inner_page clash">
  <div class="inner_page_title_block">
    <h1 class="inner_page_title_text">Nope!</h1>
  </div>
    <div class="inner_field">
      <div class="character_error">You are lost, traveller. <br /> Try returning to where you started from</div>
    </div>
    <div class="inner_page_controls">
      <router-link v-bind:to="{name: 'StartPage'}" class="button">Like, here</router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>