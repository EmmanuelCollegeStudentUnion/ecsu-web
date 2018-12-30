import compare from './compare'

const content = {
    'blogs': require.context(`@/content/blogs`, true, /\.md$/, 'lazy-once'),
    'exec': require.context(`@/content/exec`, true, /\.md$/, 'lazy-once'),
    'info': require.context(`@/content/info`, true, /\.md$/, 'lazy-once'),
    'pages': require.context(`@/content/pages`, true, /\.md$/, 'lazy'),
    'posts': require.context(`@/content/posts`, true, /\.md$/, 'lazy-once'),
    'prospective': require.context(`@/content/prospective`, true, /\.md$/, 'lazy-once'),
    'room_comments': require.context(`@/content/room_comments`, true, /\.md$/, 'lazy-once'),
    'room_locations': require.context(`@/content/room_locations`, true, /\.md$/, 'lazy-once'),
    'rooms': require.context(`@/content/rooms`, true, /\.md$/, 'lazy-once'),
    'societies': require.context(`@/content/societies`, true, /\.md$/, 'lazy-once'),
    'welfare': require.context(`@/content/welfare`, true, /\.md$/, 'lazy-once'),
    'whatson': require.context(`@/content/whatson`, true, /\.md$/, 'lazy-once'),
}

function filename(filepath) {
    return filepath.split('\\').pop().split('/').pop().split('.')[0]
}

const mapping = {}
Object.keys(content).forEach(collection => {
    mapping[collection] = {}
    content[collection].keys().forEach(key => {
        mapping[collection][filename(key)] = () => content[collection](key)
    });
})


export default async (contentType, contentSlug) => {
    if (contentSlug) {
        const content = await mapping[contentType][contentSlug]()
        return {
            ...content,
            id: contentSlug,
            body: content['__content'],
            type: contentType
        }
    } else {
        return (await Promise.all(
            Object.entries(mapping[contentType]).map(async ([key, value]) => {
                const content = await value()
                return {
                    ...content,
                    url: `/${contentType}/${key}`,
                    id: `/${contentType}/${key}`,
                    body: content['__content'],
                    type: contentType
                }
            })))
            .sort(compare)
    }
}

export async function resolveImage(image, alt) {
    if (image == null) return null
    const context = require.context(`@/assets/images`, true, /\.(jpe?g|png)$/, 'lazy')
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