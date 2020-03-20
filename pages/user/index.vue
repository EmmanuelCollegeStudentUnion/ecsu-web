<template>
    <PostPage v-if="this.user">
        <template slot="title">User information</template>
        <p>Welcome to the ECSU Userland</p>
        You are {{this.user.crsid}}
        <p v-if="this.user.exec">
            You are a ECSU Exec.
        </p>
    </PostPage>
</template>
<script>
import gql from "graphql-tag";
import PostPage from "@/components/PostPage";

export default {
  components: { PostPage },
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
  head() {

  },
  apollo: {
    user: {
      query: gql`
        {
          user {
            crsid,
            exec
          }
        }
      `,

      fetchPolicy: "no-cache"
    }
  },
};
</script>