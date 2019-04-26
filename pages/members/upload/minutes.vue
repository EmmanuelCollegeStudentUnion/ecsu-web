<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <template v-if="user&&user.crsid">
      <h1 class="mdc-typography--headline2">Upload minutes</h1>
      <p>
        Uploading as {{this.user.crsid}}
        <br>
      </p>
      <form v-on:submit.prevent="uploadFile">
        <Select v-model="selectedType">
          <option v-for="type in types" :name="type" :key="type" :value="type">{{type}}</option>
        </Select>
        <input v-model="selectedYear" name="year" type="year" min="2000" max="2050">
        <Select v-model="selectedTerm">
          <option v-for="term in terms" :name="term" :key="term" :value="term">{{term}}</option>
        </Select>
        <input v-model="selectedNumber" name="number" type="number" min="1" max="100" value="1">
      </form>
      <button class="mdc-button mdc-button--outlined" @click="dialogOpen=true">Select file</button>
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
    return {
      authUrl: "",
      types: ["Exec Meeting"],
      selectedType: "Exec Meeting",
      selectedYear: 2019,
      terms: ["Michaelmas", "Lent", "Easter"],
      selectedTerm: "Michaelmas",
      selectedNumber: 1,
      dialogOpen: false
    };
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
        upload: "MINUTES",
        authorization: token
      },
      onBeforeUpload: files => {
        Object.values(files).forEach(file => {
          this.uppy.setFileMeta(file.id, {
            extension: file.name.split(".").pop(),
            type: this.selectedType,
            year: this.selectedYear,
            term: this.selectedTerm,
            number: this.selectedNumber
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
