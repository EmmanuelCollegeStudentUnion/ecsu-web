<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <h1>Your Message Has Been Sent!</h1>
    <img src="/images/tick.gif" width="100%">

    <p>
      <i>If your browser does not automatically redirect you, please click
        <nuxt-link to="/">here</nuxt-link>.
      </i>
    </p>
  </div>
</template>

<script>
import StandardPage from "@/components/StandardPage";
export default {
  components: { StandardPage }
};
</script>
