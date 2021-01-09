<template>
  <div class="rules_container"
       v-bind:class="{ 'shown': isRulesShown }">
    <div class="rules_inner">
      <div class="rules_header">
        <span class="rules_header_text">Rules of Play</span>
        <button class="button rules_toggler_button rules_toggler_inner"
                v-on:click="$store.commit('setRulesShown', false)">x</button>
      </div>
      <ul class="rules_text">
        <li class="rules_item" 
            v-for="(rule, index) in rules" v-bind:key="index">{{ rule }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import rules from "@/data/rules.js";

export default {
  data() {
    return {
      rules
    }
  },
  computed: {
    ...mapState([
      'isRulesShown'
    ])
  }
};
</script>