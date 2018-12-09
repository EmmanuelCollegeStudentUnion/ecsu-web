<template>
  <PostPage>
    <template slot="title">{{title}}</template>
    <template slot="subtitle">{{subtitle}}</template>
    <template slot="media">
      <ImageCard v-if="image" :image="image"/>
    </template>
    <Markdown :html="body"/>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import Markdown from "@/components/Markdown";
import ImageCard from "@/components/ImageCard";
export default {
  components: { PostPage, Markdown, ImageCard },
  asyncData: ({ params }) => content("posts", params.title)
};
</script>

<style>
</style>
