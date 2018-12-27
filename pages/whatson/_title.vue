<template>
  <InfoPage v-if="whatsOn">
    <template slot="title">{{whatsOn.title}}</template>
    <template slot="subtitle">{{whatsOn.date}}</template>
    <Markdown :html="whatsOn.body"/>
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
    whatsOn: {
      query: gql`
        query WhatsOn($title: String!) {
          whatsOn(title: $title) {
            title
            date
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
          title: this.$route.params.title
        };
      }
    }
  }
};
</script>

<style>
</style>
