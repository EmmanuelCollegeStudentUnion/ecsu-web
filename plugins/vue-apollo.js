import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'node-fetch'

import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
Vue.use(VueApollo)


const link = createUploadLink({ uri: "https://nh487.user.srcf.net/api/graphql", fetch });



export default (ctx, inject) => {
    // Cache implementation
    const cache = new InMemoryCache()

    // Create the apollo client
    const apolloClient = new ApolloClient({
        link,
        cache,

    })


    const apolloProvider = new VueApollo({
        defaultClient: apolloClient,
    })

    const { app, beforeNuxtRender } = ctx
    // Allow access to the provider in the context
    app.apolloProvider = apolloProvider
    if (process.server) {
        const ApolloSSR = require('vue-apollo/ssr')
        Vue.use(ApolloSSR)
        beforeNuxtRender(async ({ Components, nuxtState }) => {
            Components.forEach((Component) => {
                // Fix https://github.com/nuxt-community/apollo-module/issues/19
                if (Component.options && Component.options.apollo && Component.options.apollo.$init) {
                    delete Component.options.apollo.$init
                }
            })
            await ApolloSSR.prefetchAll(apolloProvider, Components, ctx);
            nuxtState.apollo = ApolloSSR.getStates(apolloProvider);
        })
    }
    if (!process.server) {
        cache.restore(window.__NUXT__ ? window.__NUXT__.apollo.defaultClient : null)
    }
}