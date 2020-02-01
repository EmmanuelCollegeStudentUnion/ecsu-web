<template>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-heading">
      <h2 class="mdc-typography--headline2 layout-center">Calendar</h2>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
      <div class="call-to-action">
        <div class="mdc-fab mdc-fab--extended">
          <span class="mdc-fab__label"><i class="material-icons" style="vertical-align: middle;">
            filter_list
          </i></span>
        </div>
      </div>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-10">
      <!--
      <Select v-model="selectedCategory">
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
          :selected="selectedCategory===category"
        >{{category}}</option>
      </Select>
      --> 
      <multiselect 
        :options="categories"
        :multiple="true"
        v-model="selectedCategory"
      >
      </multiselect>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4 center-button" style="margin: auto;">
      <div class="call-to-action">
        <div v-on:click="prev()" class="mdc-fab mdc-fab--extended">
          <span class="mdc-fab__label"><i class="material-icons" style="vertical-align: middle;">
            navigate_before
          </i></span>
        </div>
      </div>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4" style="margin: auto;">
      <div class="call-to-action">
        <div v-on:click="filterLink()" class="mdc-fab mdc-fab--extended">
          <span class="mdc-fab__label">Subscribe</span>
        </div>
      </div>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4" style="margin: auto;">
      <div class="call-to-action">
        <div v-on:click="next()" class="mdc-fab mdc-fab--extended">
          <span class="mdc-fab__label"><i class="material-icons" style="vertical-align: middle;">
            navigate_next
          </i></span>
        </div>
      </div>
    </div>
    <div
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"
    >
        <div>
          <!-- Vuetify is wierd so sits in a box and is left alone -->
          <v-app style="display: flex;">
              <v-calendar 
                  ref="calendar"
                  v-model="start"
                  :type="type"
                  :events="vcevents"
                  :now="now"
                  :color="color"
                  :interval-style="intervalStyle"
                  :event-color="getEventColor"
                  :start="start"
                  :end="end"
                >
                <template v-slot:event="{ event }">
                  <div style="height: 100%;" v-on:click="click(event)">
                    <div style="line-height: 20px !important;">{{event.name}}</div>
                  </div>
                </template>
              </v-calendar>
          </v-app>
        </div>
    </div>
    <div
      v-for="item in filteredEvents"
      :key="item.url"
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4"
    >
      <ImageCaptionCard
        :title="item.title"
        :subtitle="item.datetime | moment('LLL')"
        :image="item.image"
        :url="item.url"
      >{{item.description}}</ImageCaptionCard>
    </div>
  </div>
</template>

<script>
import PostPage from "@/components/PostPage";
import ImageCaptionCard from "@/components/ImageCaptionCard";
import Select from "@/components/Select";
import gql from "graphql-tag";
import moment from "moment";

import Multiselect from 'vue-multiselect'


import Vue from 'vue'


//import Vuetify from 'vuetify'

//Vue.use(Vuetify);
/*
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
})
*/

var calendarLoaded = false;

export default {
  components: { PostPage, ImageCaptionCard, Select, Multiselect },
  head: {
    title: "What's On?"
  },
  beforeMount() {
    this.$apollo.queries.whatsOnEvents.refetch();
    this.$forceUpdate();
  },
  mounted() {
    this.$apollo.queries.whatsOnEvents.refetch();
    this.$forceUpdate();
  },
  apollo: {
    whatsOnEvents: {
      query: gql`
        {
          whatsOnEvents {
            title
            category
            datetime
            dtend
            image {
              src
              srcSet
              placeholder
              alt
            }
            url
          }
        }
      `,
    //prefetch: true,
    }
  },
  data() {
    return { selectedCategory: [], 
        type: "month",
        now: null,
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        selected: null,
        color: 'emma-pink',
        $vuetify: {},
        events: [],
        start: moment().format("YYYY-MM-DD").toString(),
        end: moment().endOf("month").format("YYYY-MM-DD").toString(),
    };
  },
  methods: {
    getEventColor (event) {
        return event.color
    },
    click (event) {
        window.open(event.url, '_blank');
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    filterLink() {
      var out = "webcal://api.ecsu.org.uk/calendar.ics";
      if (this.selectedCategory.includes("All") || this.selectedCategory.length == 0) {
        window.open(out, "_blank");
        return;
      };
      out += "?"
      this.selectedCategory.forEach(cat => {
        out += ("&category[]="+cat);
      })
      window.open(out, "_blank");
      return;
    }
  },
  computed: {
    categories() {
      if (!this.whatsOnEvents) return [];
      else return [...new Set(this.whatsOnEvents.map(x => x.category))];
    },
    filteredEvents() {
      if (this.selectedCategory.includes("All") || this.selectedCategory.length == 0) return this.whatsOnEvents;
      else
        return this.whatsOnEvents.filter(
          x => this.selectedCategory.includes(x.category)
        );
    },
    vcevents() {
      var toScan = [];
      if (this.selectedCategory.includes("All") || this.selectedCategory.length == 0) toScan = this.whatsOnEvents;
      else
        toScan = this.whatsOnEvents.filter(
          x => this.selectedCategory.includes(x.category)
        );
      toScan = toScan != undefined ? toScan : [];
      return toScan.map(element => ({
              start: moment(element.datetime).format("YYYY-MM-DD"),
              end: element.dtend ? moment(element.dtend).format("YYYY-MM-DD") : undefined,
              name: element.title,
              color: "emma-blue",
              url: element.url,
          }));
    },
  },
  
};
</script>

<style src="~/static/css/vuetify.min.css"/>

<style lang="scss">
.center-heading {
  margin: 16px auto;
}

.emma-pink {
  background-color:rgb(217, 38, 165) !important;
  border-color:rgb(217, 38, 165) !important;
}

.emma-blue {
  background-color:rgb(21, 50, 110) !important;
  border-color:rgb(21, 50, 110) !important;
}
</style>

