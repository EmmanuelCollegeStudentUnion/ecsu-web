<template>
  <PostPage v-if="whatsOn">
    <template slot="title">{{whatsOn.title}}</template>
    <template slot="subtitle">{{whatsOn.datetime}}</template>
    <template slot="media">
      <ImageCard v-if="whatsOn.image" :image="whatsOn.image"/>
    </template>
    <Markdown :html="whatsOn.body"/>
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
    whatsOn: {
      query: gql`
        query WhatsOn($title: String!) {
          whatsOn(title: $title) {
            title
            datetime
            image {
              src
              srcSet
              placeholder
              alt
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
  }
};
</script>

<style>
</style>
