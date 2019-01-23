<template>
  <form v-on:submit.prevent="uploadFile">
    <input ref="fileUpload" type="file" required>
    <input type="submit">
  </form>
</template>

<script>
import gql from "graphql-tag";
export default {
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
        window.location = "https://www.ecsu.org.uk/sent/";
      }
    }
  }
};
</script>

<style>
</style>
