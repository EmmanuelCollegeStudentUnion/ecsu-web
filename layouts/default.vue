<template>
  <div>
    <header class="mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <span class="mdc-top-app-bar__title">
            <img class="header-logo" src="/images/logo1.png" width="165px">
          </span>
        </section>
      </div>
    </header>
    <div class="flex-container">
      <Drawer/>
      <div class="mdc-layout-grid page-surface" style="width:100%">
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
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/site.scss";
.header-logo {
  display: block;
}
.mdc-top-app-bar {
  position: static;
}
.flex-container {
  display: flex;
}

body {
  @extend .mdc-theme--background;
}

.page-content {
  max-width: 820px;
  margin: auto;
}

.page-surface {
  background-color: white;
  border-radius: 24px;
  margin: 32px;
}
</style>
