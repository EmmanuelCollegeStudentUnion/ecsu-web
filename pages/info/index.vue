<template>
  <PostPage>
    <template slot="title">Informational pages:</template>
    <li v-for="post in info" v-bind:key="post.name">
      <nuxt-link :to="post.url">{{post.title}}</nuxt-link>
    </li>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
export default {
  layout: "default",
  components: { PostPage },
  asyncData: async ({ params }) => ({
    info: await content("info")
  })
};
</script>