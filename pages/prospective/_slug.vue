<template>
  <InfoPage v-if="prospectivePage">
    <template slot="title">{{prospectivePage.title}}</template>
    <template slot="subtitle">{{prospectivePage.subtitle}}</template>
    <Markdown :markdown="prospectivePage.body"/>
  </InfoPage>
</template>

<script>

import InfoPage from "@/components/InfoPage";
import Markdown from "@/components/Markdown";
import gql from "graphql-tag";

export default {
  components: { InfoPage, Markdown },
  head() {
    return { title: this.prospectivePage ? this.prospectivePage.title : "Loading..." };
  },
  apollo: {
    prospectivePage: {
      query: gql`
        query Prospective($slug: String!) {
          prospectivePage(slug: $slug) {
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

<style>
</style>
