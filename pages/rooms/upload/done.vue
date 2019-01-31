<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <h1 class="mdc-typography--headline2">Your file has been uploaded</h1>
    <div class="button-padding">
      <nuxt-link to="/room_locations" class="mdc-fab mdc-fab--extended">
        <span class="mdc-fab__label">Back to room database</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Photo uploaded"
  }
};
</script>

<style scoped>
.button-padding {
  padding: 16px;
  text-align: center;
}
</style>

