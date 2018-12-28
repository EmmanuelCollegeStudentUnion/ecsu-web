<template>
  <PostPage v-if="room">
    <template slot="title">{{room.title}}</template>
    <div>
      <ul>
        <li>Grade: {{room.grade}}</li>
        <li>Living Room: {{room.livingRoom}}</li>
        <li>Basin: {{room.basin}}</li>
        <li>Network: {{room.network}}</li>
        <li>CUDN Access:
          <template v-if="room.cudn">Yes</template>
          <template v-else>No</template>
        </li>
        <li>Floor: {{room.floor}}</li>
      </ul>
    </div>
    <p>
      The information for this room is accurate to our best knowledge. If you believe it is inaccurate please contact the
      <a
        href="mailto:webmaster@ecsu.org.uk"
        class="also"
      >Webmaster</a>.
    </p>

    <h2>Comments</h2>
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

    <h2>Photos</h2>

    <div class="photobox" v-if="room.images.length!=0">
      <div v-for="image in room.images" :key="image.url">
        <img :srcset="image.srcSet" :src="image.src" style="width:100%">
      </div>
    </div>
    <p v-else>There are no photos for this room</p>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import gql from "graphql-tag";
export default {
  components: { PostPage },
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

<style>
</style>
