<template>
  <div class="image-card">
    <img class="mdc-card--outlined image-card__media" :src="image.src" :srcset="image.srcSet">
  </div>
</template>

<script>
export default {
  props: ["image"]
};
</script>

<style scoped>
.image-card {
  height: 100%;
  width: 100%;
  max-height: 400px;
  margin: auto;
  text-align: center;
}

.image-card__media {
  height: 300px;
  max-width: 100%;
  border-radius: 24px;
  object-fit: contain;
  margin: auto;
  border-width: 2px;
}
</style>
