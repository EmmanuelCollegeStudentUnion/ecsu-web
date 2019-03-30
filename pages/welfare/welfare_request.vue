<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 page-content">
    <h1 class="mdc-typography--headline2">General welfare request</h1>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="/assets/php/form-to-feedback.php"
    >
      <TextField name="message" label="Message"/>
      <br>
      <br>
      <input type="hidden" name="form_type" value="welffare">
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
  components: { StandardPage, TextField, VueRecaptcha },
  head: {
    title: "Welfare request"
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

