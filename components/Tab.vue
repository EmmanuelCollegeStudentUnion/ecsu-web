<template>
  <button
    @click="click"
    ref="tab"
    class="mdc-tab"
    role="tab"
    aria-selected="true"
    tabindex="0"
  >
    <span class="mdc-tab__content">
      <span class="mdc-tab__text-label">
        <slot/>
      </span>
    </span>
    <span class="mdc-tab-indicator">
      <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
    </span>
    <span class="mdc-tab__ripple"></span>
  </button>
</template>


<script>
import { MDCTab } from "@material/tab";
export default {
  mounted() {
    this.tab = new MDCTab(this.$refs.tab);
  },
  methods: {
    click() {
      this.$emit("input");
    }
  }
};
</script>

<style lang="scss">
@import "@material/tab/mdc-tab";
@import "@material/tab-indicator/mdc-tab-indicator";
</style>
