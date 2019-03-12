<template>
  <div ref="inputField" class="mdc-text-field text-field mdc-text-field--textarea">
    <textarea
      :name="this.name"
      class="mdc-text-field__input"
      :value="value||''"
      @input="input||null"
    ></textarea>
    <label class="mdc-floating-label" for="text-field--textarea">{{label}}</label>
  </div>
</template>

<script>
import { MDCTextField } from "@material/textfield";
export default {
  props: ["label", "name", "value", "input"],
  mounted: function() {
    const r = this.$refs.inputField;
    const textField = new MDCTextField(r);
  }
};
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field";
</style>
