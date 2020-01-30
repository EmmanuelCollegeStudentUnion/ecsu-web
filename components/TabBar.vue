<template>
  <div ref="tabBar" class="mdc-tab-bar" role="tablist">
    <div class="mdc-tab-scroller">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MDCTabBar } from "@material/tab-bar";
export default {
  mounted() {
    this.tabBar = new MDCTabBar(this.$refs.tabBar);
    this.tabBar.activateTab(0);
  }
};
</script>

<style lang="scss">
@import "@material/tab-bar/mdc-tab-bar";
@import "@material/tab-scroller/mdc-tab-scroller";
</style>

