<template>
  <StandardPage>
    <template slot="title">
      <slot name="title"/>
    </template>
    <template slot="subtitle">
      <slot name="subtitle"/>
    </template>
    <template slot="media">
      <slot name="media"/>
    </template>
    <hr class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 page-content">
      <slot/>
    </div>
  </StandardPage>
</template>

<style lang="sass">

  hr{
      border: 1px solid #eceff1;
      width: 100%;
      border-radius: 24px;
  }
</style>

<script>
import StandardPage from "@/components/StandardPage";
export default {
  components: { StandardPage }
};
</script>

