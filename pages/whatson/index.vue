<template>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-heading">
      <h2 class="mdc-typography--headline2 layout-center">What's On?</h2>
    </div>
    <div
      v-for="item in whatsOnEvents"
      :key="item.title"
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4"
    >
      <ImageCaptionCard
        :title="item.title"
        :subtitle="item.datetime"
        :image="item.image"
        :url="item.url"
      >{{item.description}}</ImageCaptionCard>
    </div>
  </div>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import ImageCaptionCard from "@/components/ImageCaptionCard";
import gql from "graphql-tag";

export default {
  components: { PostPage, ImageCaptionCard },
  apollo: {
    whatsOnEvents: gql`
      {
        whatsOnEvents {
          title
          datetime
          image {
            src
            srcSet
            placeholder
            alt
          }
          url
        }
      }
    `
  }
};
</script>

<style scoped>
.center-heading {
  margin: 16px auto;
}
</style>
