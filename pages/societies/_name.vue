<template>
  <section>
    <header>
      <h1>{{title}}</h1>
    </header>
    <img v-if="image" :src="image" width="300" alt style="float:right">
    <div v-html="body"/>
  </section>
</template>

<script>
import content from "@/content";
export default {
  layout: "default",
  asyncData: ({ params }) => content("societies", params.name)
};
</script>

<style>
</style>
