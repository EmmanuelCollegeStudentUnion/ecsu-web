<template>
  <transition name="slide">
    <aside
      class="mdc-drawer mdc-drawer--open mdc-top-app-bar--fixed-adjust"
      v-show="open||!modal"
      :class="{
        'mdc-drawer--modal': modal,
        'mdc-drawer--persistant': !modal
      }"
    >
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
  </transition>
</template>

<script>
export default {
  props: ["open"],
  data: function() {
    return {
      routes: process.env.routes,
      url: "/"
    };
  },
  computed: {
    modal() {
      return this.$mq !== "lg";
    }
  }
};
</script>

<style lang="sass">
aside.mdc-drawer {
  min-height: 100vh;
  overflow: auto;
}
.mdc-drawer {
  position: absolute;
  @media screen and (min-width: 1280px) {
    position: fixed;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

@media screen and (max-width: 1280px) {
  .mdc-drawer--persistant {
    display: none
  }
}

</style>
