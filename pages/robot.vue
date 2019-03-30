<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <h1 class="mdc-typography--headline2">Your Message Has Not Been Sent</h1>
    <div>We think you are a robot. If you are not then be sure to tick the 'I am not a robot' button. If you did this and still recieved this message contact the webmaster at webmaster@ecsu.org.uk</div>

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
    title: "Robot",
    robots: "noindex"
  },
  mounted() {
    this.$ga.event("forms", "robot");
  }
};
</script>

<style scoped>
.button-padding {
  padding: 16px;
  text-align: center;
}
</style>

