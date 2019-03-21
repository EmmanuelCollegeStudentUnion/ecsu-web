//Makes pages google amp compatible

const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'
const ampBoilerplate = '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>'
const Purgecss = require('purgecss')
const purgeHtml = require('purge-from-html')

function ampify(html) {
    // Add ⚡ to html tag
    html = html.replace(/<html/gi, '<html ⚡')


    //Load fonts
    let fontConcat = ''
    fontConcat += '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' //load material icons
    html = html.replace(/\@import url\(([^)]*)\);/gis, (match, sub) => {
        fontConcat += `<link rel="stylesheet" type="text/css" href="${sub}">`
        return ''
    })
    html = html.replace('</head>', `${fontConcat}</head>`)



    // Combine css into single tag
    let styleConcat = ''

    styleConcat += 'i.material-icons{visibility:visible !important}' //show material icons
    html = html.replace(/<style[^>]*data-vue-ssr[^>]*>(.*?)?<\/style>/gis, (match, sub) => {
        styleConcat += sub
        return ''
    })
    styleConcat = styleConcat.replace(/\/\*\!.* \*\//, '')
    const purgecss = new Purgecss({
        content: [
            {
                raw: html,
                extension: 'html'
            }],
        css: [{
            raw: styleConcat
        }]
    })
    styleConcat = purgecss.purge()[0].css
    styleConcat = styleConcat.replace(/!important/gi, '') //important is disallowed
    html = html.replace('</head>', `<style amp-custom>${styleConcat}</style></head>`)


    // Remove preload and prefetch tags
    html = html.replace(/<link[^>]*rel="(?:preload|prefetch|modulepreload)?"[^>]*>/gi, '')

    // Remove amphtml tag
    html = html.replace(/<link[^>]*rel="(?:amphtml)?"[^>]*>/gi, '')

    // Remove data attributes from tags
    html = html.replace(/\[data[^\]]*\]/gi, '')
    html = html.replace(/\s*data-(?:[^=>]*="[^"]*"|[^=>\s]*)/gi, '')

    // Remove JS script tags except for ld+json
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, (match) => {
        return (/application\/ld\+json/gi.test(match)) ? match : ''
    })

    // Replace img tags with amp-img
    html = html.replace(/<img([^>]*)>/gi, (match, sub) => {
        if (sub.includes("height") || sub.includes("width")) {
            return `<amp-img ${sub}></amp-img>`
        } else {
            return ''
        }
    })

    // Add AMP script before </head>
    html = html.replace('</head>', ampScript + ampBoilerplate + '</head>')

    return html
}


const glob = require('glob')
const path = require('path')
const fs = require('fs')
glob.sync(path.join(__dirname, './dist/**/*.html')).forEach(file => {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            return console.error(err);
        }
        else if (data.includes("amphtml")) { //This is an amp page
            var result = ampify(data)
            var ampFile = file.replace('.html', '.amp.html')
            fs.writeFile(ampFile, result, 'utf8', function (err) {
                if (err) {
                    return console.error(err);
                }
                else {
                    console.log(`Ampified ⚡  ${ampFile}`)
                }
            });
        }
    });
})