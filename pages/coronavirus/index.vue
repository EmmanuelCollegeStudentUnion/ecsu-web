<template>
  <PostPage v-if="user&&user.crsid">
    <template slot="title">Covid information</template>
    Greetings, this page enumerates all information provided by the ECSU, College and the University so you don't have to search for Coronavirus anymore
    <div>
      <ExpandCard v-for="item in covid" :key="item.title" class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" :title="item.title">
        {{item.body}}
      </ExpandCard>
    </div>
  </PostPage>
  <div v-else-if="authUrl">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <a class="mdc-button mdc-button--outlined" :href="authUrl">Sign in</a>
    </div>
  </div>
</template>


<script>
import gql from "graphql-tag";
import Cookies from "js-cookie";
import PostPage from "@/components/PostPage";
import ExpandCard from "@/components/ExpandCard";

export default {
  components: { PostPage, ExpandCard },
  mounted() {
    if (this.$route.query["WLS-Response"]) {
      this.$router.replace({ query: { "WLS-Response": undefined } });
    }
    this.$nextTick(() => {
      this.authUrl = String(
        `https://raven.cam.ac.uk/auth/authenticate.html?ver=3&url=${window.location.href}&desc=ECSU&msg=&iact=`
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
      fetchPolicy: "cache-and-network"
    },
    covid: {
      query: gql`
        {
          covid {
            title
            body
          }
        }
      `
    }
  }
};
</script>