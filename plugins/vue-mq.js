import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: { // default breakpoints - customize this
        xs: 600,
        sm: 960,
        md: 1280,
        lg: Infinity
    },
    defaultBreakpoint: 'xs' // customize this for SSR
})