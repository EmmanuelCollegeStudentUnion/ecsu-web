<template>
  <PostPage>
    <template slot="title">The Committee</template>
    <template slot="description">
      The Exec is responsible for making decisions about the daily business of ECSU. Each of the Exec members have specific responsibilities, which are outlined in the
      <a
        href="/about/official_documents"
      >Constitution</a>. The Exec meets weekly to discuss issues relating to students in Emma.
    </template>
    <template slot="media">
      <ImageCard image="/images/exec17.jpg"/>
    </template>
    <h2 class="mdc-typography--headline3">Meet this year's Exec</h2>

    <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list">
      <li v-for="exec in execs" v-bind:key="exec.name">
        <nuxt-link :to="exec.url" class="unstyled-link mdc-theme--text-primary-on-background">
          <div class="mdc-list-item mdc-ripple-upgraded">
            <v-lazy-image
              class="mdc-list-item__graphic cover"
              height="40"
              width="40"
              :src="exec.image"
              src-placeholder="/assets/favicon/favicon.ico"
            />
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">{{exec.name}}</span>
              <span class="mdc-list-item__secondary-text">{{exec.title}}</span>
            </span>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <h2 class="mdc-typography--headline3">Open Meetings</h2>
    <p class="mdc-typography--body1 page-content">
      The Exec members will be present at
      <a href="open_meetings.html">Open Meetings</a>, where they will formally answer any questions you might have. However, if you've got a more informal or urgent question, don't hesitate to get in touch! You can find all the email addresses of each Exec member on their page, just use the menu at the top to find the member you need.
    </p>
    <h2 class="mdc-typography--headline3">How is the Exec formed?</h2>
    <p class="mdc-typography--body1 page-content">
      The Exec is elected on a yearly basis, at the end of Michaelmas Term. The electoral procedure is described in the
      <a
        to="/protected/official_documents"
      >Constitution</a>. Elections will be publicised well in advance. Any student at Emmanuel can stand for election including Freshers.
    </p>
  </PostPage>
</template>

<script>
import content from "@/content";
import ImageCard from "@/components/ImageCard";
import PostPage from "@/components/PostPage";
export default {
  layout: "default",
  components: {
    ImageCard,
    PostPage
  },
  asyncData: async ({ params }) => {
    let execs = await content("exec");
    return { execs };
  }
};
</script>

<style>
.unstyled-link {
  text-decoration: none;
}
.cover {
  object-fit: cover;
}
</style>
