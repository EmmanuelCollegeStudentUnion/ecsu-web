<template>
  <div class="mdc-layout-grid__inner">
    <div
      class="mdc-layout-grid__cell center left-heading"
      v-if="!!$slots.title"
      :class="{
      'mdc-layout-grid__cell--span-6': !!$slots.media,
      'mdc-layout-grid__cell--span-12': !$slots.media,
    }"
    >
      <header>
        <h1 class="mdc-typography--headline2" v-if="!!$slots.title">
          <slot name="title"/>
        </h1>
      </header>

      <p
        class="mdc-typography--headline5 mdc-theme--text-secondary-on-light"
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

.left-heading {
  margin-left: 2rem;
}
</style>
