<template class>
  <article class="ecard mdc-card--outlined" v-on:click="test()">
    <div class="card-content">
      <div class="text-card-header">
        <span class="center mdc-typography--headline6">{{title}}</span>
      </div>
      <slot v-if="expand"/>
    </div>
  </article>
</template>

<script>
export default {
  props: ["title", "icon"],
  data: function() {
    return {
      expand: false,
    };
  },
  methods: {
    test() {
      this.$data.expand = !this.$data.expand;
      console.log(this.expand);
    },
  }
};
</script>
<style lang="scss">
@import "@material/elevation/mdc-elevation";
article.ecard:hover {
  @extend .mdc-elevation--z1;
}
.card-content {
  padding: 24px;
  text-align: center;
}
article.ecard {
  @extend .mdc-elevation-transition;
  border-radius: 24px;
  margin: 5px
}
.center {
  margin: auto;
}
.text-card-header {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  height: 64px;
  padding: 0 16px;
  overflow: hidden;
}
.card-icon {
  height: 48px;
}
</style>
