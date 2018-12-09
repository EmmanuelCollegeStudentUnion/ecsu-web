const yamlFront = require('yaml-front-matter')
const glob = require('glob')
const path = require('path')
const url = require('url');
const fs = require('fs')
export function itemsForContent(contentType, showInNav) {
    const paths = glob.sync(`content/${contentType}/*.md`)
    return paths
        .map(filename => {
            const slug = filename.match(`^content/${contentType}\/(.*)\.md`, 'utf8')[1]
            const urlText = url.resolve(`/${contentType}/`, slug);
            const file = fs.readFileSync(filename)
            return {
                text: yamlFront.loadFront(file).title,
                name: slug,
                items: [],
                url: urlText,
                showInNav
            }
        })
}
export default [
    {
        name: "index",
        text: "Home",
        icon: "home",
        url: "/",
        showInNav: true,
        items: []
    },
    {
        text: "Current students",
        icon: "account_circle",
        url: "/members",
        showInNav: true,
        items: [
            {
                text: "Minutes",
                url: "/members/minutes",
                showInNav: true,
                items: []
            },
            {
                text: "Official Documents",
                url: "/members/official_documents",
                showInNav: true,
                items: []
            }
        ]
    },
    {
        text: "Committee",
        icon: "assignment_ind",
        url: "/exec",
        showInNav: true,
        items: itemsForContent("exec", true)
    },
    {
        text: "Posts",
        icon: "assignment",
        url: "/posts",
        showInNav: true,
        items: itemsForContent("posts", false)
    },
    {
        text: "Welfare",
        icon: "sentiment_very_satisfied",
        url: "/welfare",
        showInNav: true,
        items: [
            ...itemsForContent("welfare", true),
            {
                text: "Pregnancy Kit",
                url: "/welfare/pregnancy_kit",
                showInNav: true,
                items: []
            },
            {
                text: "Welfare Request",
                url: "/welfare/welfare_request",
                showInNav: true,
                items: []
            }
        ]
    },
    {
        text: "Societies",
        icon: "rowing",
        url: "/societies",
        showInNav: true,
        items: itemsForContent("societies", true)
    },
    {
        text: "Room database",
        icon: "location_city",
        url: "/room_locations",
        showInNav: true,
        items: itemsForContent("room_locations", true)
    },
    {
        text: "Info",
        icon: "info",
        url: "/info",
        showInNav: true,
        items: itemsForContent("info", true)
    }
]
