<template>
  <div class="markdown" v-html="html"/>
</template>



<script>
import MarkdownIt from "markdown-it";
var md = new MarkdownIt({
  linkify: true,
  typographer: true,
  breaks: true,
});


md.renderer.rules.hardbreak = function (tokens, idx, options) {
  return md.options.xhtmlOut ? '<br /><div class="linebreak"></div>\n' : '<br><div class="linebreak"></div>\n';
};

md.renderer.rules.softbreak = function (tokens, idx, options) {
  return md.options.xhtmlOut ? '<br /><div class="linebreak"></div>\n' : '<br><div class="linebreak"></div>\n';
};


/*
var escapeHtml = require("markdown-it/lib/common/utils").escapeHtml;

md.renderer.rules.text = function (tokens, idx) {
  var out = escapeHtml(tokens[idx].content);
  out = out.replace("</p>", "</p><br/>");
  return out;
};
*/

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
@import "@/assets/scss/typography.scss";
@import '@material/typography/mdc-typography';

.markdown > h1 {
  @extend .mdc-typography--headline3;
  margin-bottom: 1.50rem;
}
.markdown > h2 {
  @extend .mdc-typography--headline4;
  margin-bottom: 1.25rem;
}
.markdown > h3 {
  @extend .mdc-typography--headline5;
  margin-bottom: 1.25rem;
}

.markdown > p {
  margin-bottom: 1.0rem;
}

.markdown > .linebreak {
  margin-bottom: 0.5rem;
}
</style>
