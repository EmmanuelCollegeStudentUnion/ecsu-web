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
    <div class="mdc-list-group" v-for="year in years" :key="year.url">
      <h3 class="mdc-list-group__subheader group-subheader mdc-typography--headline2">{{year.year}}</h3>
      <ul class="mdc-list mdc-list--two-line">
        <li role="separator" class="mdc-list-divider"></li>
        <nuxt-link
          v-for="item in year.minutes"
          :key="item.url"
          :to="item.url"
          class="unstyled-link mdc-theme--text-primary-on-background"
        >
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">{{item.title}}</span>
              <span class="mdc-list-item__secondary-text">{{item.subtitle}}</span>
            </span>
          </li>
        </nuxt-link>
      </ul>
    </div>
  </InfoPage>
</template>

<script>
import InfoPage from "@/components/InfoPage";
import gql from "graphql-tag";
import _ from "lodash";
export default {
  components: { InfoPage },
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
    }
  },
  computed: {
    years() {
      if (!this.minutes) {
        return [];
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
                  ...minutes
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
