<template>
  <PostPage>
    <template slot="title">Emma Societies</template>
    <template slot="description">A List of Societies Available in Emma</template>
    <template slot="media">
      <ImageCard image="/images/trainer_ico.png"/>
    </template>
    <p>
      <i>
        To access Society Funding information, click
        <a href="society_funding.html">here</a>
      </i>
    </p>
    <p>A huge range of different sports clubs and societies exist at Emma - the list below is by no means exhaustive, although it contains most of the major sports clubs and societies in college:</p>
    <ul>
      <li v-for="society in societies" v-bind:key="society.name">
        <a v-bind:href="society.url" v-bind:title="society.title">{{society.title}}</a>
      </li>
    </ul>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import ImageCard from "@/components/ImageCard";
export default {
  components: { PostPage, ImageCard },
  layout: "default",
  asyncData: async ({ params }) => ({
    societies: await content("societies")
  })
};
</script>