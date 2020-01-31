<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 page-content">
    <h1 class="mdc-typography--headline2">General welfare request</h1>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="/assets/php/form-to-feedback.php"
    >
      <TextField name="message" label="Message" style="width:100%"/>
      <br>
      <br>
      <input type="hidden" name="form_type" value="welffare">
      <VueRecaptcha
        :sitekey="sitekey"
        type="checkbox"
        v-on:verify="captchaDone"
      ></VueRecaptcha>
      <input
        type="text"
        class="captchaField"
        ref="captchaEntry"
        id="captcha-token"
        style="width:50%"
        :value="captchaToken"
        required
        placeholder="Please tick 'I am not a robot'"
        v-on:keydown.prevent.stop
        readonly
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
  components: { StandardPage, TextField, VueRecaptcha },
  head: {
    title: "Welfare request"
  },
  mounted() {
    let script = document.createElement('script')
    script.async = true
    script.src = 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit'
    document.head.appendChild(script)
  },
  data() {
    return { 
      captchaToken: "", 
      message: "", 
      sitekey: "6Lf2vZMUAAAAAB4gxrZxicR8R-to7d-lIQZIGKC4",
      //sitekey: "6LeBstQUAAAAAN_9fCLlKhIV99TA_M1nodnyW78D", // Local Testing key
    };
  },
  methods: {
    captchaDone: function(token) {
      this.captchaToken = token;
      this.$refs.captchaEntry.style="visibility:hidden;"
    }
  },
};
</script>

