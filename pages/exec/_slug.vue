<template>
  <ProfilePage v-if="exec" :image="exec.image">
    <template slot="title">{{exec.name}}</template>
    <template slot="subtitle">{{exec.title}}</template>
    <Markdown :markdown="exec.body"/>
    <span>
      Email me at:
      <a :href="mailto">{{exec.email}}</a>
    </span>
    <br>
    <nuxt-link to="/exec" class="mdc-button mdc-button--outlined bottom-button">&lt; Back to Exec</nuxt-link>

    <a
      v-if="$mq=='xs'&&exec.messagingUrl"
      :href="exec.messagingUrl"
      target="_blank"
      class="mdc-button mdc-button--unelevated bottom-button"
    >Message me</a>
    <button
      v-else-if="exec.messagingUrl"
      v-on:click="dialogOpen = true"
      class="mdc-button mdc-button--unelevated bottom-button"
    >Message me</button>
    <transition name="dialog">
      <div
        v-if="exec.messagingUrl"
        v-show="dialogOpen"
        class="mdc-dialog mdc-dialog--open"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="my-dialog-title"
        aria-describedby="my-dialog-content"
      >
        <transition name="dialog-container">
          <div class="mdc-dialog__container" v-show="dialogOpen">
            <div class="mdc-dialog__surface dialog-surface">
              <iframe :src="exec.messagingUrl" width="400" height="700" style="border:none"/>
            </div>
          </div>
        </transition>
        <div class="mdc-dialog__scrim" v-on:click="dialogOpen=false"></div>
      </div>
    </transition>
  </ProfilePage>
</template>

<script>
import ProfilePage from "@/components/ProfilePage";
import Markdown from "@/components/Markdown";
import ImageCard from "@/components/ImageCard";
import gql from "graphql-tag";
import { MDCDialog } from "@material/dialog";

export default {
  components: { Markdown, ProfilePage, ImageCard },
  head() {
    return {};
  },
  head() {
    return {
      title: this.exec ? this.exec.title : "Loading...",
      meta:
        this.exec && this.exec.image
          ? [
              {
                hid: "og:image",
                property: "og:image",
                content: "https://ecsu.org.uk" + this.exec.image.src
              }
            ]
          : []
    };
  },
  data() {
    return { dialogOpen: false };
  },
  mounted() {
    this.$apollo.queries.exec.refetch();
  },
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
            messagingUrl
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

<style lang="scss" scoped>
@import "@material/dialog/mdc-dialog";
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
.bottom-button {
  margin: 8px;
  margin-top: 64px;
}
.dialog-container-enter-active {
  animation: dialog-container-in 0.5s;
}
.dialog-container-leave-active {
  animation: dialog-container-in 0.5s reverse;
}
@keyframes dialog-container-in {
  0% {
    transform: scale3d(0.9, 0.9, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
.dialog-enter-active {
  animation: dialog-in 0.3s;
}
.dialog-leave-active {
  animation: dialog-in 0.3s reverse;
}
@keyframes dialog-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.dialog-surface {
  overflow: hidden;
}
</style>
