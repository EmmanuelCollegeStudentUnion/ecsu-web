<template>
  <PostPage>
    <template slot="title">{{blog.title}}</template>
    <li v-for="post in posts" :key="post.name">
      <nuxt-link :to="post.url" :title="post.title">
        {{post.title}}
        <template v-if="!!post.subtitle">- {{post.subtitle}}</template>
      </nuxt-link>
    </li>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
export default {
  components: { PostPage },
  asyncData: async ({ params }) => {
    const blog = await content("blogs", params.title);
    return {
      blog,
      posts: (await content("posts")).filter(x => {
        return x.blog == blog.title;
      })
    };
  }
};
</script>
