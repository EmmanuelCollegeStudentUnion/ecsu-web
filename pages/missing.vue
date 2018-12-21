<template>
  <StandardPage>
    <template slot="title">Page not found</template>
    <img
      :src="image.src"
      :srcset="image.srcSet"
      alt="404"
      width="100%"
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"
    >
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <p>The page you are looking for might have been removed or had its name changed.</p>
      <nuxt-link to="/" class="btn btn-error">Return to homepage</nuxt-link>
    </div>
  </StandardPage>
</template>

<script>
import StandardPage from "@/components/StandardPage";
import ImageCard from "@/components/ImageCard";
export default {
  components: { StandardPage, ImageCard },
  computed: {
    image() {
      return require("@/assets/images/404.png");
    }
  }
};
</script>
