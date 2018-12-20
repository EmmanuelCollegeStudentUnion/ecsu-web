<template>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 center" v-if="!!$slots.title">
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
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6" v-if="!!$slots.media">
      <slot name="media"/>
    </div>
    <slot/>
  </div>
</template>


<style scoped>
.center {
  margin: auto;
}
</style>
