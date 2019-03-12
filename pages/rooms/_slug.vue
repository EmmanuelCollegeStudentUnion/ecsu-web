<template>
  <PostPage v-show="room">
    <template v-if="room" slot="title">{{room.title}}</template>
    <div v-if="room" class="mdc-typography--headline5">
      <ul>
        <li v-if="!!room.grade">
          <span class="room-fact-header">Grade</span>
          {{room.grade}}
        </li>
        <li v-if="room.floor!==null">
          {{room.floor}}
          <span class="room-fact-header">Floor</span>
        </li>
        <li v-if="room.livingRoom!==null">
          {{room.livingRoom}}
          <span class="room-fact-header">Living Room</span>
        </li>
        <li v-if="room.basin!==null">
          {{room.basin}}
          <span class="room-fact-header">Basin</span>
        </li>
        <li v-if="room.network!==null">
          {{room.network}}
          <span class="room-fact-header">Network</span>
        </li>
        <li v-if="room.cudn!==null">
          <template v-if="room.cudn">Has</template>
          <template v-else>No</template>
          <span class="room-fact-header">CUDN Access</span>
        </li>
      </ul>
    </div>
    <p>
      The information for this room is accurate to our best knowledge. If you believe it is inaccurate please contact the
      <a
        href="mailto:webmaster@ecsu.org.uk"
      >Webmaster</a>.
    </p>

    <h2 class="mdc-typography--headline3">Comments</h2>
    <table v-if="room&&room.comments.length!=0">
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

    <div v-if="room&&room.images.length!=0">
      <mdc-tab-bar @change="onTabSelected">
        <mdc-tab :key="i" v-for="i in room.images.length">Image {{i}}</mdc-tab>
      </mdc-tab-bar>
      <div v-if="room" class="image-container">
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
    <p v-if="room&&room.images.length==0">There are no photos for this room</p>
    <br>Your room?
    <nuxt-link v-if="room" :to="`/rooms/upload/${room.id}`" class="mdc-button">Upload photo</nuxt-link>
    <br>

    <nuxt-link
      v-if="room"
      :to="room.location.url"
      class="mdc-button mdc-button--outlined back-button"
    >&lt; Back to {{room.location.title}}</nuxt-link>
  </PostPage>
</template>

<script>
import PostPage from "@/components/PostPage";
import gql from "graphql-tag";

export default {
  components: { PostPage },
  head() {
    return { title: this.room ? this.room.title : "Loading..." };
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
            id
            title
            grade
            floor
            basin
            livingRoom
            cudn
            network
            url
            images {
              src
              srcSet
              placeholder
              alt
            }
            comments {
              year
              body
            }
            location {
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
  methods: {
    onTabSelected(i) {
      this.imageTab = i + 1;
    }
  }
};
</script>

<style lang="scss">
@import "vue-mdc-adapter/dist/tabs/styles";

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
  height: 100vh;
  overflow: hidden;
}
.room-fact-header {
  color: var(--mdc-theme-primary);
}
ul {
  list-style-type: none;
  padding-left: 0;
}
.back-button {
  margin-top: 64px;
}
</style>

