<template>
  <article class="card mdc-card--outlined">
    <div class="card-content">
      <div class="mdc-theme--text-secondary-on-light">
        <div class="material-icons card-icon md-48">{{icon}}</div>
      </div>
      <div class="text-card-header">
        <span class="center mdc-typography--headline7">{{title}}</span>
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
  text-align: center;
}
article.card {
  @extend .mdc-elevation-transition;
  border-radius: 24px;
  min-height: 350px;
  max-width: 450px;
  margin: auto;
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
.card-icon {
  height: 48px;
}
</style>
