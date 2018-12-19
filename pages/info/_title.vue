<template>
  <InfoPage v-if="infoPage">
    <template slot="title">{{infoPage.title}}</template>
    <template slot="subtitle">{{infoPage.subtitle}}</template>
    <Markdown :html="infoPage.body"/>
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
  apollo: {
    infoPage: {query:gql`
      query Info($title:String!){
        infoPage(title:$title) {
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
