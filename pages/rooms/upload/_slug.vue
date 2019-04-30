<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <template v-if="user&&user.crsid">
      <h1 class="mdc-typography--headline2">Upload a photo to the room database</h1>
      <p>
        Uploading as {{this.user.crsid}}
        <br>
      </p>
      <button class="mdc-button mdc-button--outlined" @click="dialogOpen=true">Select files</button>
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
const Tus = require("@uppy/tus");
const Uppy = require("@uppy/core");
const Dashboard = require("@uppy/dashboard");
import Cookies from "js-cookie";
const token = Cookies.get("access_token");

// And their styles (for UI plugins)
require("@uppy/core/dist/style.css");
require("@uppy/dashboard/dist/style.css");

export default {
  data() {
    return { authUrl: "", dialogOpen: false };
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
    this.uppy = Uppy({
      meta: {
        upload: "ROOM_DATABASE",
        roomSlug: this.$route.params.slug
      },
      onBeforeUpload: files => {
        Object.values(files).forEach(file => {
          this.uppy.setFileMeta(file.id, {
            extension: file.name.split(".").pop(),
            authorization: token
          });
        });
      }
    })
      .use(Dashboard, {
        onRequestCloseModal: () => (this.dialogOpen = false),
        showLinkToFileUploadResult: false
      })
      .use(Tus, {
        endpoint: "https://api.ecsu.org.uk/upload", // use your tus endpoint here
        resume: true,
        autoRetry: true,
        retryDelays: [0, 1000, 3000, 5000]
      });

    this.uppy.on("complete", result => {
      console.log(
        "Upload complete! We’ve uploaded these files:",
        result.successful
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
  watch: {
    dialogOpen(value) {
      if (value) {
        this.uppy.getPlugin("Dashboard").openModal();
      } else {
        this.uppy.getPlugin("Dashboard").closeModal();
      }
    }
  }
};
</script>

<style>
</style>
