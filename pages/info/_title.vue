<template>
  <PostPage>
    <template slot="title">{{title}}</template>
    <template slot="subtitle">{{subtitle}}</template>
    <template slot="media">
      <ImageCard :image="image"/>
    </template>
    <div v-html="body"/>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import ImageCard from "@/components/ImageCard";

export default {
  components: { PostPage, ImageCard },
  asyncData: ({ params }) => content("info", params.title)
};
</script>

<style>
</style>
