<template>
  <div>
    <no-ssr>
      <span :data-ga-enabled="gaEnabled"/>
    </no-ssr>
  </div>
</template>

<script>
export default {
  computed: {
    gaEnabled() {
      const consent = this.$store.state.cookies.consent;
      if (this.$ga) {
        if (consent === true) {
          this.$ga.enable();
        } else {
          this.$ga.disable();
        }
      } else {
        return false;
      }
      return consent;
    }
  }
};
</script>

<style>
</style>
