<template>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-heading">
      <h2 class="mdc-typography--headline2 layout-center">What's On?</h2>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <Select v-model="selectedCategory">
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
          :selected="selectedCategory===category"
        >{{category}}</option>
      </Select>
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

export default {
  components: { PostPage, ImageCaptionCard, Select },
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
    return { selectedCategory: "All" };
  },
  computed: {
    categories() {
      if (!this.whatsOnEvents) return ["All"];
      else return ["All", ...new Set(this.whatsOnEvents.map(x => x.category))];
    },
    filteredEvents() {
      if (this.selectedCategory == "All") return this.whatsOnEvents;
      else
        return this.whatsOnEvents.filter(
          x => x.category === this.selectedCategory
        );
    }
  }
};
</script>

<style lang="scss">
.center-heading {
  margin: 16px auto;
}
</style>
