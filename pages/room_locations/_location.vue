<template>
  <section>
    <header>
      <h1>{{location.title}}</h1>
    </header>

    <li v-for="room in rooms" :key="room.name">
      <nuxt-link :to="room.url" :title="room.title" v-text="room.title"></nuxt-link>
    </li>
  </section>
</template>

<script>
import content from "@/content";
export default {
  asyncData: async ({ params }) => {
    const location = await content("room_locations", params.location);
    return {
      location,
      rooms: (await content("rooms")).filter(x => {
        return x.location == location.title;
      })
    };
  }
};
</script>

<style>
</style>
