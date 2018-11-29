<template>
  <div>
    <header>
      <h1>{{title}}</h1>
    </header>
    <img v-if="image" :src="image" width="300" alt class="shadow">
    <div v-html="body"/>
  </div>
</template>

<script>
export default {
  layout: "default",
  asyncData: async ({ params }) => {
    let post = await import("~/content/societies/" + params.name + ".md");
    post.body = post["__content"];
    return post;
  }
};
</script>

<style>
</style>
