import fetch from 'node-fetch'
export default function ({ route, store, isServer, res }) {
    const wlsResponse = route.query['WLS-Response']
    if (wlsResponse) {
        fetch(`https://nh487.user.srcf.net/api/token?WLS-Response=${wlsResponse}`)
            .then(response => response.json())
            .then(json => {
                if (isServer) {
                    res.setHeader('Set-Cookie', [`access_token=${json.token}`]); // Server-side
                } else {
                    document.cookie = `access_token=${json.token}` // Client-side
                }
            })
            .catch(e => console.error(e))
    }

}