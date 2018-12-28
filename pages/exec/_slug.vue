<template>
  <ProfilePage v-if="exec" :image="exec.image">
    <template slot="title">{{exec.name}}</template>
    <template slot="subtitle">{{exec.title}}</template>
    <Markdown :html="exec.body"/>
    <span>
      Email me at:
      <a :href="mailto">{{exec.email}}</a>
    </span>
  </ProfilePage>
</template>

<script>
import content from "@/content";
import ProfilePage from "@/components/ProfilePage";
import Markdown from "@/components/Markdown";
import ImageCard from "@/components/ImageCard";
import gql from "graphql-tag";

export default {
  components: { Markdown, ProfilePage, ImageCard },
  apollo: {
    exec: {
      query: gql`
        query Exec($slug: String!) {
          exec(slug: $slug) {
            name
            title
            url
            image {
              src
              srcSet
              alt
              placeholder
            }
            body
            email
          }
        }
      `,
      variables() {
        return {
          slug: this.$route.params.slug
        };
      }
    }
  },
  computed: {
    mailto() {
      return `mailto:${this.exec ? this.exec.email : null}`;
    }
  }
};
</script>

<style>
.officer-page-main-content-div {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 50px;
}

.officer-page-text-content-div {
  margin-right: 30px;
}

.officer-page-image {
  -webkit-filter: drop-shadow(1px 1px 5px grey);
  filter: drop-shadow(1px 1px 5px grey);

  width: 400px;
}
</style>
