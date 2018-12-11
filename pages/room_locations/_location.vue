<template>
  <PostPage>
    <template slot="title">{{location.title}}</template>
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
        <tr v-for="room in rooms" :key="room.name">
          <td>
            <nuxt-link :to="room.url">{{room.title}}</nuxt-link>
          </td>
          <td>{{room.grade}}</td>
          <td>{{room.floor}}</td>
          <td>{{room.basin}}</td>
          <td>{{room.living_room}}</td>
          <td>{{room.network}}</td>
        </tr>
      </tbody>
    </table>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
export default {
  components: { PostPage },
  asyncData: async ({ params }) => {
    const location = await content("room_locations", params.location);
    const rooms = (await content("rooms")).filter(x => {
      return x.location == location.title;
    });
    return {
      location,
      rooms
    };
  }
};
</script>
