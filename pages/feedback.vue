<template>
  <section>
    <img src="/images/anon.png" align="right" id="imgborder1" width="70">

    <header>
      <h1>Anonymous Feedback</h1>
      <p>Send Your Messages to ECSU Anonymously</p>
    </header>

    <form method="post" name="myemailform" action="../assets/php/form-to-feedback.php">
      <textarea name="message" id="message" placeholder="Message"></textarea>
      <br>
      <input type="submit" value="Send" class="special">
    </form>
  </section>
</template>