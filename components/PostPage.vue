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

<script>
import StandardPage from "@/components/StandardPage";
export default {
  components: { StandardPage }
};
</script>

