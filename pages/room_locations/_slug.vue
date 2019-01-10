<template>
  <PostPage v-if="roomLocation">
    <template slot="title">{{roomLocation.title}}</template>
    <table style="width: fit">
      <thead>
        <tr>
          <th>Room</th>
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
import content from "@/content";
import PostPage from "@/components/PostPage";
import gql from "graphql-tag";

export default {
  components: { PostPage },
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
