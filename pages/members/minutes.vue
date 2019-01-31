<template>
  <InfoPage>
    <template slot="title">Minutes</template>
    <template slot="subtitle">Historic Minutes from ECSU Meetings</template>
    <p>
      On here you can find the minutes of past ECSU Exec and Open Meetings. If the minutes for a meeting are missing
      please contact the
      <a
        href="/exec/secretary"
      >Secretary</a>
      .
    </p>
    <template v-if="user&&user.crsid">
      <div class="mdc-list-group" v-for="year in years" :key="year.url">
        <h3
          class="mdc-list-group__subheader group-subheader mdc-typography--headline2"
        >{{year.year}}</h3>
        <ul class="mdc-list mdc-list--two-line">
          <li role="separator" class="mdc-list-divider"></li>
          <a
            v-for="item in year.minutes"
            :key="item.url"
            :href="item.url"
            class="unstyled-link mdc-theme--text-primary-on-background"
          >
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">{{item.title}}</span>
                <span class="mdc-list-item__secondary-text">{{item.subtitle}}</span>
              </span>
            </li>
          </a>
        </ul>
      </div>
    </template>
    <template v-else-if="this.$apolloData.loading==0&&user&&user.anonymous&&authUrl">
      <br>
      <p>Sign in to view minutes</p>
      <a class="mdc-button mdc-button--outlined" :href="authUrl">Sign in</a>
    </template>
    <template v-else>
      <content-loader
        :height="300"
        :width="400"
        :speed="2"
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="0" y="30" rx="5" ry="5" width="280" height="10"/>
        <rect x="0" y="60" rx="5" ry="5" width="280" height="10"/>
        <rect x="0" y="90" rx="5" ry="5" width="280" height="10"/>
        <rect x="0" y="150" rx="5" ry="5" width="280" height="10"/>
        <rect x="0" y="180" rx="5" ry="5" width="280" height="10"/>
        <rect x="0" y="210" rx="5" ry="5" width="280" height="10"/>
        <rect x="0" y="240" rx="5" ry="5" width="280" height="10"/>
      </content-loader>
    </template>
  </InfoPage>
</template>

<script>
import InfoPage from "@/components/InfoPage";
import gql from "graphql-tag";
import _ from "lodash";
import Cookies from "js-cookie";

import { ContentLoader } from "vue-content-loader";
export default {
  components: { InfoPage, ContentLoader },
  head: {
    title: "Minutes"
  },
  apollo: {
    minutes: {
      query: gql`
        {
          minutes {
            url
            type
            number
            year
            term
          }
        }
      `
    },
    user: {
      query: gql`
        {
          user {
            crsid
            anonymous
          }
        }
      `,
      fetchPolicy: "network-only"
    }
  },

  data() {
    return { authUrl: "" };
  },
  mounted() {
    this.$apollo.queries.user.refetch();
    this.$apollo.queries.minutes.refetch();
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
  computed: {
    years() {
      if (!this.minutes) {
        return [];
      }
      var token = "";
      if (process.client) {
        token = Cookies.get("access_token") || "";
      }
      const years = [...new Set(this.minutes.map(x => x.year))];
      return years
        .map(year => ({
          year,
          minutes: _.orderBy(
            this.minutes
              .filter(x => x.year == year)
              .map(minutes => {
                var title = minutes.url.split("/").pop();
                var subtitle = minutes.year;
                if (minutes.type && minutes.term && minutes.number) {
                  title = `${minutes.year} - ${minutes.term} - ${
                    minutes.number
                  }`;
                  subtitle = minutes.type;
                }
                return {
                  title,
                  subtitle,
                  ...minutes,
                  url: `${minutes.url}?auth=${token}`
                };
              }),
            [
              x =>
                ({
                  Michaelmas: 1,
                  Lent: 2,
                  Easter: 3
                }[x.term]),
              "number",
              "title"
            ]
          )
        }))
        .sort()
        .reverse();
    }
  }
};
</script>


<style lang="scss">
.group-subheader {
  color: #d926a5;
}
</style>
