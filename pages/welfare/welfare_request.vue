<template>
  <section>
    <h1>General welfare request</h1>
    <form
      id="main-contact-form"
      name="contact-form"
      method="post"
      action="/assets/php/welfare_request.php"
    >
      <textarea name="message" id="message"></textarea>
      <br>
      <input type="submit" value="Place Request" class="special">
    </form>
  </section>
</template>
