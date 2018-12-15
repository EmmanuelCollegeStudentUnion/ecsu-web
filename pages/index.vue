<template>
  <StandardPage>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <div class="page-content">
        <img :srcset="sketchImage.srcSet" :src="sketchImage.src" width="100%">
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
      v-for="item in ecsu_does"
      :key="item.title"
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-3-desktop"
    >
      <TextCard :title="item.name" :icon="item.icon">
        <p>{{item.description}}</p>
      </TextCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-heading">
      <h2 class="mdc-typography--headline2 layout-center">What's here?</h2>
    </div>
    <div
      v-for="item in whats_here"
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

export default {
  asyncData: async ({ params }) => {
    const home = await content("pages", "home");
    home.whats_here = await Promise.all(
      home.whats_here.map(async x => ({
        ...x,
        image: await resolveImage(x.image)
      }))
    );
    return home;
  },
  components: {
    TextCard,
    ImageCaptionCard,
    StandardPage
  },
  head: {
    title: "ECSU | Emmanuel College Students' Union"
  },
  computed: {
    sketchImage() {
      return require("@/assets/images/Sketch.png");
    }
  }
};
</script>

<style lang="scss">
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
}
.hero-heading {
  margin: 32px 0;
  font-size: 80px;
  @media screen and (min-width: 1280px) {
    font-size: 96px;
    margin: 32px 32px;
  }
}
.center-heading {
  margin: 16px auto;
}
</style>
