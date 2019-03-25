<template>
  <PostPage v-if="post">
    <template slot="title">{{post.title}}</template>
    <template slot="subtitle">{{post.subtitle}}</template>
    <template slot="media">
      <ImageCard v-if="post.image" :image="post.image"/>
    </template>
    <Markdown :markdown="post.body"/>
    <br>
    <nuxt-link
      :to="post.blog.url"
      class="mdc-button mdc-button--outlined back-button"
    >Read more in this blog</nuxt-link>
  </PostPage>
</template>

<script>
import PostPage from "@/components/PostPage";
import Markdown from "@/components/Markdown";
import ImageCard from "@/components/ImageCard";
import gql from "graphql-tag";

export default {
  components: { PostPage, Markdown, ImageCard },
  head() {
    return {
      title: this.post ? this.post.title : "Loading...",
      link: [
        { rel: "canonical", href: this.canonical },
        { rel: "amphtml", href: this.amp }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post ? this.post.description : null
        }
      ]
    };
  },
  apollo: {
    post: {
      query: gql`
        query Post($slug: String!) {
          post(slug: $slug) {
            title
            subtitle
            description
            image {
              src
            }
            body
            blog {
              title
              url
            }
          }
        }
      `,
      variables() {
        return {
          slug: this.$route.params.slug
        };
      },
      error(error) {
        if (error.gqlError.extensions.code == "NOT_FOUND") {
          return this.$nuxt.error({ statusCode: 404, message: error.message });
        }
      }
    }
  },
  computed: {
    canonical() {
      return `https://ecsu.org.uk${this.$route.path}`;
    },
    amp() {
      return `https://ecsu.org.uk/posts/${
        this.$route.params.slug
      }/index.amp.html`;
    }
  }
};
</script>

<style scoped>
.back-button {
  margin-top: 64px;
}
</style>


