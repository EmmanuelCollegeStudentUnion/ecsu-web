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
        query Society($title: String!) {
          society(title:$title){
              title
              image {
                src
                srcset
              }
              body
            }
          }`,
      variables() {
        return {
          title: this.$route.params.title
        };
      }
    }
  }
};
</script>

<style>
</style>
