<template>
  <PostPage>
    <template slot="title">Informational pages</template>
    <ul class="mdc-list mdc-list--two-line">
      <li v-for="infoPage in infoPages" :key="infoPage.title">
        <nuxt-link :to="infoPage.url" class="unstyled-link mdc-theme--text-primary-on-background">
          <div class="mdc-list-item mdc-ripple-upgraded">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">{{infoPage.title}}</span>
              <span class="mdc-list-item__secondary-text">{{infoPage.subtitle}}</span>
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
  head: {
    title: "Info"
  },
  apollo: {
    infoPages: gql`
      {
        infoPages {
          title
          subtitle
          url
        }
      }`  
  }
};
</script>