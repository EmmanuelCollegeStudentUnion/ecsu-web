<template>
  <div class="container">
    <h1>An error occurred</h1>
    <a href="/">Home page</a>
  </div>
</template>

<script>
export default {
  mounted: function() {
    //Refresh when an error happens in case its we've lost internet connection.
    if (!this.$route.query.refresh) {
      const redirect = this.$route.path + "?refresh=1";
      window.location.replace(redirect);
    }
  }
};
</script>