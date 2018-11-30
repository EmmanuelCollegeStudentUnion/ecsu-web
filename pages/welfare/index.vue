<template>
  <section>
    <header>
      <h1>Welfare information</h1>
    </header>
    <p>The ECSU committee have information on a range of welfare topics:</p>
    <ul>
      <li v-for="post in welfare" v-bind:key="post.name">
        <a v-bind:href="post.url" v-bind:title="post.title">{{post.title}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  layout: "default",
  asyncData: async ({ params }) => {
    let welfareContext = require.context("~/content/welfare/");
    let welfare = await Promise.all(
      welfareContext.keys().map(async x =>
        import(`~/content/welfare/${x.slice(2)}`).then(({ title }) => ({
          title,
          url: "/welfare" + x.split(".")[1]
        }))
      )
    );
    return { welfare };
  }
};
</script>