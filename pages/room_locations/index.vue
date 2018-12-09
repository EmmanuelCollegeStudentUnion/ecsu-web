<template>
  <PostPage>
    <template slot="title">Room database</template>
    <li v-for="location in locations" v-bind:key="location.name">
      <nuxt-link :to="location.url" :title="location.title" v-text="location.title"></nuxt-link>
    </li>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
export default {
  components: { PostPage },
  layout: "default",
  asyncData: async ({ params }) => ({
    locations: await content("room_locations")
  })
};
</script>

<style>
</style>
