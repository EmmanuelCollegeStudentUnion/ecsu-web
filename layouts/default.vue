<template>
  <div id="root">
    <div class="mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <span class="mdc-top-app-bar__title top-app-bar">
            <nuxt-link to="/">
              <img
                class="header-logo"
                :src="logo.src"
                :srcset="logo.srcSet"
                alt="ECSU logo"
                width="165px"
              >
            </nuxt-link>
          </span>
          <button
            aria-label="menu"
            v-show="$mq!='lg'"
            class="mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded menu-icon"
            style="float:right; --mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;"
            v-on:click="drawerOpen=!drawerOpen"
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>menu</title>
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button>
        </section>
      </div>
    </div>
    <Drawer :open="drawerOpen"/>
    <transition name="fade">
      <div class="mdc-drawer-scrim" v-on:click="drawerOpen=false" v-if="drawerOpen"/>
    </transition>
    <div class="mdc-top-app-bar--fixed-adjust app-content">
      <div class="mdc-layout-grid page-surface">
        <transition name="fade">
          <nuxt/>
        </transition>
      </div>
      <Footer/>
    </div>
    <Cookies/>
  </div>
</template>
<script>
import "normalize.css";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
import Cookies from "@/components/Cookies";
const sketchImage = require("@/assets/images/pages/home/Sketch.png");
sketchImage.src = sketchImage.images.slice(-1)[0].path;
export default {
  components: { Drawer, Footer, Cookies },

  head: {
    title: "Emmanuel College Students' Union",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ECSU is the Emmanuel College Students' Union, which is the representative body for students of Emmanuel College, Cambridge. The daily business of ECSU is managed by the Executive, or 'Exec', members of which have specific responsibilities. The Committee is elected on a yearly basis at the end of Michaelmas Term."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://ecsu.org.uk" + sketchImage.src
      }
    ]
  },
  data: () => ({
    drawerOpen: false
  }),
  watch: {
    $route(to, from) {
      this.drawerOpen = false;
    }
  },
  computed: {
    logo() {
      return require("@/assets/images/site/logo1.png");
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/site.scss";
.header-logo {
  display: block;
}
.mdc-top-app-bar {
  position: fixed;
}
#root {
  @extend .mdc-theme--background;
  height: 100%;
  display: flex;
}

.page-content {
  max-width: 820px;
  margin: auto;
  width: 100%;
  overflow: auto;
}

.page-surface {
  background-color: white;
  border-radius: 24px;
  margin: 32px;
  margin-left: 288px;
  min-height: 100vh;
  @media screen and (max-width: 1279px) {
    margin: 32px 0;
  }
}
.app-content {
  flex: auto;
  width: 100%; //ie
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
.top-app-bar {
  width: 100%;
}
</style>
