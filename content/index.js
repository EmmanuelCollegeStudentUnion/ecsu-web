import compare from './compare'

export default async (contentType, contentSlug) => {
    const context = require.context(`@/content/`, true, /\.md$/)
    if (contentSlug) {
        const content = await context(`./${contentType}/${contentSlug}.md`)
        return {
            ...content,
            id: contentSlug,
            body: content['__content'],
            type: contentType
        }
    } else {
        return await Promise.all(
            context.keys()
                .map(x => x.match(`\.\/${contentType}\/(.*).md`))
                .filter(x => x)
                .map(x => {
                    const content = context(x[0])
                    return {
                        ...context(x[0]),
                        filename: x[1],
                        url: `/${contentType}/${x[1]}`,
                        id: x[1],
                        body: content['__content'],
                        type: contentType
                    }
                })
                .sort(compare)
        )

    }
}

export async function resolveImage(image, alt) {
    if (image == null) return null
    const context = require.context(`@/assets/images`, true, /\.(jpe?g|png)$/)
    const asset = image.match(`\/assets\/images\/(.*)`)
    if (asset && asset[0]) {
        const res = await context(`./${asset[1]}`)
        return {
            src: res.src,
            srcSet: res.srcSet,
            placeholder: res.placeholder,
            alt
        }
    } else {
        return { src: image, alt };
    }
}