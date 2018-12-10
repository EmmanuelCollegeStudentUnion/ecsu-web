<template>
  <PostPage>
    <template slot="title">Welfare information</template>
    <p>The ECSU committee have information on a range of welfare topics:</p>
    <ul>
      <li v-for="post in welfare" v-bind:key="post.name">
        <a v-bind:href="post.url" v-bind:title="post.title">{{post.title}}</a>
      </li>
    </ul>You can also request a pregnancy kit
    <nuxt-link to="/welfare/pregnancy_kit">here</nuxt-link>
    <span>or for a general welfare request</span>
    <nuxt-link to="/welfare/welfare_request">use this link</nuxt-link>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
export default {
  components: { PostPage },
  asyncData: async ({ params }) => ({
    welfare: await content("welfare")
  })
};
</script>