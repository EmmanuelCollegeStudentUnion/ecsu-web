import fetch from 'node-fetch'
import Cookies from 'js-cookie'
export default async function (ctx) {
    const { router, route, store, isServer, res } = ctx
    const wlsResponse = route.query['WLS-Response']
    if (wlsResponse) {
        try {
            const response = await fetch(`https://ecsu.org.uk/api/token?WLS-Response=${wlsResponse}`)
            const json = await response.json()
            if (process.server) {
                res.setHeader('Set-Cookie', [`access_token=${json.token}`]); // Server-side
            } else {
                //document.cookie = `access_token=${json.token}` // Client-side
                Cookies.set("access_token", json.token)
            }
        } catch (e) {
            console.error(e)
        }
        if (process.client) {
            ctx.app.apolloProvider.defaultClient.resetStore()
        }
    }
}