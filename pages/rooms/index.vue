<template>
  <section>
    <header>
      <h1>Room database</h1>
    </header>

    <li v-for="room in rooms" v-bind:key="room.name">
      <nuxt-link :to="room.url" :title="room.title" v-text="room.title"></nuxt-link>
    </li>
  </section>
</template>

<script>
import content from "@/content";
export default {
  layout: "default",
  asyncData: async ({ params }) => ({
    rooms: await content("rooms")
  })
};
</script>

<style>
</style>
