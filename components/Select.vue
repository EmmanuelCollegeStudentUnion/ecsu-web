<template>
  <div ref="select" class="mdc-select">
    <i class="mdc-select__dropdown-icon"></i>
    <select class="mdc-select__native-control" @change="onChange">
      <slot/>
    </select>
    <label class="mdc-floating-label mdc-floating-label--float-above">Category</label>
    <div class="mdc-line-ripple"></div>
  </div>
</template>

<script>
import { MDCSelect } from "@material/select";
export default {
  mounted() {
    const mdcselect = new MDCSelect(this.$refs.select);
  },
  methods: {
    onChange(e) {
      this.$emit("change", e.target.value);
    }
  }
};
</script>


<style lang="scss">
@import "@material/select/mdc-select";
</style>
