<template>
  <div class="mdc-layout-grid__inner">
    <div
      class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 page-content"
      v-if="!!$slots.title"
    >
      <h1 class="mdc-typography--headline2" v-if="!!$slots.title">
        <slot name="title"/>
      </h1>
      <p
        class="mdc-typography--headline6 mdc-theme--text-secondary-on-light page-content"
        v-if="!!$slots.subtitle"
      >
        <slot name="subtitle"/>
      </p>
      <p class="mdc-typography--body1" v-if="!!$slots.description"></p>
      <slot/>
    </div>
  </div>
</template>
