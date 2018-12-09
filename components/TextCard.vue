<template>
  <article class="card mdc-card--outlined">
    <div class="mdc-typography--body2 card-content">
      <div>
        <div class="material-icons card-icon md-48">{{icon}}</div>
      </div>
      <div class="text-card-header">
        <span class="center">{{title}}</span>
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
  min-height: 300px;
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
</style>
