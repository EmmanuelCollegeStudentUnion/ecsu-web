<template>
  <PostPage v-if="society">
    <template slot="title">{{society.title}}</template>
    <template slot="media">
      <ImageCard v-if="!!society.image" :image="society.image"/>
    </template>
    <Markdown :html="society.body"/>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import ImageCard from "@/components/ImageCard";
import Markdown from "@/components/Markdown";
import gql from "graphql-tag";
export default {
  components: { PostPage, ImageCard, Markdown },
  apollo: {
    society: {
      query: gql`
        query Society($slug: String!) {
          society(slug: $slug) {
            title
            image {
              src
              srcSet
            }
            body
          }
        }
      `,
      variables() {
        return {
          slug: this.$route.params.slug
        };
      }
    }
  }
};
</script>

<style>
</style>
