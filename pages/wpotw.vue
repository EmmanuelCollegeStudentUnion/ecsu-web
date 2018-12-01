<template>
  <section>
    <header>
      <center>
        <h1>Wonderful Person of the Week</h1>
      </center>

      <br>
    </header>
    <img src="/images/trophy.gif" align="right" id="borderimg1" width="180">

    <p>
      <i>
        Has someone gone out of their way to make your day?
        Does someone consistently help others?
        Do you basically just like someone but can't be bothered to complement them yourself?
      </i>
      <br>
      <br>If you answered
      <b>'yes'</b> to any of the questions above, then the Wonderful Person of the Week tool is for you!
      (Though, if you're on this page, you probably know that already)
    </p>

    <font size="4">
      <p>
        Wonderful Person of the Week is an initiative to recognise good deeds in the Emma Community. Students are
        encouraged to write a small, anonymous note saying what someone else has done to make them smile during the week.
        The best nomination per week will be announced by the welfare team via Facebook, and the student in question will
        receive a goodie bag in their pidge!
      </p>

      <p>To send through your nomination, please use the form below:</p>
    </font>
    <form method="post" name="myemailform" action="../assets/php/wpotw.php">
      <input type="text" name="name" id="name" placeholder="Nominated Wonderful Person of the Week">
      <input type="email" name="email" id="email" placeholder="Your Email">
      <textarea name="message" id="message" placeholder="Enter your nomination here..."></textarea>
      <br>
      <input type="submit" value="Send" class="special">
    </form>

    <h2>Some Example Nominations...</h2>
    <i>
      <p>Hey! Can I please nominate X for wonderful person of the week? she was a total lifesaver and a general bae &lt;3</p>
      <p>
        I would like to nominate X for WPoTW really brightening up a very busy week with an unexpected
        toast-revolutionising present
      </p>
      <p>I would like to nominate X for WPoTW for running an amazing Shadowing Scheme and being a totally legend &lt;3</p>
      <p>
        I
        would like to nominate X for WPotW for being excellent, even in the face of gross misuse of her socks.
      </p>
    </i>
  </section>
</template>