<template>
  <InfoPage v-if="prospectivePage">
    <template slot="title">{{prospectivePage.title}}</template>
    <template slot="subtitle">{{prospectivePage.subtitle}}</template>
    <div v-html="body"/>
  </InfoPage>
</template>

<script>
import content from "@/content";
import InfoPage from "@/components/InfoPage";
import gql from "graphql-tag";

export default {
  components: { InfoPage },
  apollo: {
    prospectivePage: {query:gql`
      query Prospective($title:String!){
        prospectivePage(title:$title) {
          title             
          subtitle
          body
        }
      }`,
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
