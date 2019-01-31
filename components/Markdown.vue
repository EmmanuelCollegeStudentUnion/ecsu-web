<template>
  <VueMarkdown class="markdown">{{markdown}}</VueMarkdown>
</template>



<script>
import VueMarkdown from "vue-markdown";

export default {
  props: ["markdown"],
  components: {
    VueMarkdown
  }
};
</script>

<style lang="scss">
@import "@material/typography/mdc-typography";
.markdown > h1 {
  @extend .mdc-typography--headline4;
}
.markdown > h2 {
  @extend .mdc-typography--headline5;
}
</style>
