<template>
  <div>
    <!-- Header. Yay code reuse! -->
    <Header2018/>

    <!-- Wrapper -->
    <div class="wrapper">
      <nuxt/>
    </div>

    <!-- Footer -->
    <Footer2018/>

    <!-- Scripts -->
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/skel.min.js"></script>
    <script src="/assets/js/util.js"></script>
    <script src="/assets/js/jquery.dropotron.min.js"></script>
    <script src="/assets/js/main.js"></script>
  </div>
</template>
<script>
import Header2018 from "~/components/Header2018.vue";
import Footer2018 from "~/components/Footer2018.vue";
export default {
  components: {
    Header2018,
    Footer2018
  },
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
      { rel: "stylesheet", href: "/assets/css/main.css" },
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
      }
    ]
  }
};
</script>

