<template>
  <div class="mdc-layout-grid__inner">
    <template v-if="error.statusCode === 404">
      <div class="mdc-layout-grid__cell--span-12">
        <h1 class="mdc-typography--headline2">Page not found</h1>
      </div>
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
    </template>
    <template v-else>
      <div class="mdc-layout-grid__cell--span-12">
        <h1 class="mdc-typography--headline4">Something went wrong. Try refreshing the page</h1>
        <a href="/">Home page</a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  mounted: function() {
    if (this.$store.state.cookies.consent) {
      this.rollbar.error(this.error.message);
    }
  },
  head: {
    title: "Error"
  },
  computed: {
    image() {
      return require("@/assets/images/site/404.png");
    }
  },
  props: ["error"]
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
