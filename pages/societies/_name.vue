<template>
  <section>
    <header>
      <h1>{{title}}</h1>
    </header>
    <img v-if="image" :src="image" width="300" alt class="shadow">
    <div v-html="body"/>
  </section>
</template>

<script>
export default {
  layout: "default",
  asyncData: async ({ params }) => {
    const post = import("~/content/societies/" + params.name + ".md").then(
      ({ title, image, __content }) => ({
        title,
        image,
        body: __content
      })
    );
    return post;
  }
};
</script>

<style>
</style>
