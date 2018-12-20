<template>
  <div id="root">
    <div class="mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <span class="mdc-top-app-bar__title">
            <img class="header-logo" :src="logo.src" :srcset="logo.srcSet" width="165px">
          </span>
          <div style="margin:auto"/>
          <button
            v-show="$mq!='lg'"
            class="material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
            style="float:right; --mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;"
            v-on:click="drawerOpen=!drawerOpen"
          >menu</button>
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
export default {
  components: { Drawer, Footer, Cookies },
  data: () => ({
    drawerOpen: false
  }),
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"
      }
    ]
  },
  watch: {
    $route(to, from) {
      this.drawerOpen = false;
    }
  },
  computed: {
    logo() {
      return require("@/assets/images/logo1.png");
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
  min-height: 100vh;
  margin: 32px 0;
  @media screen and (min-width: 1280px) {
    margin: 32px;
    margin-left: 288px;
  }
}
.app-content {
  flex: auto;
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
