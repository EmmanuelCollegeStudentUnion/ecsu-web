<template>
  <PostPage>
    <template slot="title">{{title}}</template>
    <template slot="subtitle">{{subtitle}}</template>
    <template slot="media">
      <ImageCard v-if="!!image" :image="image"/>
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
  layout: "default",
  asyncData: ({ params }) => content("societies", params.name)
};
</script>

<style>
</style>
