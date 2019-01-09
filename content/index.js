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

const images = {
    'access': require.context(`@/assets/images/access`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'exec': require.context(`@/assets/images/exec`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'info': require.context(`@/assets/images/info`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'pages/home': require.context(`@/assets/images/pages/home`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'prospective': require.context(`@/assets/images/prospective`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'room_locations': require.context(`@/assets/images/room_locations`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'site': require.context(`@/assets/images/site`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'societies': require.context(`@/assets/images/societies`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'rooms/blantyre': require.context(`@/assets/images/rooms/blantyre`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'rooms/ec': require.context(`@/assets/images/rooms/ec`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'rooms/fc': require.context(`@/assets/images/rooms/fc`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'rooms/h': require.context(`@/assets/images/rooms/h`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'rooms/nc': require.context(`@/assets/images/rooms/nc`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'rooms/noc': require.context(`@/assets/images/rooms/noc`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'rooms/oc': require.context(`@/assets/images/rooms/oc`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'rooms/park_t': require.context(`@/assets/images/rooms/park_t`, true, /\.(jpe?g|png)$/, 'lazy-once'),
    'rooms/warkworth': require.context(`@/assets/images/rooms/warkworth`, true, /\.(jpe?g|png)$/, 'lazy-once'),
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
    if (!(contentType in mapping)) throw new Error(`Content folder ${contentType} not found`);
    if (contentSlug) {
        if (!(contentSlug in mapping[contentType])) throw new Error(`Content ${contentSlug} not found in ${contentType}`);
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
    if (image == null) return null;
    const asset = image.match(`\/assets\/images\/(.*)\/(.*)`);
    if (asset && asset[1]) {
        if (!(asset[1] in images)) throw new Error(`Image folder ${asset[1]} not found`);
        if (!(images[asset[1]].keys().includes(`./${asset[2]}`))) throw new Error(`Image ${asset[2]} not found in ${asset[1]}`);


        const res = await images[asset[1]](`./${asset[2]}`)
        return {
            src: res.images.slice(-1)[0].path,
            srcSet: res.srcSet,
            placeholder: res.placeholder,
            alt
        }
    } else {
        return { src: image, alt };
    }
}