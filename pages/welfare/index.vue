<template>
  <PostPage v-if="welfarePages">
    <template slot="title">Welfare information</template>
    <p>The ECSU committee have information on a range of welfare topics:</p>
    <ul>
      <li v-for="page in welfarePages" v-bind:key="page.name">
        <nuxt-link :to="page.url" :title="page.title">{{page.title}}</nuxt-link>
      </li>
    </ul>You can also request a pregnancy kit
    <nuxt-link to="/welfare/pregnancy_kit">here</nuxt-link>
    <span>or for a general welfare request</span>
    <nuxt-link to="/welfare/welfare_request">use this link</nuxt-link>
  </PostPage>
</template>

<script>
import PostPage from "@/components/PostPage";
import gql from "graphql-tag";

export default {
  components: { PostPage },
  head: {
    title: "Welfare"
  },
  apollo: {
    welfarePages: gql`
      {
        welfarePages {
          title
          subtitle
          url
        }
      }
    `
  }
};
</script>