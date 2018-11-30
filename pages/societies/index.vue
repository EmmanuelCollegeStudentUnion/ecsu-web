<template>
  <section>
    <img src="/images/trainer_ico.png" align="right" id="imgborder1" width="200">
    <header>
      <h1>Emma Societies</h1>
      <p>A List of Societies Available in Emma</p>
    </header>
    <p>
      <i>
        To access Society Funding information, click
        <a href="society_funding.html">here</a>
      </i>
    </p>
    <p>A huge range of different sports clubs and societies exist at Emma - the list below is by no means exhaustive, although it contains most of the major sports clubs and societies in college:</p>
    <ul>
      <li v-for="society in societies" v-bind:key="society.name">
        <a v-bind:href="society.url" v-bind:title="society.title">{{society.title}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  layout: "default",
  asyncData: async ({ params }) => {
    let societiesContext = require.context("~/content/societies/");
    let societies = await Promise.all(
      societiesContext.keys().map(async x =>
        import(`~/content/societies/${x.slice(2)}`).then(({ title }) => ({
          title,
          url: "/societies" + x.split(".")[1]
        }))
      )
    );
    return { societies };
  }
};
</script>