<template>
  <StandardPage v-if="roomLocations">
    <template slot="title">Room database</template>
    <hr class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div
      v-for="location in roomLocations"
      v-bind:key="location.name"
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4"
    >
      <ImageCaptionCard :title="location.title" :image="location.image" :url="location.url">
        <Markdown :html="location.body"/>
      </ImageCaptionCard>
    </div>
  </StandardPage>
</template>

<script>
import content from "@/content";
import StandardPage from "@/components/StandardPage";
import Markdown from "@/components/Markdown";
import ImageCaptionCard from "@/components/ImageCaptionCard";
import gql from "graphql-tag";

export default {
  components: { StandardPage, ImageCaptionCard, Markdown },
  head: {
    title: "Room Database"
  },
  apollo: {
    roomLocations: gql`
      {
        roomLocations {
          title
          image {
            src
            srcSet
            placeholder
          }
          body
          url
        }
      }
    `
  }
};
</script>

<style>
</style>
