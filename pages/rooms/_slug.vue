<template>
  <PostPage v-if="room">
    <template slot="title">{{room.title}}</template>
    <div class="mdc-typography--headline5">
      <ul>
        <li>
          <span class="room-fact-header">Grade</span>
          {{room.grade}}
        </li>
        <li>
          {{room.livingRoom}}
          <span class="room-fact-header">Living Room</span>
        </li>
        <li>
          {{room.basin}}
          <span class="room-fact-header">Basin</span>
        </li>
        <li>
          {{room.network}}
          <span class="room-fact-header">Network</span>
        </li>
        <li>
          <template v-if="room.cudn">Has</template>
          <template v-else>No</template>
          <span class="room-fact-header">CUDN Access</span>
        </li>
        <li>
          {{room.floor}}
          <span class="room-fact-header">Floor</span>
        </li>
      </ul>
    </div>
    <p>
      The information for this room is accurate to our best knowledge. If you believe it is inaccurate please contact the
      <a
        href="mailto:webmaster@ecsu.org.uk"
        class="also"
      >Webmaster</a>.
    </p>

    <h2 class="mdc-typography--headline3">Comments</h2>
    <table v-if="room.comments.length!=0">
      <thead>
        <tr>
          <th>Year</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in room.comments" :key="comment.title">
          <td>{{comment.year}}</td>
          <td v-html="comment.body"></td>
        </tr>
      </tbody>
    </table>
    <p v-else>There are no comments for this room</p>

    <h2 class="mdc-typography--headline3">Photos</h2>

    <div v-if="room.images.length!=0">
      <div ref="tabBar" class="mdc-tab-bar" role="tablist">
        <div class="mdc-tab-scroller">
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">
              <button
                v-for="i in room.images.length"
                class="mdc-tab mdc-tab--active"
                role="tab"
                aria-selected="true"
                tabindex="0"
                v-on:click="imageTab=i"
                :key="i"
              >
                <span class="mdc-tab__content">
                  <span class="mdc-tab__text-label">Image {{i}}</span>
                </span>
                <span
                  class="mdc-tab-indicator"
                  :class="{' mdc-tab-indicator--active': imageTab===i}"
                >
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="image-container">
        <template v-for="i in room.images.length">
          <transition name="fade" :key="room.images[i-1].url" mode>
            <v-lazy-image
              v-show="i===imageTab"
              class="room-image"
              :srcset="room.images[i-1].srcSet"
              :src="room.images[i-1].src"
              :src-placeholder="room.images[i-1].placeholder"
              :alt="room.images[i-1].alt"
              style="width:100%"
            />
          </transition>
        </template>
      </div>
    </div>
    <p v-else>There are no photos for this room</p>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import gql from "graphql-tag";
import { MDCTabBar } from "@material/tab-bar";

export default {
  components: { PostPage },
  mounted() {
    if (this.$refs.tabBar) {
      const tabBar = new MDCTabBar(this.$refs.tabBar);
    }
  },
  data() {
    return {
      imageTab: 1
    };
  },
  apollo: {
    room: {
      query: gql`
        query Room($slug: String!) {
          room(slug: $slug) {
            title
            grade
            floor
            basin
            livingRoom
            cudn
            network
            images {
              src
              srcSet
              alt
            }
            comments {
              year
              body
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

<style lang="scss" scoped>
@import "@material/tab-bar/mdc-tab-bar";
@import "@material/tab-scroller/mdc-tab-scroller";
@import "@material/tab-indicator/mdc-tab-indicator";
@import "@material/tab/mdc-tab";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.room-image {
  position: absolute;

  left: 0px;
  top: 0px;
}
.image-container {
  position: relative;
  height: 700px;
}
.room-fact-header {
  color: var(--mdc-theme-primary);
}
ul {
  list-style-type: none;
  padding-left: 0;
}
</style>

