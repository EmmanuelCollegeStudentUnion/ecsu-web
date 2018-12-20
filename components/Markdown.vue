<template>
  <div class="markdown" v-html="html"></div>
</template>



<script>
export default {
  props: ["html"]
};
</script>

<style lang="scss">
@import "@material/typography/mdc-typography";
.markdown>h1{
  @extend .mdc-typography--headline4;
}
.markdown>h2{
  @extend .mdc-typography--headline5;
}
</style>
