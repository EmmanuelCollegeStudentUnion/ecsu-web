<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <h1 class="mdc-typography--headline2">Request a pregnancy kit</h1>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="/assets/php/pregnancytest.php"
    >
      <TextField v-model="message" label="Message" name="message"/>
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
    title: "Pregnancy kit"
  },
  data() {
    return { message: "I would like to request a pregnancy kit." };
  }
};
</script>

<style lang="scss">
</style>
