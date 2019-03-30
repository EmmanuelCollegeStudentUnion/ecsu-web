<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <h1 class="mdc-typography--headline2">Anonymous Feedback</h1>
    <h5 class="mdc-typography--headline6">Send Your Messages to ECSU Anonymously</h5>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="/assets/php/form-to-feedback.php"
    >
      <TextField name="message" label="Message"/>
      <br>
      <br>
      <input type="hidden" name="form_type" value="feedback">
      <VueRecaptcha
        sitekey="6Lf2vZMUAAAAAB4gxrZxicR8R-to7d-lIQZIGKC4"
        type="checkbox"
        v-on:verify="captchaDone"
      ></VueRecaptcha>
      <input
        type="text"
        class="captchaField"
        id="captcha-token"
        :value="captchaToken"
        required
        placeholder="Please tick 'I am not a robot'"
        v-on:keydown.prevent.stop
      >
      <br>
      <input class="mdc-button mdc-button--outlined mdc-ripple-upgraded" type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import TextField from "@/components/TextField";
import StandardPage from "@/components/StandardPage";
export default {
  components: { StandardPage, VueRecaptcha, TextField },
  head: {
    title: "Feedback",
    script: [
      {
        src:
          "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
        async: true,
        defer: true
      }
    ]
  },
  data() {
    return { captchaToken: "", message: "" };
  },
  methods: {
    captchaDone: function(token) {
      this.captchaToken = token;
    }
  }
};
</script>

<style lang="scss">
.captchaField {
  width: 100%;
  margin: 24px 0px;
  border: none;
}
.captchaField:valid {
  visibility: hidden;
}
</style>
