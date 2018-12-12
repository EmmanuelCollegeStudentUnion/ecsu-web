<template>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
      <div
        :style="{
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '50%',
          width: '300px',
          height: '300px',
          maxWidth: '300px',
          maxHeight: '300px',
          margin:'auto',
          backgroundPositionX: 'center'}"
      />
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4" v-if="!!$slots.title">
      <div style="text-align: center">
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
    </div>
    <hr class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 page-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"]
};
</script>
