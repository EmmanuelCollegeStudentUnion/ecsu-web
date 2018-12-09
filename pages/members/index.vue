<template>
  <PostPage>
    <template slot="title">Members section</template>
    <template slot="subtitle">{{subtitle}}</template>
  </PostPage>
</template>

<script>
import PostPage from "@/components/PostPage";
import ImageCard from "@/components/ImageCard";

export default {
  components: {
    PostPage,
    ImageCard
  }
};
</script>

<style>
</style>
