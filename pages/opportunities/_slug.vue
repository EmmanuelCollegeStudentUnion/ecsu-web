<template>
  <PostPage v-if="opportunities">
    <template slot="title">{{opportunities.title}}</template>
    <template slot="subtitle">{{opportunities.datetime}}</template>
    <template slot="media">
      <ImageCard v-if="opportunities.image" :image="opportunities.image"/>
    </template>
    <Markdown :markdown="opportunities.body"/>
    <br>
    <nuxt-link
      to="/opportunities"
      class="mdc-button mdc-button--outlined back-button"
    >&lt; Back to Opportunities</nuxt-link>
  </PostPage>
</template>

<script>

import PostPage from "@/components/PostPage";
import Markdown from "@/components/Markdown";
import ImageCard from "@/components/ImageCard";
import gql from "graphql-tag";
import moment from "moment";

export default {
  components: { PostPage, Markdown, ImageCard },
  head() {
    return { title: this.opportunities ? this.opportunities.title : "Loading..." };
  },
  mounted() {
    this.$apollo.queries.opportunities.refetch();
  },
  apollo: {
    opportunities: {
      query: gql`
        query opportunities($slug: String!) {
          opportunities(slug: $slug) {
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
      },
      error(error) {
        if (error.gqlError.extensions.code == "NOT_FOUND") {
          return this.$nuxt.error({ statusCode: 404, message: error.message });
        }
      }
    }
  }
};
</script>

<style>
</style>
