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
export default {
  components: { InfoPage },
  asyncData: ({ params }) => content("welfare", params.title)
};
</script>

<style>
</style>
