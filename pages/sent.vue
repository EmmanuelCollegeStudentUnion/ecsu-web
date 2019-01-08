<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <h1 class="mdc-typography--headline2">Your Message Has Been Sent!</h1>
    <img :src="tickImage" width="100%">

    <div class="button-padding">
      <nuxt-link to="/" class="mdc-fab mdc-fab--extended">
        <span class="mdc-fab__label">Return home</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import StandardPage from "@/components/StandardPage";
export default {
  components: { StandardPage },
  head: {
    title: "Message Sent"
  },
  computed: {
    tickImage() {
      return require("@/assets/images/site/tick.gif");
    }
  }
};
</script>

<style scoped>
.button-padding {
  padding: 16px;
  text-align: center;
}
</style>

