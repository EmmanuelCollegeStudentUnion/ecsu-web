<template>
  <PostPage>
    <template slot="title">Blogs</template>
    <li v-for="blog in blogs" :key="blog.name">
      <nuxt-link :to="blog.url" :title="blog.title">
        {{blog.title}}
        <template v-if="!!blog.subtitle">- {{blog.subtitle}}</template>
      </nuxt-link>
    </li>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
export default {
  components: { PostPage },
  asyncData: async ({ params }) => ({
    blogs: await content("blogs")
  })
};
</script>

<style>
</style>
