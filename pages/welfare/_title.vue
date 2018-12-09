<template>
  <PostPage>
    <template slot="title">{{title}}</template>
    <template slot="subtitle">{{subtitle}}</template>
    <template slot="media">
      <div
        :style="{
      'background': `url('${image}') top center / contain no-repeat`,
      'background-fit': 'fit',
      width: '100%',
      height: '100%'
      
      }"
      />
    </template>
    <div v-html="body"/>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
export default {
  components: { PostPage },
  asyncData: ({ params }) => content("welfare", params.title)
};
</script>

<style>
</style>
