<template>
  <footer>
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner footer-grid-inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 logo">
          <div
            class="logo-image"
            :style="{
              backgroundImage: `url(${logo})`            
            }"
          ></div>
          <div class="outer-logo">
            <div class="logo-border">ECSU</div>
          </div>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <h5>External links</h5>
          <a class="mdc-button" target="_blank" href="https://www.emma.cam.ac.uk">Emmanuel College</a> |
          <a class="mdc-button" target="_blank" href="http://www.cusu.cam.ac.uk/">CUSU</a> |
          <a class="mdc-button" target="_blank" href="https://www.emmamcr.org.uk/">MCR</a>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <h5>Website</h5>
          <nuxt-link class="mdc-button" to="/conditions">Conditions</nuxt-link>|
          <nuxt-link class="mdc-button" to="/cookies">Cookies</nuxt-link>|
          <nuxt-link class="mdc-button" to="/accessibility">Accessibility</nuxt-link>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
          <h5>Contact us</h5>
          <nuxt-link class="mdc-button" to="/exec">The committee</nuxt-link>|
          <nuxt-link class="mdc-button" to="/feedback">Feedback</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
const logo = require("@/assets/images/site/footer.png");
export default {
  data() {
    return { logo };
  }
};
</script>


<style lang="scss" scoped>
.footer-grid-inner {
  margin: 32px;
  margin-left: 288px;
  @media screen and (max-width: 1279px) {
    margin: 32px 0;
  }
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
  position: absolute;
  height: 100px;
  width: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  left: 50%;
  margin-left: -50px;
  border-radius: 50%;
}
.logo {
  position: relative;
}
</style>
