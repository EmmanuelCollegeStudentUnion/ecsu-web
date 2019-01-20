<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <h1 class="mdc-typography--headline2">Request a pregnancy kit</h1>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="/assets/php/pregnancytest.php"
    >
      <div ref="inputField" class="mdc-text-field mdc-text-field--textarea text-field">
        <textarea name="message" id="text-field--textarea" class="mdc-text-field__input">
          I would like to request a pregnancy kit.
          </textarea>
        <div class="mdc-notched-outline">
          <div class="mdc-notched-outline__leading"></div>
          <div class="mdc-notched-outline__notch">
            <label
              class="mdc-floating-label mdc-floating-label--float-above"
              for="text-field--textarea"
            >Message</label>
          </div>
          <div class="mdc-notched-outline__trailing"></div>
        </div>
      </div>
      <br>
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
    title: "Pregnancy kit"
  },
  mounted: function() {
    const r = this.$refs.inputField;
    const textField = new MDCTextField(r);
  }
};
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field";
.text-field {
  width: 100%;
  margin: 16px;
}
</style>
