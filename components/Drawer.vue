<template>
  <aside class="mdc-drawer mdc-theme--background">
    <div class="mdc-drawer__content">
      <nav class="mdc-list">
        <template v-for="route in routes">
          <nuxt-link
            class="mdc-list-item"
            :key="route.url"
            :class="{
              'mdc-list-item--activated': route.url==$route.path
            }"
            :to="route.url"
            aria-selected="true"
          >
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{{route.icon}}</i>
            <span class="mdc-list-item__text">{{route.text}}</span>
          </nuxt-link>
          <template v-if="$route.path.startsWith(route.url)" v-for="item in route.items">
            <nuxt-link
              class="mdc-list-item"
              v-if="item.showInNav"
              :key="item.url"
              :class="{
              'mdc-list-item--activated': item.url==$route.path
            }"
              :to="item.url"
              aria-selected="true"
            >
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{{item.icon}}</i>
              <span class="mdc-list-item__text">{{item.text}}</span>
            </nuxt-link>
          </template>
        </template>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  data: function() {
    return {
      routes: process.env.routes,
      url: "/"
    };
  }
};
</script>

<style>
aside.mdc-drawer {
  min-height: 100%;
  height: auto;
}
</style>
