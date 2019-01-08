<template>
  <PostPage v-if="blog">
    <template slot="title">{{blog.title}}</template>
    <ul class="mdc-list mdc-list--two-line">
      <li v-for="post in blog.posts" :key="post.name">
        <nuxt-link :to="post.url" class="unstyled-link mdc-theme--text-primary-on-background">
          <div class="mdc-list-item mdc-ripple-upgraded">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">{{post.title}}</span>
              <span class="mdc-list-item__secondary-text">{{post.subtitle}}</span>
            </span>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <br>
    <nuxt-link to="/blogs" class="mdc-button mdc-button--outlined back-button">&lt; Back to Blogs</nuxt-link>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import gql from "graphql-tag";
export default {
  components: { PostPage },
  head() {
    return { title: this.blog ? this.blog.title : "Loading..." };
  },
  apollo: {
    blog: {
      query: gql`
        query Blog($slug: String!) {
          blog(slug: $slug) {
            title
            description
            posts {
              title
              subtitle
              url
            }
          }
        }
      `,
      variables() {
        return {
          slug: this.$route.params.slug
        };
      }
    }
  }
};
</script>


<style scoped>
.back-button {
  margin-top: 64px;
}
</style>

