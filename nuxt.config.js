
const glob = require('glob')
const path = require('path')
import routes from "./routes"
const flatMap = (arr, f) => [].concat.apply([], arr.map(f))
var urls = flatMap(routes, (x => [
    x.url,
    ...x.items.map(item => item.url),

]))
export default {
    build: {
        extend(config) {
            config.module.rules.push(
                { test: /\.md$/, loader: 'markdown-with-front-matter-loader' }
            )
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
                    min: 1000,
                    max: 2800,
                    steps: 4,
                    placeholder: true,
                    adapter: require("responsive-loader/sharp")
                }
            });

            return config;
        }
    },
    generate: {
        routes: urls
    },
    env: {
        routes
    },
    router: {
        scrollBehavior: function (to, from, savedPosition) {
            return { x: 0, y: 0 }
        }
    },
    plugins: [
        '~/plugins/vue-progressive-image',
        '~/plugins/vue-mq',
        '~/plugins/vue-apollo',
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
        '@nuxtjs/pwa'
    ]
}

