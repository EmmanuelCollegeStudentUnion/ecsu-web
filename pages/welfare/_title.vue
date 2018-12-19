<template>
  <InfoPage v-if="welfarePage">
    <template slot="title">{{welfarePage.title}}</template>
    <template slot="subtitle">{{welfarePage.subtitle}}</template>
    <div v-html="welfarePage.body"/>
  </InfoPage>
</template>

<script>
import content from "@/content";
import InfoPage from "@/components/InfoPage";
import gql from "graphql-tag";

export default {
  components: { InfoPage },
  apollo: {
    welfarePage: {query:gql`
      query Welfare($title:String!){
        welfarePage(title:$title) {
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
