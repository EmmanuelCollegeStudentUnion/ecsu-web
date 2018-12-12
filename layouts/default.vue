<template>
  <div id="root">
    <header class="mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <span class="mdc-top-app-bar__title">
            <img class="header-logo" src="/images/logo1.png" width="165px">
          </span>
          <div style="margin:auto"/>
          <button
            v-if="$mq!='lg'"
            class="material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
            style="float:right; --mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;"
            v-on:click="drawerOpen=!drawerOpen"
          >menu</button>
        </section>
      </div>
    </header>
    <Drawer :open="drawerOpen"/>
    <transition name="fade">
      <div class="mdc-drawer-scrim" v-on:click="drawerOpen=false" v-if="drawerOpen"/>
    </transition>
    <div class="mdc-top-app-bar--fixed-adjust app-content" style="width:100%">
      <div class="mdc-layout-grid page-surface">
        <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import "normalize.css";
import Drawer from "@/components/Drawer";
export default {
  components: { Drawer },
  data: () => ({
    drawerOpen: false
  }),
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "msapplication-config",
        content: "/assets/favicon/browserconfig.xml"
      },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:image", content: "/images/thumbnail.png" }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/favicon/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/favicon/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/favicon/favicon-16x16.png"
      },
      {
        rel: "manifest",
        sizes: "180x180",
        href: "/assets/favicon/manifest.json"
      },
      {
        rel: "mask-icon",
        sizes: "180x180",
        href: "/assets/favicon/safari-pinned-tab.svg",
        color: "#5bbad5"
      },
      {
        rel: "shortcut icon",
        sizes: "180x180",
        href: "/assets/favicon/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"
      }
    ]
  },
  watch: {
    $route(to, from) {
      console.log("hello");
      this.drawerOpen = false;
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
  position: absolute;
}
#root {
  @extend .mdc-theme--background;
  height: 100vh;
  display: flex;
}

.page-content {
  max-width: 820px;
  margin: auto;
}

.page-surface {
  background-color: white;
  border-radius: 24px;
}
.page-surface {
  margin: 32px 0;
}
@media screen and (min-width: 1280px) {
  .page-surface {
    margin: 32px;
    margin-left: 288px;
  }
}
.app-content {
  flex: auto;
  overflow: auto;
  position: relative;
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
