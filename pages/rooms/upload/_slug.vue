<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <template v-if="user&&user.crsid">
      <h1 class="mdc-typography--headline2">Upload a photo to the room database</h1>
      <p>
        Uploading as {{this.user.crsid}}
        <br>
      </p>
      <form v-on:submit.prevent="uploadFile">
        <input class="mdc-button" ref="fileUpload" type="file" required>
        <input class="mdc-button mdc-button--outlined" type="submit" value="Upload">
      </form>
      <br>Any problems?
      <nuxt-link to="/exec/webmaster">Contact me</nuxt-link>
    </template>
    <template v-else-if="authUrl">
      <a class="mdc-button mdc-button--outlined" :href="authUrl">Sign in</a>
    </template>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return { authUrl: "" };
  },
  mounted() {
    if (this.$route.query["WLS-Response"]) {
      this.$router.replace({ query: { "WLS-Response": undefined } });
    }
    this.$nextTick(() => {
      this.authUrl = String(
        `https://raven.cam.ac.uk/auth/authenticate.html?ver=3&url=${
          window.location.href
        }&desc=ECSU&msg=&iact=`
      );
    });
  },
  apollo: {
    user: {
      query: gql`
        {
          user {
            crsid
          }
        }
      `,

      fetchPolicy: "no-cache"
    }
  },
  methods: {
    async uploadFile(e) {
      console.log("Uploading..");
      this.$ga.event(
        "room_database",
        "upload_attempt",
        this.$route.params.slug
      );

      const value = await this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation RoomPhotoUpload($file: Upload!, $roomSlug: String!) {
            roomPhotoUpload(roomSlug: $roomSlug, file: $file) {
              src
            }
          }
        `,
        // Parameters
        variables: {
          file: this.$refs.fileUpload.files[0],
          roomSlug: this.$route.params.slug
        }
      });
      if (value.data) {
        window.location = "https://ecsu.org.uk/rooms/upload/done/";
        this.$ga.event(
          "room_database",
          "upload_success",
          this.$route.params.slug
        );
      }
    }
  }
};
</script>

<style>
</style>
