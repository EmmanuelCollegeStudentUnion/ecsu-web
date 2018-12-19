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
import { toGlobalId } from "graphql-relay";
export default {
  components: { PostPage, ImageCard, Markdown },

  apollo: {
    society: {
      query: gql`
        query Society($id: ID!) {
          society: node(id: $id) {
            ... on societies {
              title
              image {
                src
              }
              body
            }
          }
        }
      `,
      variables() {
        return {
          id: toGlobalId("societies", this.$route.params.name)
        };
      }
    }
  }
};
</script>

<style>
</style>
