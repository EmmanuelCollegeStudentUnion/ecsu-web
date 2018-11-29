<template>
  <section>
    <header>
      <h1>{{name}}</h1>
      <p>{{title}}</p>
    </header>

    <div class="officer-page-main-content-div">
      <div class="officer-page-text-content-div" v-html="body"></div>
      <img v-if="image" :src="image" alt class="officer-page-image">
    </div>
    <p>Email me at:
      <a :href="mailto">{{email}}</a>
    </p>
  </section>
</template>

<script>
export default {
  layout: "default",
  asyncData: async ({ params }) => {
    let post = await import("~/content/exec/" + params.title + ".md");
    post.body = post["__content"];
    post.mailto = "mailto:" + post.email;
    return post;
  }
};
</script>

<style>
.officer-page-main-content-div {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 50px;
}

.officer-page-text-content-div {
  margin-right: 30px;
}

.officer-page-image {
  -webkit-filter: drop-shadow(1px 1px 5px grey);
  filter: drop-shadow(1px 1px 5px grey);

  width: 400px;
}
</style>
