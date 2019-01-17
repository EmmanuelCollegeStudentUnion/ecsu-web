<template>
  <PostPage v-if="whatsOn">
    <template slot="title">{{whatsOn.title}}</template>
    <template slot="subtitle">{{whatsOn.datetime}}</template>
    <template slot="media">
      <ImageCard v-if="whatsOn.image" :image="whatsOn.image"/>
    </template>
    <Markdown :html="whatsOn.body"/>
    <br>
    <nuxt-link
      to="/whatson"
      class="mdc-button mdc-button--outlined back-button"
    >&lt; Back to What's on</nuxt-link>
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
  head() {
    return { title: this.whatsOn ? this.whatsOn.title : "Loading..." };
  },
  apollo: {
    whatsOn: {
      query: gql`
        query WhatsOn($slug: String!) {
          whatsOn(slug: $slug) {
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
          slug: this.$route.params.slug
        };
      }
    }
  }
};
</script>

<style>
</style>
