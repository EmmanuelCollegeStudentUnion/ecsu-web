<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <template v-if="user&&user.crsid">
      <h1 class="mdc-typography--headline2">Upload a comment to the room database</h1>
      <p>
        Uploading as {{this.user.crsid}}
        <br>
      </p>
      <div class="mdc-text-field mdc-text-field--textarea">
        <textarea id="textarea" class="mdc-text-field__input" rows="4" cols="160" v-model="userComment"></textarea>
        <div class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch">
            <label for="textarea" class="mdc-floating-label">Comment</label>
        </div>
        <div class="mdc-notched-outline__trailing"></div>
        </div>
      </div>
      <button class="mdc-button mdc-button--outlined" @click="submit()">Submit</button>
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
import Cookies from "js-cookie";

export default {
  data() {
    return { authUrl: "", dialogOpen: false, roomSlug: this.$route.params.slug, userComment: "" };
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
    submit() {
      this.$apollo.mutate({
        mutation: gql`
          mutation($room:String, $comment:String, $year:int) {
            roomComment (roomSlug: $room, comment: $comment, year: $year) {
              body
            }
          }
        `,
        variables: {
          room: this.$route.params.slug,
          comment: this.userComment,
          year: 2020, //TODO FIXME
        }
      }).then((data) => {
        console.log(data);
        window.open("/rooms/comments/done/");
      }).catch((error) => {
        console.log(error);
        this.userComment = "";
        //TODO error to user
      })
    }
  },
};
</script>

<style>
</style>
