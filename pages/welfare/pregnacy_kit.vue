<template>
  <section>
    <h1>Request a pregnancy kit</h1>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="/assets/php/pregnancytest.php"
    >
      <textarea name="message" id="message">I would like to request a pregnancy kit.</textarea>
      <br>
      <input type="submit" value="Place Request" class="special">
    </form>
  </section>
</template>
