<template>
  <PostPage>
    <template slot="title">Emma Societies</template>
    <template slot="description">A List of Societies Available in Emma</template>
    <template slot="media">
      <ImageCard :image="image"/>
    </template>
    <p>
      <i>To access Society Funding information, click
        <nuxt-link to="/info/society_funding">here</nuxt-link>
      </i>
    </p>
    <p>A huge range of different sports clubs and societies exist at Emma - the list below is by no means exhaustive, although it contains most of the major sports clubs and societies in college:</p>
    <ul></ul>
    <ul class="mdc-list mdc-list--one-line">
      <li v-for="society in societies" :key="society.name">
        <nuxt-link :to="society.url" class="unstyled-link mdc-theme--text-primary-on-background">
          <div class="mdc-list-item mdc-ripple-upgraded">
            <span class="mdc-list-item__text">
              <span>{{society.title}}</span>
            </span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </PostPage>
</template>

<script>
import PostPage from "@/components/PostPage";
import ImageCard from "@/components/ImageCard";
import gql from "graphql-tag";
export default {
  components: { PostPage, ImageCard },
  head: {
    title: "Societies"
  },
  apollo: {
    societies: gql`
      {
        societies {
          title
          image {
            src
          }
          body
          url
        }
      }
    `
  },
  computed: {
    image() {
      return require("@/assets/images/site/trainer_ico.png");
    }
  }
};
</script>