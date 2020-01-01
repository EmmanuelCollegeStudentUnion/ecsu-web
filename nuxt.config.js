
const glob = require('glob')
const path = require('path')

import fetch from 'node-fetch'
const nodeEnv = process.env.NODE_ENV || 'production';
const gaId = {
    'production': 'UA-155232483-1',
    'development': 'UA-131416461-2'
}[nodeEnv];

const routes = fetch('https://ecsu.org.uk/api/graphql?query={routes{url}}')
    .then(x => x.json())
    .then(x => x.data.routes.map(route => route.url))

export default {
    modern: nodeEnv === 'production' ? 'client' : false,
    build: {
        babel: {
            plugins: [
                "graphql-tag"
            ]
        },
        extend(config) {
            // Configure scss for material designs imports style (relative to node_modules)
            // Solution found in https://github.com/material-components/material-components-web/issues/351#issuecomment-298796798
            config.module.rules.forEach((rule) => {
                // Get sass & scss loaders
                if (['/\\.sass$/', '/\\.scss$/'].includes(rule.test.toString())) {
                    rule.oneOf.forEach(oneOf => {
                        const loader = oneOf.use.pop()
                        oneOf.use.push({
                            ...loader,
                            options: {
                                includePaths: glob.sync(path.join(__dirname, 'node_modules/@material')).map((dir) => path.dirname(dir)),
                            }
                        })
                    })

                }
            })

            /*
            ** Let responsive-loader handle jpgs and png
            */

            config.module.rules.find(
                rule => rule.loader === "url-loader" ||
                    rule.use != undefined && rule.use.find(x => x.loader === "url-loader") !== undefined
            ).exclude = /\.(jpe?g|png)$/;

            /*
            ** Configure responsive-loader
            */

            config.module.rules.push({
                test: /\.(jpe?g|png)$/i,
                loader: "responsive-loader",
                options: {
                    min: 300,
                    max: 2000,
                    steps: 4,
                    placeholder: true,
                    adapter: require("responsive-loader/sharp"),
                    disable: nodeEnv !== 'production'
                },
            });

            return config;
        }
    },
    generate: {
        routes() {
            return routes
        },
        done({ duration, errors, workerInfo }) {
            if (errors.length > 0) {
                console.error(errors);
                process.exitCode = 1;
            }
        }
    },
    env: {

    },
    router: {
        scrollBehavior: function (to, from, savedPosition) {
            return { x: 0, y: 0 }
        }
    },
    plugins: [
        '~/plugins/vue-apollo',
        '~/plugins/auth',
        '~/plugins/vue-lazyload',
        '~/plugins/vue-mq',

    ],
    loading: {
        color: '#d926a5',
    },
    meta: {
        'ogImage': '/images/thumbnail.png'
    },
    apollo: {
        clientConfigs: {
            default: '~/apollo.config.js',
        },
    },
    modules: [
        'nuxt-purgecss',
        '@nuxtjs/pwa',
        '@nuxtjs/sitemap',
        'nuxt-webfontloader',
        ['nuxt-rollbar-module', {
            serverAccessToken: '8c5b36a9377c42059e5bb2fca54d8b8f',
            clientAccessToken: 'dfdb3ce2cf0e4428b26124d2a9fbb603',
            config: {
                enabled: nodeEnv === 'production',
                captureIp: 'anonymize'
            }
        }],
        ['@nuxtjs/google-analytics', { id: gaId }],
    ],
    purgeCSS: {
        mode: 'postcss',
        paths: [
            'node_modules/@material/**/*.js',
            'node_modules/@uppy/**/*.js',
        ],
        whitelistPatterns: [/uppy/],
        whitelistPatternsChildren: [/uppy/]
    },
    head: {
        titleTemplate: 'ECSU | %s',
        script: [
            { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,Object.entries,IntersectionObserver' },
            { innerHTML: `window['ga-disable-UA-${gaId}'] = true;`, type: 'text/javascript', charset: 'utf-8' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic' }
        ],
        __dangerouslyDisableSanitizers: ['script']
    },
    webfontloader: {
        google: {
            families: ['Material+Icons']
        }
    },
    sitemap: {
        path: '/sitemap.xml',
        hostname: 'https://ecsu.org.uk',
        cacheTime: 1000 * 60 * 15,
        generate: true,
        routes() {
            return routes;
        }
    }
}

