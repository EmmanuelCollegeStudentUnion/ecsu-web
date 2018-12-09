<template>
  <StandardPage>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <div class="page-content">
        <h1
          class="mdc-typography--headline1 mdc-theme--text-secondary-on-light heading-smaller-margin"
        >
          Welcome to
          <span class="mdc-theme--text-primary-on-light">ECSU</span>
        </h1>
        <img src="/images/Sketch.png" width="100%">
        <div class="mdc-typography--body1">
          <p>
            ECSU is the Emmanuel College Students' Union, which is the representative body for students of Emmanuel
            College, Cambridge. The daily business of ECSU is managed by the Executive, or 'Exec', members of which have
            specific responsibilities. The Committee is elected on a yearly basis at the end of Michaelmas Term.
          </p>
        </div>
      </div>
    </div>

    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
      <ImageCaptionCard
        title="Emma Careers"
        image="/images/careers.jpeg"
        url="/info/careers"
      >Whether you're a grad looking for a job or a first year wanting to hear more about LinkedIn, this is the workshop for you.</ImageCaptionCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
      <ImageCaptionCard
        title="ECSU Room Database"
        image="/images/slide02.jpg"
        url="/room_locations"
      >Access the Emmanuel Room Database, to help inform your decision when balloting.</ImageCaptionCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
      <ImageCaptionCard
        title="Emmanuel Hall Menu"
        image="/images/hall.jpg"
        url="https://www.emma.cam.ac.uk/contact/students/catering/menus/"
      >Find out what's on the menu for lunchtime and dinner today in Emmanuel, including information about food allergens and vegetarian options.</ImageCaptionCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
      <ImageCaptionCard
        title="Meet the 2017-18 ECSU Exec"
        image="/images/slide01.jpg"
        url="/exec"
      >Find out about ECSU's newest Executive Committee for 2018 - who they are, what they do and how to get in touch.</ImageCaptionCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
      <ImageCaptionCard
        title="Emma Societies"
        image="/images/slide03.jpg"
        url="/societies/"
      >Find out more about the societies on offer within the college, ranging from sports through to quizzing.</ImageCaptionCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
      <ImageCaptionCard
        title="Prospective students"
        image="/images/slide04.jpg"
        url="/posts/prospective"
      >Explore what Emmanuel College and Cambridge have to offer! Click on the button below to access our prospective page, as well as links to the Alternative Prospectus.</ImageCaptionCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-heading">
      <h2 class="mdc-typography--headline2 layout-center">What Does ECSU Do?</h2>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
      <TextCard title="Liaises on Your Behalf" icon="account_balance">
        <p>
          ECSU is the primary medium through which the student can interact with the college at Emmanuel; be that for
          building requests or suggestions for improvement.
        </p>
      </TextCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
      <TextCard title="Answers Your Questions" icon="question_answer">
        <p>
          ECSU is here to make sure you feel supported across your academic, extra-curricular and personal life, through
          a dedicated team specialising in specific issues.
        </p>
      </TextCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
      <TextCard title="Keeps You Informed" icon="notifications">
        <p>
          Via Facebook, Twitter or ECSU Online, we are here to provide you with the latest information about events,
          term dates and pretty much anything else run by the college.
        </p>
        <p>
          ECSU maintains two facebook groups -
          <a
            href="https://www.facebook.com/groups/736334659718498/"
          >
            ECSU Committee
            Posts
          </a>, for official posts from the Exec, and the general
          <a
            href="https://www.facebook.com/groups/ECSU2011/"
          >ECSU</a>
          group for anyone to post in.
        </p>
      </TextCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
      <TextCard title="Keeps You Smiling" action="View Societies" icon="sentiment_very_satisfied">
        <p>
          Through Ents, Societies, Sports, the JCR and surprises throughout the term, ECSU promotes a fun and friendly
          atmosphere.
        </p>
      </TextCard>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 center-button">
      <div class="button-padding">
        <nuxt-link to="/exec" class="mdc-fab mdc-fab--extended">
          <span class="mdc-fab__label">Meet the 2017-18 ECSU committee</span>
        </nuxt-link>
      </div>
    </div>
  </StandardPage>
</template>
<script>
import TextCard from "@/components/TextCard";
import ImageCaptionCard from "@/components/ImageCaptionCard";
import StandardPage from "@/components/StandardPage";
export default {
  components: {
    TextCard,
    ImageCaptionCard,
    StandardPage
  },
  head: {
    title: "ECSU | Emmanuel College Students' Union"
  }
};
</script>

<style lang="scss">
.card-image-content {
  background-size: cover;
  background-position: center;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}
article.card-image {
  border-radius: 24px;
}
.center-button {
  margin: auto;
}
.button-padding {
  padding: 16px;
}
.heading-smaller-margin {
  margin: 32px;
}
.center-heading {
  margin: 16px auto;
}
</style>
