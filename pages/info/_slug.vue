<template>
  <InfoPage v-if="infoPage">
    <template slot="title">{{infoPage.title}}</template>
    <template slot="subtitle">{{infoPage.subtitle}}</template>
    <Markdown :html="infoPage.body"/>
    <br>
    <nuxt-link to="/info" class="mdc-button mdc-button--outlined back-button">&lt; Back to info</nuxt-link>
  </InfoPage>
</template>

<script>
import content from "@/content";
import InfoPage from "@/components/InfoPage";
import ImageCard from "@/components/ImageCard";
import Markdown from "@/components/Markdown";
import gql from "graphql-tag";

export default {
  components: { InfoPage, ImageCard, Markdown },
  head() {
    return { title: this.infoPage ? this.infoPage.title : "Loading..." };
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
