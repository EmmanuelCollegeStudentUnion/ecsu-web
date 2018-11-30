const glob = require('glob')
const content = glob.sync('content/**/*.md')
const routes = content.map(filename => filename.match('^content\/(.*)\.md')[1])
export default {
    build: {
        extend(config) {
            config.module.rules.push(
                { test: /\.md$/, loader: 'markdown-with-front-matter-loader' }
            )
            return config
        }
    },
    generate: {
        routes
    }
}

