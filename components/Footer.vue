<template>
  <footer>
    <div class="mdc-layout-grid footer-container" 
      >
      <span style="background:var(--mdc-theme-secondary); width: 100%;height: 5px;display: block;"></span>
      <div class="footer-background footer-grid-inner"
        :style="{
                backgroundImage: `url(${chapel})`            
          }">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            <div
              class="logo-image"
              :style="{
                backgroundImage: `url(${logo})`            
              }"
            ></div>
          </div>
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
            <span class="footer-heading">External links</span>
            <p>
              <a class="mdc-button primary-filled-button" target="_blank" href="https://www.emma.cam.ac.uk">
                <div class="mdc-button__ripple"></div>
                Emmanuel College
              </a> |
              <a class="mdc-button primary-filled-button" target="_blank" href="http://www.cusu.cam.ac.uk/">
                <div class="mdc-button__ripple"></div>
                CUSU
              </a> |
              <a class="mdc-button primary-filled-button" target="_blank" href="https://www.emmamcr.org.uk/">
                <div class="mdc-button__ripple"></div>
                MCR
              </a>
            </p>
          </div>
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
            <span class="footer-heading">Website</span>
            <p>
              <nuxt-link class="mdc-button primary-filled-button" to="/conditions">
                <div class="mdc-button__ripple"></div>
                Conditions
              </nuxt-link>|
              <nuxt-link class="mdc-button primary-filled-button" to="/cookies">
                <div class="mdc-button__ripple"></div>
                Cookies
              </nuxt-link>|
              <nuxt-link class="mdc-button primary-filled-button" to="/accessibility">
                <div class="mdc-button__ripple"></div>
                Accessibility
              </nuxt-link>
            </p>
          </div>
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
            <span class="footer-heading">Contact us</span>
            <p>
              <nuxt-link class="mdc-button primary-filled-button" to="/exec">
                <div class="mdc-button__ripple"></div>
                The committee
              </nuxt-link>|
              <nuxt-link class="mdc-button primary-filled-button" to="/feedback">
                <div class="mdc-button__ripple"></div>
                Feedback
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
const logo = require("@/assets/images/site/logo2_footer.png");
const chapel = require("@/assets/images/site/chapel_footer.png?sizes[]=500");
export default {
  data() {
    return { logo, chapel };
  }
};
</script>


<style lang="scss" scoped>



.footer-grid-inner {
  //margin: 32px;
  //margin-left: 288px;
  margin-left: 256px;
  @media screen and (max-width: 1279px) {
    margin: 0;
  }
}

.footer-container {
  padding: 0;
}

.footer-background {
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
  padding: 24px;
}

.logo-border {
  border-top: 2px solid #d926a5;
  border-bottom: 2px solid #d926a5;
  text-align: center;
  height: 25px;
  position: absolute;
  width: 100%;
  font-size: 20px;
  font-weight: 200;
  line-height: 1.25;
}
.outer-logo {
  padding: 37px 0;
  color: white;
}

.logo-image {
  height: 100px;
  width: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  margin: auto;
}

.logo {
  position: relative;
}
.footer-heading {
  font-size: 0.85em;
  font-weight: bold;
}
</style>
