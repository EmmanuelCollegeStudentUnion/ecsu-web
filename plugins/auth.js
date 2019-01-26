import fetch from 'node-fetch'
export default async function ({ router, route, store, isServer, res }) {
    const wlsResponse = route.query['WLS-Response']
    if (wlsResponse) {
        try {
            const response = await fetch(`https://nh487.user.srcf.net/api/token?WLS-Response=${wlsResponse}`)
            const json = await response.json()
            if (process.server) {
                res.setHeader('Set-Cookie', [`access_token=${json.token}`]); // Server-side
            } else {
                document.cookie = `access_token=${json.token}` // Client-side
            }
        } catch (e) {
            console.error(e)
        }
    }

}