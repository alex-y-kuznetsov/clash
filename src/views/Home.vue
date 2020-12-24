<template>
  <div class="home container">
    <Start />
  </div>
</template>

<script>
import Start from '@/components/Start.vue'

export default {
  name: 'Home',
  components: {
    Start
  }
}
</script>

<style scoped lang="less">
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
