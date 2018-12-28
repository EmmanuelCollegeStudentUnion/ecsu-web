<template>
  <div class="mdc-card--outlined image-caption-card">
    <a
      class="mdc-card__primary-action mdc-ripple-upgraded image-caption-primary-action"
      tabindex="0"
      style="--mdc-ripple-fg-size:210px; --mdc-ripple-fg-scale:2.34115; --mdc-ripple-fg-translate-start:28.5px, 11.0156px; --mdc-ripple-fg-translate-end:70px, 60.4375px;"
      :href="url"
    >
      <v-lazy-image
        class="mdc-card__media image-caption-card__media"
        :src="image.src"
        :srcset="image.srcSet"
        :src-placeholder="image.placeholder"
      />
      <div class="image-caption-card__primary">
        <h2 class="image-caption-card__title mdc-typography--headline6">{{title}}</h2>
        <h3 v-if="subtitle" class="image-caption-card__title mdc-typography--subtitle1">{{subtitle}}</h3>
      </div>
      <div class="image-caption-card__secondary mdc-typography--body2">
        <slot/>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["title", "image", "url", "subtitle"]
};
</script>

<style scoped lang="scss">
.image-caption-card {
  border-radius: 24px;
}

.image-caption-card--hero {
  margin: 0;
}

.image-caption-card__primary {
  padding: 1rem;
}

.image-caption-primary-action {
  min-height: 350px;
}
.image-caption-card__media {
  object-fit: cover;
  height: 200px;
  width: 100%;
}

.image-caption-card__title {
  margin: 0;
}

.image-caption-card__subtitle {
  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));
  margin: 0;
}

.image-caption-card__secondary {
  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));
  padding: 0 1rem 8px 1rem;
}
</style>
