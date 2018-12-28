<template>
  <InfoPage v-if="welfarePage">
    <template slot="title">{{welfarePage.title}}</template>
    <template slot="subtitle">{{welfarePage.subtitle}}</template>
    <Markdown :html="welfarePage.body"/>
  </InfoPage>
</template>

<script>
import content from "@/content";
import InfoPage from "@/components/InfoPage";
import Markdown from "@/components/Markdown";
import gql from "graphql-tag";

export default {
  components: { InfoPage, Markdown },
  apollo: {
    welfarePage: {
      query: gql`
        query Welfare($slug: String!) {
          welfarePage(slug: $slug) {
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
