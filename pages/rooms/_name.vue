<template>
  <section>
    <h1>{{title}}</h1>
    <br>
    <div>
      <ul>
        <li>Grade: {{grade}}</li>
        <li>Living Room: {{living_room}}</li>
        <li>Basin: {{basin}}</li>
        <li>Network: {{network}}</li>
        <li>CUDN Access: {{cudn}}</li>
        <li>Floor: {{floor}}</li>
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
    <table style="width: 100%" v-if="comments.length!=0">
      <thead>
        <tr>
          <th>Year</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in comments" :key="comment.title">
          <td>{{comment.year}}</td>
          <td v-html="comment.body"></td>
        </tr>
      </tbody>
    </table>
    <p v-else>There are no comments for this room</p>

    <h2>Photos</h2>

    <div class="photobox" v-if="images.length!=0">
      <div v-for="image in images" :key="image.url">
        <img :src="image" style="width:100%">
      </div>
    </div>
    <p v-else>There are no photos for this room</p>
  </section>
</template>

<script>
import content from "@/content";
export default {
  layout: "default",
  asyncData: async ({ params }) => {
    const room = await content("rooms", params.name);
    const comments = (await content("room_comments")).filter(
      x => x.room == room.title
    );
    return {
      ...room,
      comments
    };
  }
};
</script>

<style>
</style>
