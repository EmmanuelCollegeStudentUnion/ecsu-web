<template>
  <InfoPage>
    <template slot="title">{{title}}</template>
    <template slot="subtitle">{{subtitle}}</template>
    <div v-html="body"/>
  </InfoPage>
</template>

<script>
import content from "@/content";
import InfoPage from "@/components/InfoPage";
import ImageCard from "@/components/ImageCard";

export default {
  components: { InfoPage, ImageCard },
  asyncData: ({ params }) => content("info", params.title)
};
</script>

<style>
</style>
