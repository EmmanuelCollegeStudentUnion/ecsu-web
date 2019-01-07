<template>
  <StandardPage>
    <template slot="title">Page not found</template>
    <img
      :src="image.src"
      :srcset="image.srcSet"
      style="width: 50%"
      alt="404"
      width="50%"
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center hue-cycle"
    >
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center">
      <p>The page you are looking for might have been removed or had its name changed.</p>
      <nuxt-link
        to="/"
        class="mdc-button mdc-button--outlined mdc-ripple-upgraded"
      >Return to homepage</nuxt-link>
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
      return require("@/assets/images/site/404.png");
    }
  }
};
</script>
<style scoped>
.center {
  margin: auto;
  text-align: center;
}
.hue-cycle {
  animation: filter-animation 60s infinite linear;
}

@keyframes filter-animation {
  0% {
    filter: hue-rotate(0deg);
  }

  50% {
    filter: hue-rotate(360deg);
  }

  100% {
    filter: hue-rotate(0deg);
  }
}
</style>

