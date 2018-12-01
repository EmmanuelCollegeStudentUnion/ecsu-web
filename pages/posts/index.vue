<template>
  <section>
    <header>
      <h1>Latest posts</h1>
    </header>
    <ul>
      <li v-for="post in posts" v-bind:key="post.name">
        <a v-bind:href="post.url" v-bind:title="post.title">{{post.title}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import content from "@/content";
export default {
  layout: "default",
  asyncData: async ({ params }) => ({
    posts: await content("posts")
  })
};
</script>