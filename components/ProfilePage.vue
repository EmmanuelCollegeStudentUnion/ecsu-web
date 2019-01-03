<template>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 center">
      <v-lazy-image
        class="circle-image mdc-card--outlined"
        :src="image.src"
        :srcset="image.srcSet"
        :src-placeholder="image.placeholder"
        :alt="image.alt"
      />
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-5 center" v-if="!!$slots.title">
      <div>
        <header>
          <h1 class="mdc-typography--headline2" v-if="!!$slots.title">
            <slot name="title"/>
          </h1>
        </header>

        <p
          class="mdc-typography--headline3 mdc-theme--text-secondary-on-light"
          v-if="!!$slots.subtitle"
        >
          <slot name="subtitle"/>
        </p>

        <p class="mdc-typography--body1" v-if="!!$slots.description">
          <slot name="description"/>
        </p>
      </div>
    </div>
    <hr class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 page-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"]
};
</script>

<style scoped>
.circle-image {
  object-fit: cover;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  max-width: 300px;
  max-height: 300px;
  margin: auto;
  object-position: 50% 50%;
  border-width: 3px;
}
.center {
  margin: auto;
}
</style>

