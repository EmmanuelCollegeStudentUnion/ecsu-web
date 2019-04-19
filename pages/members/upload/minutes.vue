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
        <input class="mdc-button" ref="fileUpload" type="file">
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
    return {
      authUrl: "",
      types: ["Exec Meeting"],
      selectedType: "Exec Meeting",
      selectedYear: 2019,
      terms: ["Michaelmas", "Lent", "Easter"],
      selectedTerm: "Michaelmas",
      selectedNumber: 1
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
      this.$ga.event("minutes", "upload_attempt", this.$route.params.slug);
      const value = await this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation MinutesUpload(
            $year: Int!
            $type: String!
            $term: String!
            $number: Int!
            $file: Upload!
          ) {
            minutesUpload(
              year: $year
              type: $type
              term: $term
              number: $number
              file: $file
            ) {
              url
            }
          }
        `,
        // Parameters
        variables: {
          year: this.selectedYear,
          type: this.selectedType,
          term: this.selectedTerm,
          number: this.selectedNumber,
          file: this.$refs.fileUpload.files[0]
        }
      });
      if (value.data) {
        window.location = "https://ecsu.org.uk/members/minutes";
        this.$ga.event("minutes", "upload_success", this.$route.params.slug);
      }
    }
    //minutesUpload(year:String!, type:String!, term:String!, number:Int, file: Upload!)
  }
};
</script>

<style>
</style>
