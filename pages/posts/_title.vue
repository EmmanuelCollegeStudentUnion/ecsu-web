<template>
  <PostPage v-if="post">
    <template slot="title">{{post.title}}</template>
    <template slot="subtitle">{{post.subtitle}}</template>
    <template slot="media">
      <ImageCard v-if="post.image" :image="post.image"/>
    </template>
    <Markdown :html="post.body"/>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import Markdown from "@/components/Markdown";
import ImageCard from "@/components/ImageCard";
import gql from "graphql-tag";

export default {
  components: { PostPage, Markdown, ImageCard },
  apollo: {
    post: {
      query: gql`
        query Post($title: String!) {
          post(title: $title) {
              title              
              image {
                src
              }
              body
            
          }
        }
      `,
      variables() {
        return {
          title: this.$route.params.title
        };
      }
    }
  },
};
</script>

<style>
</style>
