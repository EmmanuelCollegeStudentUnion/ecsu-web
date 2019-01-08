<template>
  <PostPage v-if="blogs">
    <template slot="title">Blogs</template>
    <ul class="mdc-list mdc-list--two-line">
      <li v-for="blog in blogs" :key="blog.title">
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
import gql from "graphql-tag";
export default {
  components: { PostPage },
  head: { title: "Blogs" },
  apollo: {
    blogs: gql`
      {
        blogs {
          title
          description
          url
        }
      }
    `
  }
};
</script>

<style>
</style>
