<template>
  <PostPage>
    <template slot="title">Thinking of Joining Emma?</template>
    <template slot="media">
      <ImageCard :image="image"/>
    </template>
    <h3>Find out more about Emmanuel College from its Student Union!</h3>

    <p>Want to know more about Emma? Then you're in the right place! If you just want to get an idea of what student life is like at Emmanuel, or 'Emma' as it's fondly known, or you're even thinking of applying, then have a look around.</p>
  </PostPage>
</template>

<script>
import ImageCard from "@/components/ImageCard";
import PostPage from "@/components/PostPage";
export default {
  components: {
    ImageCard,
    PostPage
  },
  head: {
    title: "Prospective students"
  },
  computed: {
    image() {
      return require("@/assets/images/site/emma_chapel.jpg");
    }
  }
};
</script>