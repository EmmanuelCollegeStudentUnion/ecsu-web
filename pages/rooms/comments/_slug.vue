<template>
  <div class="mdc-layout-grid__inner">
    <template v-if="user&&user.crsid">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <h1 class="mdc-typography--headline2">Upload a comment to the room database</h1>
        <p>
          Uploading as {{this.user.crsid}}
        </p>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <p>Please write a useful comment, not just "it was nice"</p>
        <div ref="text_area" mounted="" class="mdc-text-field mdc-text-field--textarea">
          <textarea id="textarea" class="mdc-text-field__input" rows="4" cols="160" v-model="userComment"></textarea>
          <div class="mdc-notched-outline">
          <div class="mdc-notched-outline__leading"></div>
          <div class="mdc-notched-outline__notch">
              <label for="textarea" class="mdc-floating-label">Comment</label>
          </div>
          <div class="mdc-notched-outline__trailing"></div> 
          </div>
        </div>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
        <div ref="year_select"  class="mdc-select mdc-select--outlined">
          <div class="mdc-select__anchor">
            <i class="mdc-select__dropdown-icon"></i>
            <div class="mdc-select__selected-text">2020</div>
            <div class="mdc-notched-outline" style="top:0px;">
              <div class="mdc-notched-outline__leading"></div>
              <div class="mdc-notched-outline__notch">
                <label class="mdc-floating-label">Year (19/20 = 2020)</label>
              </div>
              <div class="mdc-notched-outline__trailing"></div>
            </div>
          </div>

          <!-- Other elements from the select remain. -->
          <div class="mdc-select__menu mdc-menu mdc-menu-surface" role="listbox">
            <ul class="mdc-list">
              <li class="mdc-list-item mdc-list-item--selected" data-value="2020">
                2020
              </li>
              <li class="mdc-list-item" data-value="2019">
                2019
              </li>
              <li class="mdc-list-item" data-value="2018">
                2018
              </li>
              <li class="mdc-list-item" data-value="2017">
                2017
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button class="mdc-button mdc-button--outlined mdc-layout-grid__cell mdc-layout-grid__cell--span-4" @click="submit()">Submit</button>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        Any problems? <nuxt-link to="/exec/webmaster">Contact me</nuxt-link>
      </div>
    </template>
    <template v-else-if="authUrl">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <a class="mdc-button mdc-button--outlined" :href="authUrl">Sign in</a>
      </div>
    </template>
  </div>
</template>

<script>
import gql from "graphql-tag";
import Cookies from "js-cookie";
import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';

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
          mutation($room:String!, $comment:String!, $year:Int!) {
            roomComment (roomSlug: $room, comment: $comment, year: $year) {
              body
            }
          }
        `,
        variables: {
          room: this.$route.params.slug,
          comment: this.userComment,
          year: this.select ? parseInt(this.select.value) : 2020, //TODO FIXME
        }
      }).then((data) => {
        console.log(data);
        this.$router.push("/rooms/comments/done/");
      }).catch((error) => {
        console.log(error);
        this.userComment = "";
        //TODO error to user
      })
    }
  },
  updated: function () {
    this.$nextTick(function () {
      if (this.$refs.text_area) {
        const textField = new MDCTextField(this.$refs.text_area);
      }
      if (this.$refs.year_select) {
        try {
          this.select = new MDCSelect(this.$refs.year_select);
        } catch (e) {}
      }
    })
  },
};
</script>

<style>
</style>
