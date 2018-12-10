<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 page-content">
    <h1 class="mdc-typography--headline2">Anonymous Feedback</h1>
    <h5 class="mdc-typography--headline6">Send Your Messages to ECSU Anonymously</h5>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="../assets/php/form-to-feedback.php"
    >
      <div ref="inputField" class="mdc-text-field text-field mdc-text-field--textarea">
        <textarea id="text-field--textarea" class="mdc-text-field__input"></textarea>
        <label class="mdc-floating-label" for="text-field--textarea">Message</label>
      </div>
      <br>
      <input
        class="hero-button mdc-button mdc-button--outlined mdc-ripple-upgraded"
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
  mounted: function() {
    const r = this.$refs.inputField;
    const textField = new MDCTextField(r);
  }
};
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field";
</style>
