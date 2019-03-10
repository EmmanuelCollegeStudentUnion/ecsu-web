<template>
  <InfoPage v-if="infoPage">
    <template slot="title">{{infoPage.title}}</template>
    <template slot="subtitle">{{infoPage.subtitle}}</template>
    <Markdown :markdown="infoPage.body"/>
    <br>
    <nuxt-link to="/info" class="mdc-button mdc-button--outlined back-button">&lt; Back to info</nuxt-link>
  </InfoPage>
</template>

<script>

import InfoPage from "@/components/InfoPage";
import ImageCard from "@/components/ImageCard";
import Markdown from "@/components/Markdown";
import gql from "graphql-tag";

export default {
  components: { InfoPage, ImageCard, Markdown },
  head() {
    return { title: this.infoPage ? this.infoPage.title : "Loading..." };
  },
  mounted() {
    this.$apollo.queries.infoPage.refetch();
  },
  apollo: {
    infoPage: {
      query: gql`
        query Info($slug: String!) {
          infoPage(slug: $slug) {
            title
            subtitle
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

<style scoped>
.back-button {
  margin-top: 64px;
}
</style>
