<template>
  <PostPage>
    <template slot="title">{{location.title}}</template>
    <li v-for="room in rooms" :key="room.name">
      <nuxt-link :to="room.url" :title="room.title" v-text="room.title"></nuxt-link>
    </li>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
export default {
  components: { PostPage },
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
