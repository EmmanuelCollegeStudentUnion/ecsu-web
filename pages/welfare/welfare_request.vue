<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 page-content">
    <h1 class="mdc-typography--headline2">General welfare request</h1>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="/assets/php/welfare_request.php"
    >
      <mdc-textfield v-model="message" fullwidth label="Message" name="message"/>
      <p></p>
      <input
        class="mdc-button mdc-button--outlined mdc-ripple-upgraded"
        type="submit"
        value="Place Request"
      >
    </form>
  </div>
</template>

<script>
import { MDCTextField } from "@material/textfield";

import StandardPage from "@/components/StandardPage";
export default {
  components: { StandardPage },
  head: {
    title: "Welfare request"
  },
  data() {
    return { message: "" };
  }
};
</script>

<style lang="scss">
@import "vue-mdc-adapter/dist/textfield/styles";
</style>

