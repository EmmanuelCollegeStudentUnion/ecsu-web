const glob = require('glob')
const content = glob.sync('content/**/*.md')
const routes = content.map(filename => {
    console.log("filename" + filename)
    const match = filename.match('^content\/(.*)\.md')[1]
    console.log("match: " + match)
    return match
})
console.log(routes)
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

