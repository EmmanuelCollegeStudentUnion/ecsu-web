<template>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-heading">
      <h2 class="mdc-typography--headline2 layout-center">Opportunities</h2>
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
    <div
      v-for="item in filteredEvents"
      :key="item.url"
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4"
    >
      <ImageCaptionCard
        :title="item.title"
        :subtitle="item.datetime"
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

export default {
  components: { PostPage, ImageCaptionCard, Select, Multiselect },
  head: {
    title: "Opportunities"
  },
  mounted() {
    this.$apollo.queries.whatsOnEvents.refetch();
    this.$forceUpdate();
  },
  apollo: {
    whatsOnEvents: gql`
      {
        whatsOnOpportunities {
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
    };
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
  },
  
};
</script>

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

