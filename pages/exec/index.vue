<template>
  <section>
    <header>
      <h1>Exec</h1>
    </header>

    <p>
      The Exec is responsible for making decisions about the daily business of ECSU. Each of the Exec members have specific responsibilities, which are outlined in the
      <a
        href="/about/official_documents"
      >Constitution</a>. The Exec meets weekly to discuss issues relating to students in Emma.
    </p>

    <h2>Meet this year's Exec</h2>

    <img
      id="borderimg1"
      src="/images/exec17.jpg"
      alt="ECSU Exec 2017"
      class="shadow"
      width="220"
      title="ECSU Exec 2017"
      align="right"
    >

    <li v-for="exec in execs" v-bind:key="exec.name">
      <a v-bind:href="exec.url" :title="exec.title" v-text="exec.title"></a>
      - {{exec.name}}
    </li>

    <h2>Open Meetings</h2>
    <p>
      The Exec members will be present at
      <a href="open_meetings.html">Open Meetings</a>, where they will formally answer any questions you might have. However, if you've got a more informal or urgent question, don't hesitate to get in touch! You can find all the email addresses of each Exec member on their page, just use the menu at the top to find the member you need.
    </p>

    <h2>How is the Exec formed?</h2>
    <p>The Exec is elected on a yearly basis, at the end of Michaelmas Term. The electoral procedure is described in the
      <nuxt-link to="/protected/official_documents">Constitution</nuxt-link>. Elections will be publicised well in advance. Any student at Emmanuel can stand for election including Freshers.
    </p>
  </section>
</template>

<script>
export default {
  layout: "default",
  asyncData: async ({ params }) => {
    let execContext = require.context("~/content/exec/");
    let execs = await Promise.all(
      execContext.keys().map(async x =>
        import(`~/content/exec/${x.slice(2)}`).then(({ name, title }) => ({
          name,
          title,
          url: "/exec" + x.split(".")[1]
        }))
      )
    );
    return { execs };
  }
};
</script>

<style>
</style>
