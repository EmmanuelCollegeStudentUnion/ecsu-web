import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'node-fetch'
import { setContext } from 'apollo-link-context';
import Cookies from 'js-cookie'



import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
Vue.use(VueApollo)





export default (ctx, inject) => {
    // Cache implementation
    const cache = new InMemoryCache()

    const authLink = setContext((_, { headers }) => {
        var token = null;
        if (ctx.isServer) {
            token = ctx.req.cookies["access_token"]
        } else {
            token = Cookies.get("access_token")
        }
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            }
        }
    });


    const link = authLink.concat(createUploadLink({ uri: "https://ecsu.org.uk/api/graphql", fetch }));

    // Create the apollo client
    const apolloClient = new ApolloClient({
        link,
        cache,

        defaultOptions: {

            watchQuery: {
                fetchPolicy: 'cache-and-network',
            },
            query: {
                fetchPolicy: 'cache-and-network'
            },
        }

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
            await ApolloSSR.prefetchAll(apolloProvider, Components, ctx);
            nuxtState.apollo = ApolloSSR.getStates(apolloProvider);
        })
    } else {
        cache.restore(window.__NUXT__ ? window.__NUXT__.apollo.defaultClient : null)
    }
}