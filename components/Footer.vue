<template>
  <footer>
    <a href="https://www.emma.cam.ac.uk">Emmanuel College</a> |
    <a href="/cookies">Cookies</a> |
    <a href="/conditions">Conditions of Use</a> |
    <a href="/accessibility">Accessibility</a> |
    <a href="http://www.cusu.cam.ac.uk/">CUSU</a> |
    <a href="/info/map">College Map</a> |
    <a href="https://www.emmamcr.org.uk/">MCR</a> |
    <a href="/feedback">Feedback</a> |
    <a href="/exec">Contact us</a>
    <template v-if="deferredPrompt">
      |
      <a v-on:click="deferredPrompt.prompt()">Add to homescreen</a>
    </template>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      deferredPrompt: false
    };
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", function(e) {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
  }
};
</script>


<style scoped>
footer {
  position: inherit;
  bottom: 5px;
  width: 100%;
  text-align: center;
}
a {
  border-bottom: dotted 1px;
  color: rgba(0, 0, 0, 0.4);
}
</style>
