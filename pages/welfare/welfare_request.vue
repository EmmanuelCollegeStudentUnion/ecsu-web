<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 page-content">
    <h1 class="mdc-typography--headline2">General welfare request</h1>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="/assets/php/welfare_request.php"
    >
      <TextField name="message" label="Message"/>
      <p></p>
      <input
        class="mdc-button mdc-button--outlined mdc-ripple-upgraded"
        type="submit"
        value="Place Request"
      >
    </form>
  </div>
</template>

<script>
import TextField from "@/components/TextField";
import StandardPage from "@/components/StandardPage";
export default {
  components: { StandardPage, TextField },
  head: {
    title: "Welfare request"
  },
  data() {
    return { message: "" };
  }
};
</script>

