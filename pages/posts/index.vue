<template>
  <PostPage>
    <template slot="title">Latest posts</template>
    <template slot="subtitle">{{subtitle}}</template>
    <template slot="media">
      <ImageCard v-if="!!image" :image="image"/>
    </template>
    <ul>
      <li v-for="post in posts" v-bind:key="post.name">
        <a v-bind:href="post.url" v-bind:title="post.title">{{post.title}}</a>
      </li>
    </ul>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import ImageCard from "@/components/ImageCard";
export default {
  components: { PostPage, ImageCard },
  asyncData: async ({ params }) => ({
    posts: await content("posts")
  })
};
</script>