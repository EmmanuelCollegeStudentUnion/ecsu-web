<template>
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    <h1 class="mdc-typography--headline2">Request a pregnancy kit</h1>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="/assets/php/pregnancytest.php"
    >
      <mdc-textfield v-model="message" fullwidth label="Message" name="message"/>
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
import StandardPage from "@/components/StandardPage";
export default {
  components: { StandardPage },
  head: {
    title: "Pregnancy kit"
  },
  data() {
    return { message: "I would like to request a pregnancy kit." };
  }
};
</script>

<style lang="scss">
@import "vue-mdc-adapter/dist/textfield/styles";
</style>
