<template>
  <div class="mdc-card--outlined image-card">
    <div
      class="mdc-card__primary-action mdc-ripple-upgraded"
      tabindex="0"
      style="--mdc-ripple-fg-size:210px; --mdc-ripple-fg-scale:2.34115; --mdc-ripple-fg-translate-start:28.5px, 11.0156px; --mdc-ripple-fg-translate-end:70px, 60.4375px;"
    >
      <div
        class="mdc-card__media mdc-card__media--16-9 image-card__media"
        :style="{backgroundImage: `url('${image.src}')`}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"]
};
</script>

<style lang="scss">
.image-card {
  min-width: 250px;
  border-radius: 24px;
}

.image-card__media{  
  background-position: top;
}

.image-card--hero {
  margin: 0;
}

.image-card__primary {
  padding: 1rem;
}

.image-card__title {
  margin: 0;
}

.image-card__subtitle {
  color: rgba(0, 0, 0, 0.54);
  /* @alternate */
  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));
  margin: 0;
}

.image-card__secondary {
  color: rgba(0, 0, 0, 0.54);
  /* @alternate */
  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));
  padding: 0 1rem 8px 1rem;
}
</style>
