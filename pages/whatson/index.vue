<template>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-heading">
      <h2 class="mdc-typography--headline2 layout-center">What's On?</h2>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
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
    <!-- TODO 
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
      <button v-on:click="$refs.calendar.prev()">
        <i class="material-icons">skip_previous</i>
      </button>
    </div>
    -->
    <div
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"
    >
        <div>
          <!-- Vuetify is wierd so sits in a box and is left alone -->
          <v-app style="display: flex;">
              <v-calendar 
                  ref="calendar"
                  :type="type"
                  :events="vcevents"
                  :now="now"
                  :color="color"
                  :interval-style="intervalStyle"
                  :event-color="getEventColor"
                >
                <template v-slot:event="{ event }">
                  <div style="display: flex;" v-on:click="click(event)">
                  {{event.name}}
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

/*
import Vuetify from 'vuetify/lib'

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

export default {
  components: { PostPage, ImageCaptionCard, Select, Multiselect },
  head: {
    title: "What's On?"
  },
  mounted() {
    this.$apollo.queries.whatsOnEvents.refetch();
  },
  apollo: {
    whatsOnEvents: gql`
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
    `
  },
  data() {
    return { selectedCategory: [], 
        type: "month",
        now: null,
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        selected: null,
        color: 'emma-pink',
        $vuetify: {},
    };
  },
  methods: {
    getEventColor (event) {
        return event.color
    },
    click (event) {
        window.open(event.url, '_blank');
    },
    previous() {
      $refs.calendar.prev()
    },
    next() {
      $refs.calendar.pnextrev()
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
      var evnt = this.filteredEvents;
      if (evnt == undefined) return undefined;
      var out = [];
      evnt.forEach(element => {
          out.push({
              start: moment(element.datetime).format("YYYY-MM-DD"),
              end: element.dtend ? moment(element.dtend).format("YYYY-MM-DD") : undefined,
              name: element.title,
              color: 'emma-blue',
              url: element.url,
          })
      });
      return out;
    },
  },
  
};
</script>

<style lang="scss">
@import "vue-multiselect/dist/vue-multiselect.min.css";

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