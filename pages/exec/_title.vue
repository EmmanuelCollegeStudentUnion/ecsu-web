<template>
  <PostPage>
    <template slot="title">{{name}}</template>
    <template slot="subtitle">{{title}}</template>
    <template slot="media">
      <ImageCard :image="image"/>
    </template>
    <Markdown :html="body"/>
    <span>
      Email me at:
      <a :href="mailto">{{email}}</a>
    </span>
  </PostPage>
</template>

<script>
import content from "@/content";
import PostPage from "@/components/PostPage";
import Markdown from "@/components/Markdown";
import ImageCard from "@/components/ImageCard";
export default {
  layout: "default",
  components: { Markdown, PostPage, ImageCard },
  asyncData: async ({ params }) => {
    const post = content("exec", params.title).then(
      ({ name, title, image, __content, email }) => ({
        name,
        title,
        image,
        body: __content,
        email,
        mailto: "mailto:" + email
      })
    );
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
