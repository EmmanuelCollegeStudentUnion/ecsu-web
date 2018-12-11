<template>
  <StandardPage>
    <template slot="title">Room database</template>
    <hr class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div
      v-for="location in locations"
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
export default {
  components: { StandardPage, ImageCaptionCard, Markdown },
  layout: "default",
  asyncData: async ({ params }) => ({
    locations: await content("room_locations")
  })
};
</script>

<style>
</style>
