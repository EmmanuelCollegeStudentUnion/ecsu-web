<template>
  <PostPage>
    <template slot="title">Informational pages</template>
    <ul class="mdc-list mdc-list--two-line">
      <li v-for="post in info" :key="post.name">
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
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
export default {
  layout: "default",
  components: { PostPage },
  asyncData: async ({ params }) => ({
    info: await content("info")
  })
};
</script>