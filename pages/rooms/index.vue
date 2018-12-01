<template>
  <section>
    <header>
      <h1>Room database</h1>
    </header>

    <li v-for="location in locations" v-bind:key="location.name">
      <nuxt-link :to="location.url" :title="location.title" v-text="location.title"></nuxt-link>
    </li>
  </section>
</template>

<script>
import content from "@/content";
export default {
  layout: "default",
  asyncData: async ({ params }) => ({
    locations: await content("room_locations")
  })
};
</script>

<style>
</style>
