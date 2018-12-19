<template>
  <PostPage>
    <template slot="title">Pages for current students:</template>
    <ul>
      <li><nuxt-link to="/members/minutes">Minutes</nuxt-link></li>
      <li><nuxt-link to="/members/official_documents">Official documents</nuxt-link></li>
    </ul>
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
