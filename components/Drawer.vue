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
          <transition-group name="nav-routes">
            <div v-for="item in flatNavItems" class="nav-routes-item" :key="item.url">
              <nuxt-link
                class="mdc-list-item"
                :class="{
              'mdc-list-item--activated': item.url==$route.path
            }"
                :to="item.url"
                aria-selected="true"
              >
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{{item.icon}}</i>
                <span class="mdc-list-item__text">{{item.text}}</span>
              </nuxt-link>
            </div>
          </transition-group>
        </nav>
      </div>
    </aside>
  </transition>
</template>

<script>
import gql from "graphql-tag";
export default {
  props: ["open"],
  data: function() {
    return {
      routes: process.env.routes,
      url: "/"
    };
  },
  apollo: {
    navItems: gql`
      {
        navItems {
          text
          icon
          url
          routes {
            title
            url
          }
        }
      }
    `
  },
  computed: {
    modal() {
      return this.$mq !== "lg";
    },
    flatNavItems() {
      const items = [];
      if (this.navItems) {
        this.navItems.forEach(route => {
          items.push(route);
          if (this.$route.path.startsWith(route.url)) {
            route.routes.forEach(item => {
              items.push({
                text: item.title,
                url: item.url
              });
            });
          }
        });
      }
      return items;
    }
  }
};
</script>

<style lang="sass">
aside.mdc-drawer {
  min-height: 100vh;
  position: fixed;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

@media screen and (max-width: 1279px) {
  .mdc-drawer--persistant {
    display: none !important;
  }
}

.nav-routes-item {
  transition: all 0.5s, opacity 0.2s;
  display: inline-block;
  width: 100%;
}
.nav-routes-enter, .nav-routes-leave-to{
  opacity: 0;
}
.nav-routes-leave-active{
  position: absolute;
  right: 0;
}
</style>
