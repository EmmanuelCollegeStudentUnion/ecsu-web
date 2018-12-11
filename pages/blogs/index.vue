<template>
  <PostPage>
    <template slot="title">Blogs</template>
    <ul class="mdc-list mdc-list--two-line">
      <li v-for="blog in blogs" :key="blog.name">
        <nuxt-link :to="blog.url" class="unstyled-link mdc-theme--text-primary-on-background">
          <div class="mdc-list-item mdc-ripple-upgraded">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">{{blog.title}}</span>
              <span class="mdc-list-item__secondary-text">{{blog.description}}</span>
            </span>
          </div>
        </nuxt-link>
      </li>
    </ul>
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
