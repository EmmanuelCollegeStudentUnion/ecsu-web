
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
            return config
        }
    },
    generate: {
        routes: urls
    },
    env: {
        routes
    },
    plugins: [
        '~/plugins/vue-progressive-image',
        '~/plugins/vue-mq',
    ],
    loading: {
        color: '#d926a5',
    },
    meta: {
        'ogImage': '/images/thumbnail.png'
    },
    modules: [
        '@nuxtjs/pwa'
    ]
}

