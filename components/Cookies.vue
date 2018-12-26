<template>
  <transition name="fade">
    <div v-show="cookies" class="cookies-frame">
      <div class="cookies mdc-card mdc-elevation--z10">
        <div class="cookies-content">
          <p>By using this website you agree to our
            <nuxt-link to="/cookies">cookie policy</nuxt-link>
            <span>🍪</span>
          </p>
          <button
            class="mdc-button mdc-button--outlined mdc-ripple-upgraded dismiss-button"
            v-on:click="consent"
          >Accept</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  mounted: function() {
    this.readConsent();
  },
  methods: {
    ...mapMutations({
      readConsent: "cookies/readConsent",
      consent: "cookies/consent"
    })
  },
  computed: {
    cookies() {
      return !this.$store.state.cookies.consent;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@material/elevation/mdc-elevation";
.cookies-frame {
  width: 100%;
  position: fixed;
  bottom: 16px;
  z-index: 9999;
}
.cookies {
  margin: 0 auto;
  max-width: 95%;
  width: fit-content;
  border-radius: 16px;
  display: table;
}
.cookies-content {
  display: flex;
  padding: 4px 8px;
}
.dismiss-button {
  margin: auto 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.mdc-top-app-bar {
  z-index: 7;
}
</style>
