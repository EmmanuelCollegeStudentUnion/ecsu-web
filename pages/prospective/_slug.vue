<template>
  <InfoPage v-if="prospectivePage">
    <template slot="title">{{prospectivePage.title}}</template>
    <template slot="subtitle">{{prospectivePage.subtitle}}</template>
    <Markdown :html="prospectivePage.body"/>
  </InfoPage>
</template>

<script>
import content from "@/content";
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
      }
    }
  }
};
</script>

<style>
</style>
