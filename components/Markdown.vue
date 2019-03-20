<template>
  <div v-html="html"/>
</template>



<script>
import MarkdownIt from "markdown-it";
var md = new MarkdownIt({
  linkify: true,
  typographer: true
});
export default {
  props: ["markdown"],
  computed: {
    html() {
      return md.render(this.markdown);
    }
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
