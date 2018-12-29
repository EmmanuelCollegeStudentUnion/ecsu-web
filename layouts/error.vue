<template>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell--span-12">
      <h1 class="mdc-typography--headline4">Something went wrong. Try refreshing the page</h1>
      <a href="/">Home page</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    if (this.$store.state.cookies.consent) {
      this.rollbar.error(this.error.message);
    }
  },
  props: ["error"]
};
</script>

