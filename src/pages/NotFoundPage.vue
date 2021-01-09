<template>
  <div class="inner_page clash">
    <TitleBlock />
    <div class="inner_field">
      <div class="character_error">You are lost, traveller. <br /> Try returning to where you started from</div>
    </div>
    <Controls />
  </div>
</template>

<script>
import Controls from "@/components/Controls.vue";
import TitleBlock from "@/components/TitleBlock.vue";

export default {
  components: { TitleBlock, Controls }
}
</script>