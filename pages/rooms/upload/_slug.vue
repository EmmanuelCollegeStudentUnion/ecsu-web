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
    </template>
    <template v-else>
      <a class="mdc-button mdc-button--outlined" :href="authUrl">Sign in</a>
    </template>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return { url: "https://www.ecsu.org.uk" };
  },
  mounted() {
    if (this.$route.query["WLS-Response"]) {
      this.$router.replace({ query: { "WLS-Response": undefined } });
    }
    this.url = window.location.href;
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
        window.location = "done";
      }
    }
  },
  computed: {
    authUrl() {
      return `https://raven.cam.ac.uk/auth/authenticate.html?ver=3&url=${
        this.url
      }&desc=ECSU&msg=&iact=`;
    }
  }
};
</script>

<style>
</style>
