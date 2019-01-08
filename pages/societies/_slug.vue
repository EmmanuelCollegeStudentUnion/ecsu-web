<template>
  <PostPage v-if="society">
    <template slot="title">{{society.title}}</template>
    <template slot="media">
      <ImageCard v-if="!!society.image" :image="society.image"/>
    </template>
    <Markdown :html="society.body"/>
    <br>
    <nuxt-link to="/societies" class="mdc-button mdc-button--outlined back-button">&lt; Back to societies</nuxt-link>
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
  head() {
    return { title: this.society ? this.society.title : "Loading..." };
  },
  apollo: {
    society: {
      query: gql`
        query Society($slug: String!) {
          society(slug: $slug) {
            title
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
          slug: this.$route.params.slug
        };
      }
    }
  }
};
</script>

<style scoped>
.back-button {
  margin-top: 64px;
}
</style>

