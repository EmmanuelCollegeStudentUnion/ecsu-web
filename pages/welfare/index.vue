<template>
  <section>
    <header>
      <h1>Welfare information</h1>
    </header>
    <p>The ECSU committee have information on a range of welfare topics:</p>
    <ul>
      <li v-for="post in welfare" v-bind:key="post.name">
        <a v-bind:href="post.url" v-bind:title="post.title">{{post.title}}</a>
      </li>
    </ul>You can also request a pregnacy kit
    <nuxt-link to="/welfare/pregnacy_kit">here</nuxt-link>
    <span>or for a general welfare request</span>
    <nuxt-link to="/welfare/welfare_request">use this link</nuxt-link>
  </section>
</template>

<script>
import content from "@/content";
export default {
  layout: "default",
  asyncData: async ({ params }) => ({
    welfare: await content("welfare")
  })
};
</script>