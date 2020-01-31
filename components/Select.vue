<template>
  <div ref="select" class="mdc-select">
    <i class="mdc-select__dropdown-icon"></i>
    <select class="mdc-select__native-control" @input="onChange" :name="name">
      <slot/>
    </select>
    <label class="mdc-floating-label mdc-floating-label--float-above">Category</label>
    <div class="mdc-line-ripple"></div>
  </div>
</template>

<script>
import { MDCSelect } from "@material/select";
export default {
  props: ["name", "value"],
  mounted() {
    const mdcselect = new MDCSelect(this.$refs.select);
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>


<style lang="scss">
</style>
