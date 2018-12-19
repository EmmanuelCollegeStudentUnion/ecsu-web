<template>
  <div class="markdown" v-html="html"></div>
</template>

<script>
export default {
  props: ["html"]
};
</script>
<style>
.markdown>h1{
  font-weight: 400;
}
.markdown>h2{
  font-weight: 400;
}
</style>
