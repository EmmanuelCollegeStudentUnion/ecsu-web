const collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base"
});

function ordering(x) {
    return x.ordering ? x.ordering : 0
}
function pubDate(x) {
    return x.pubdate ? new Date(x.pubdate) : new Date(0)
}
function dateTime(x) {
    return x.datetime ? new Date(x.datetime) : new Date(0)
}
function compare(x, y) {
    if (ordering(y) !== ordering(x)) {
        return ordering(y) - ordering(x)
    } else if (dateTime(x) !== dateTime(y)) {
        return +(dateTime(x) < dateTime(y)) - +(dateTime(y) < dateTime(x));
    } else if (pubDate(x) !== pubDate(y)) {
        return +(pubDate(x) < pubDate(y)) - +(pubDate(y) < pubDate(x));
    } else {
        return collator.compare(x.title, y.title)
    }

}
export default async (contentType, contentName) => {
    const context = require.context(`@/content/`, true, /\.md$/)
    if (contentName) {
        const content = await context(`./${contentType}/${contentName}.md`)
        return {
            ...content,
            id: contentName,
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