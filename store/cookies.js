import Cookies from 'js-cookie'

export const state = () => ({
    consent: false
})

export const mutations = {
    readConsent(state) {
        state.consent = Cookies.get("_cookie_consent") == "True"
    },
    consent(state) {
        state.consent = true
        Cookies.set("_cookie_consent", "True")
    },
    clear(state) {
        state.consent = false
        Cookies.remove("_cookie_consent")
    }
}