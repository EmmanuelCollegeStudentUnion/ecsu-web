<template>
  <PostPage v-if="execs">
    <template slot="title">The Committee</template>
    <template slot="description">
      The Exec is responsible for making decisions about the daily business of ECSU. Each of the Exec members have specific responsibilities, which are outlined in the
      <a
        href="/about/official_documents"
      >Constitution</a>. The Exec meets weekly to discuss issues relating to students in Emma.
    </template>
    <template slot="media">
      <ImageCard :image="image"/>
    </template>
    <h2 class="mdc-typography--headline3">Meet this year's Exec</h2>

    <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list">
      <li v-for="exec in execs" v-bind:key="exec.title">
        <nuxt-link :to="exec.url" class="unstyled-link mdc-theme--text-primary-on-background">
          <div class="mdc-list-item mdc-ripple-upgraded">
            <v-lazy-image
              class="mdc-list-item__graphic cover"
              height="40"
              width="40"
              :src="exec.image.src"
              :srcset="exec.image.srcSet"
              :src-placeholder="exec.image.placeholder"
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
    <p class="mdc-typography--body1">
      The Exec members will be present at
      <a href="/info/open_meetings">Open Meetings</a>, where they will formally answer any questions you might have. However, if you've got a more informal or urgent question, don't hesitate to get in touch! You can find all the email addresses of each Exec member on their page, just use the menu at the top to find the member you need.
    </p>
    <h2 class="mdc-typography--headline3">How is the Exec formed?</h2>
    <p class="mdc-typography--body1">
      The Exec is elected on a yearly basis, at the end of Michaelmas Term. The electoral procedure is described in the
      <a
        to="/protected/official_documents"
      >Constitution</a>. Elections will be publicised well in advance. Any student at Emmanuel can stand for election including Freshers.
    </p>
    <h2 class="mdc-typography--headline3">Contact Us</h2>
    <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list">
      <li>
        <a
          class="unstyled-link mdc-theme--text-primary-on-background"
          href="mailto:communications@ecsu.org.uk"
        >
          <div class="mdc-list-item mdc-ripple-upgraded">
            <i class="mdc-list-item__graphic material-icons">email</i>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Email</span>
              <span class="mdc-list-item__secondary-text">communications@ecsu.org.uk</span>
            </span>
          </div>
        </a>
      </li>
      <li>
        <a
          class="unstyled-link mdc-theme--text-primary-on-background"
          href="https://www.facebook.com/groups/ECSU2011/"
        >
          <div class="mdc-list-item mdc-ripple-upgraded">
            <svg class="mdc-list-item__graphic" style="width:40px;height:40px" viewBox="0 0 24 24">
              <path
                d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"
              ></path>
            </svg>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Facebook</span>
            </span>
          </div>
        </a>
      </li>
      <li>
        <a
          class="unstyled-link mdc-theme--text-primary-on-background"
          href="https://twitter.com/ECSU_cambridge"
        >
          <div class="mdc-list-item mdc-ripple-upgraded">
            <svg class="mdc-list-item__graphic" style="width:40px;height:40px" viewBox="0 0 24 24">
              <path
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              ></path>
            </svg>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Twitter</span>
            </span>
          </div>
        </a>
      </li>
      <li>
        <a
          class="unstyled-link mdc-theme--text-primary-on-background"
          href="https://www.google.co.uk/maps/place/University+of+Cambridge,+Emmanuel+College/@52.2035723,0.1214127,17z/data=!3m1!4b1!4m5!3m4!1s0x47d8709723b46fab:0x959fbe8634d164d9!8m2!3d52.203569!4d0.123596"
        >
          <div class="mdc-list-item mdc-ripple-upgraded">
            <i class="material-icons mdc-list-item__graphic">home</i>
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">By post</span>
              <span
                class="mdc-list-item__secondary-text"
              >Emmanuel College Students Union, Emmanuel College, St Andrews Street, Cambridge, CB2 3AP</span>
            </span>
          </div>
        </a>
      </li>
    </ul>
  </PostPage>
</template>

<script>
import content from "@/content";
import ImageCard from "@/components/ImageCard";
import PostPage from "@/components/PostPage";
import gql from "graphql-tag";
export default {
  layout: "default",
  components: {
    ImageCard,
    PostPage
  },

  computed: {
    image() {
      return require("@/assets/images/exec17.jpg");
    }
  },
  apollo: {
    execs: gql`
      {
        execs {
          name
          title
          url
          image {
            src
            srcSet
            placeholder
          }
        }
      }
    `
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
