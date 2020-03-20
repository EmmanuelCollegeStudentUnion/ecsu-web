<template>
  <PostPage v-if="user&&user.crsid">
    <template slot="title">Coronavirus (COVID-19)</template>
    <p>This hub will be updated regularly with advice, information, links, and resources for Emma students through these difficult times.</p>
    <br>
    <p>ECSU will continue to be here for you as your Students’ Union 
        no matter the circumstances. Harriet and Jerry (ECSU President and Vice President) are 
        communicating regularly with the Acting Senior Tutor and Bursar – and our officers will be 
        continuing to carry out their elected roles as much as possible.</p>
    <br>
    <h3 class="mdc-typography--headline4">Initial points of contact</h3>
    <ul class="mdc-list">
        <li class=""><span>• Please contact your Tutor (or any Tutor) as a priority if you have any concerns; they are best placed to deal with things on a case-by-case basis.</span></li>
        <li class=""><span>• <span>Feel free to email Harriet and Jerry at <a style="display:inline-block" href=mailto:coronavirus@ecsu.org.uk>coronavirus@ecsu.org.uk</a>, or the Welfare Officers. All emails are treated with confidence.</span></span></li>
        <li class=""><span>• The ECSU anonymous feedback form is available at<nuxt-link style="margin-left:5px" to="/feedback"> https://ecsu.org.uk/feedback</nuxt-link></span></li>
    </ul>
    <br>
    <h3 class="mdc-typography--headline4">Official guidance links:</h3>
    <ul class="mdc-list">
        <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/"><li class="mdc-list-item mdc-list-item__text">NHS</li></a>
        <a href="https://www.gov.uk/government/topical-events/coronavirus-covid-19-uk-government-response"><li class="mdc-list-item mdc-list-item__text">UK Government</li></a>
        <a href="https://www.cam.ac.uk/coronavirus"><li class="mdc-list-item mdc-list-item__text">University of Cambridge</li></a>
        <a href="https://www.cusu.co.uk/coronavirus"><li class="mdc-list-item mdc-list-item__text">CUSU</li></a>
    </ul>
    <div>
      <ExpandCard
        v-for="item in covid"
        :key="item.title"
        class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"
        :title="item.title"
      >
        <Markdown :markdown="item.body"/>
      </ExpandCard>
    </div>
    <br>
    <span>Credits:</span>
    <ul class="mdc-list">
        <li>• Jerry (Vice President)</li>
        <li>• Leoni and Damola (Welfare Officers)</li>
        <li>• Olivia (International Officer)</li>
        <li>• Anya (Disabilities and Mental Health Officer)</li>
        <li>• Lucien (Education and Careers Officer)</li>
    </ul>
  </PostPage>
  <div v-else-if="authUrl">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <a class="mdc-button mdc-button--outlined" :href="authUrl">Sign in</a>
    </div>
  </div>
</template>


<script>
import gql from "graphql-tag";
import Cookies from "js-cookie";
import PostPage from "@/components/PostPage";
import ExpandCard from "@/components/ExpandCard";
import Markdown from "@/components/Markdown";

export default {
  components: { PostPage, ExpandCard, Markdown },
  mounted() {
    if (this.$route.query["WLS-Response"]) {
      this.$router.replace({ query: { "WLS-Response": undefined } });
    }
    this.$nextTick(() => {
      this.authUrl = String(
        `https://raven.cam.ac.uk/auth/authenticate.html?ver=3&url=${window.location.href}&desc=ECSU&msg=&iact=`
      );
    });
  },
  apollo: {
    user: {
      query: gql`
        {
          user {
            crsid
          }
        }
      `,
      fetchPolicy: "cache-and-network"
    },
    covid: {
      query: gql`
        {
          covid {
            title
            body
          }
        }
      `
    }
  }
};
</script>