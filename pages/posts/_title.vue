<template>
  <section>
    <header>
      <h1>{{title}}</h1>
      <p>{{subtitle}}</p>
    </header>
    <img v-if="image" :src="image" width="300" alt class="shadow">
    <div v-html="body"/>
  </section>
</template>

<script>
import content from "@/content";
export default {
  layout: "default",
  asyncData: ({ params }) => content("posts", params.title)
};
</script>

<style>
</style>
