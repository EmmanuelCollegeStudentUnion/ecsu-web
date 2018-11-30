export default async (contentType, contentName) => {
    const context = require.context(`@/content/`, true, /\.md$/)
    if (contentName) {
        return await context(`./${contentType}/${contentName}.md`)
    } else {
        return await Promise.all(
            context.keys()
                .map(x => x.match(`\.\/${contentType}\/(.*).md`))
                .filter(x => x)
                .map(x => ({ ...context(x[0]), filename: x[1], url: `/${contentType}/${x[1]}` }))
        )

    }
}