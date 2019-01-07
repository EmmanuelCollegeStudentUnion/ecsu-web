<template>
  <PostPage v-if="post">
    <template slot="title">{{post.title}}</template>
    <template slot="subtitle">{{post.subtitle}}</template>
    <template slot="media">
      <ImageCard v-if="post.image" :image="post.image"/>
    </template>
    <Markdown :html="post.body"/>
    <br>
    <nuxt-link
      :to="post.blog.url"
      class="mdc-button mdc-button--outlined back-button"
    >&lt; Back to {{post.blog.title}}</nuxt-link>
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
        query Post($slug: String!) {
          post(slug: $slug) {
            title
            image {
              src
            }
            body
            blog {
              title
              url
            }
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


