<template>
  <StandardPage>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <div class="page-content">
        <div class="sketchImageContainer">
          <img
            :srcset="sketchImage.srcSet"
            :src="sketchImage.src"
            alt="front court"
            width="100%"
          >
        </div>
        <h1 class="mdc-typography--headline1 mdc-theme--text-secondary-on-light hero-heading">
          Welcome to
          <span class="mdc-theme--text-primary-on-light">ECSU</span>
        </h1>
        <div class="mdc-typography--body1">
          <p>
            ECSU is the Emmanuel College Students' Union, which is the representative body for students of Emmanuel
            College, Cambridge. The daily business of ECSU is managed by the Executive, or 'Exec', members of which have
            specific responsibilities. The Committee is elected on a yearly basis at the end of Michaelmas Term.
          </p>
        </div>
      </div>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-button">
      <div class="button-padding">
        <nuxt-link to="/prospective" class="mdc-fab mdc-fab--extended">
          <span class="mdc-fab__label">Prospective students</span>
        </nuxt-link>
      </div>
    </div>

    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-heading">
      <h2 class="mdc-typography--headline2 layout-center">What Does ECSU Do?</h2>
    </div>
    <div
      v-for="item in ecsuDoes"
      :key="item.title"
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-3-desktop"
    >
      <TextCard :title="item.title" :icon="item.icon">
        <p>{{item.description}}</p>
      </TextCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-heading">
      <h2 class="mdc-typography--headline2 layout-center">What's here?</h2>
    </div>
    <div
      v-for="item in whatsHere"
      :key="item.title"
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4"
    >
      <ImageCaptionCard :title="item.title" :image="item.image" :url="item.url">{{item.description}}</ImageCaptionCard>
    </div>
  </StandardPage>
</template>
<script>
import content from "@/content";
import { resolveImage } from "@/content";
import TextCard from "@/components/TextCard";
import ImageCaptionCard from "@/components/ImageCaptionCard";
import StandardPage from "@/components/StandardPage";
import gql from "graphql-tag";
const sketchImage = require("@/assets/images/pages/home/Sketch.png");
sketchImage.src = sketchImage.images.slice(-1)[0].path;

export default {
  components: {
    TextCard,
    ImageCaptionCard,
    StandardPage
  },
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
  data() {
    return { sketchImage };
  },
  computed: {
    ecsuDoes() {
      return this.homePage ? this.homePage.ecsuDoes : [];
    },
    whatsHere() {
      return this.homePage ? this.homePage.whatsHere : [];
    }
  },
  apollo: {
    homePage: gql`
      {
        homePage {
          whatsHere {
            title
            url
            description
            image {
              src
              srcSet
              alt
              placeholder
            }
          }

          ecsuDoes {
            title
            description
            icon
          }
        }
      }
    `
  }
};
</script>

<style scoped lang="scss">
.sketchImageContainer {
  padding-bottom: 48%;
  overflow: hidden;
  height: 0;
}
.card-image-content {
  background-size: cover;
  background-position: center;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}
article.card-image {
  border-radius: 24px;
}
.center-button {
  margin: auto;
}
.button-padding {
  padding: 16px;
  text-align: center; //ie
}
.hero-heading {
  margin: 32px 0;
  font-size: 80px;
  text-align: center;
  @media screen and (min-width: 1280px) {
    font-size: 96px;
    margin: 32px 32px;
    text-align: left;
  }
}
.center-heading {
  margin: 16px auto;
}
</style>
