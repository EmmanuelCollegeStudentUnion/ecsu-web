<template>
  <PostPage v-if="roomLocation">
    <template slot="title">{{roomLocation.title}}</template>
    <table style="width: fit">
      <thead>
        <tr>
          <th>Room</th>
          <th>Photos</th>
          <th>Grade</th>
          <th>Floor</th>
          <th>Basin</th>
          <th>Living Room</th>
          <th>Network</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in roomLocation.rooms" :key="room.title">
          <td>
            <nuxt-link :to="room.url">{{room.title}}</nuxt-link>
          </td>
          <td>
            <template v-if="room.hasImages">Yes</template>
            <template v-else>No</template>
          </td>
          <td>{{room.grade}}</td>
          <td>{{room.floor}}</td>
          <td>{{room.basin}}</td>
          <td>{{room.livingRoom}}</td>
          <td>{{room.network}}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <nuxt-link to="/room_locations" class="mdc-button mdc-button--outlined back-button">&lt; Back</nuxt-link>
  </PostPage>
</template>

<script>
import PostPage from "@/components/PostPage";
import gql from "graphql-tag";

export default {
  components: { PostPage },
  mounted() {
    this.$apollo.queries.roomLocation.refetch();
  },
  head() {
    return {
      title: this.roomLocation ? this.roomLocation.title : "Loading..."
    };
  },
  apollo: {
    roomLocation: {
      query: gql`
        query RoomLocation($slug: String!) {
          roomLocation(slug: $slug) {
            title
            rooms {
              title
              grade
              floor
              basin
              livingRoom
              network
              url
              hasImages
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
  }
};
</script>
