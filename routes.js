const yamlFront = require('yaml-front-matter')
const glob = require('glob')
const path = require('path')
const url = require('url');
const fs = require('fs')
import compare from './content/compare';
export function itemsForContent(contentType, includeContent) {
    const paths = glob.sync(`content/${contentType}/*.md`)
    return paths
        .map(filename => {
            const slug = filename.match(`^content/${contentType}\/(.*)\.md`, 'utf8')[1]
            const urlText = url.resolve(`/${contentType}/`, slug);
            const file = fs.readFileSync(filename);
            const content = yamlFront.loadFront(file);
            return {
                text: content.title,
                title: content.title,
                name: slug,
                items: [],
                url: urlText,
                ...(includeContent ? content : {})
            }
        }).sort(compare)
}
export default [
    {
        text: "Home",
        icon: "home",
        url: "/",
        items: []
    },
    {
        text: "What's On",
        icon: "today",
        url: "/whatson",
        items: []
    },
    {
        text: "Prospective students",
        icon: "face",
        url: "/prospective",
        items: itemsForContent("prospective")
    },
    {
        text: "Current students",
        icon: "account_circle",
        url: "/members",
        items: [
            {
                text: "Minutes",
                url: "/members/minutes",
                items: []
            },
            {
                text: "Official Documents",
                url: "/members/official_documents",
                items: []
            }
        ]
    },
    {
        text: "Committee",
        icon: "assignment_ind",
        url: "/exec",
        items: itemsForContent("exec")
    },
    {
        text: "Posts",
        icon: "assignment",
        url: "/blogs",
        items: itemsForContent("blogs")
    },
    {
        text: "Welfare",
        icon: "sentiment_very_satisfied",
        url: "/welfare",
        items: [
            ...itemsForContent("welfare"),
            {
                text: "Pregnancy Kit",
                url: "/welfare/pregnancy_kit",
                items: []
            },
            {
                text: "Welfare Request",
                url: "/welfare/welfare_request",
                items: []
            }
        ]
    },
    {
        text: "Societies",
        icon: "rowing",
        url: "/societies",
        items: itemsForContent("societies")
    },
    {
        text: "Room database",
        icon: "location_city",
        url: "/room_locations",
        items: itemsForContent("room_locations")
    },
    {
        text: "Info",
        icon: "info",
        url: "/info",
        items: itemsForContent("info")
    }
]
