const yamlFront = require('yaml-front-matter')
const glob = require('glob')
const path = require('path')
const url = require('url');
const fs = require('fs')
function itemsForContent(contentType) {
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
                url: urlText
            }
        })
}
export default [
    {
        name: "index",
        text: "Home",
        icon: "home",
        url: "/",
        items: []
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
        url: "/posts",
        items: []
    },
    {
        text: "Welfare",
        icon: "sentiment_very_satisfied",
        url: "/welfare",
        items: itemsForContent("welfare")
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
