<template>
  <InfoPage v-if="welfarePage">
    <template slot="title">{{welfarePage.title}}</template>
    <template slot="subtitle">{{welfarePage.subtitle}}</template>
    <Markdown :markdown="welfarePage.body"/>
    <nuxt-link to="/welfare" class="mdc-button mdc-button--outlined back-button">&lt; Back to welfare</nuxt-link>
  </InfoPage>
</template>

<script>

import InfoPage from "@/components/InfoPage";
import Markdown from "@/components/Markdown";
import gql from "graphql-tag";

export default {
  components: { InfoPage, Markdown },
  head() {
    return { title: this.welfarePage ? this.welfarePage.title : "Loading..." };
  },  
  mounted() {
    this.$apollo.queries.welfarePage.refetch();
  },
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
