<template>
  <div ref="inputField" class="mdc-text-field text-field mdc-text-field--textarea">
    <textarea
      :name="this.name"
      class="mdc-text-field__input"
      :value="value||''"
      @input="input||null"
    ></textarea>
    <div class="mdc-notched-outline">
      <div class="mdc-notched-outline__leading"></div>
      <div class="mdc-notched-outline__notch">
        <label class="mdc-floating-label" for="text-field--textarea">{{label}}</label>
      </div>
      <div class="mdc-notched-outline__trailing"></div> 
    </div>
  </div>
</template>

<script>
import { MDCTextField } from "@material/textfield";
export default {
  props: ["label", "name", "value", "input"],
  mounted: function () {
    this.$nextTick(function () {
      if (this.$refs.inputField) {
        const textField = new MDCTextField(this.$refs.inputField);
      }
    })
  },
};
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field";
</style>
