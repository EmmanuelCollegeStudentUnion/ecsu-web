<template>
  <article class="card mdc-card--outlined">
    <div class="mdc-typography--body2 card-content">
      <div class="text-card-header">
        <i class="material-icons mdc-list-item__graphic card-icon">{{icon}}</i>
        <span class="mdc-list-item__text">
          <span class="mdc-list-item__primary-text center">{{title}}</span>
        </span>
      </div>
      <slot/>
    </div>
  </article>
</template>

<script>
export default {
  props: ["title", "icon"]
};
</script>
<style lang="scss">
@import "@material/elevation/mdc-elevation";
article.card:hover {
  @extend .mdc-elevation--z5;
}
.card-content {
  padding: 24px;
}
article.card {
  @extend .mdc-elevation-transition;
  border-radius: 24px;
  min-height: 300px;
  max-width: 450px;
  margin: auto;
}
.card-icon {
  float: left;
}
.center {
  margin: auto;
}
.text-card-header {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  padding: 0 16px;
  overflow: hidden;
}
</style>
