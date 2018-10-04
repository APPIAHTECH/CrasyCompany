<template>
  <div id="frontfooter">

    <!--  Footer seccion  -->
    <footer>

      <div id="footer-nav">
        <ul>
          <h3>About us</h3>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/help">Help</a></li>
          <li><a href="/security">Security</a></li>
          <li><a href="/cookies-policy">Cookies policy</a></li>
          <li><a href="/service">Use of the service</a></li>
        </ul>

        <ul>
          <h3>About CrasyCompany</h3>
          <li><a href="/crasycompany">CrasyCompany today</a></li>
          <li><a href="/work">Work with us</a></li>
          <li><a href="/jobs">Job vacancies</a></li>
        </ul>

        <ul>
          <h3>Follow Us</h3>
          <ul class="widget-follow">
            <li><a href="https://www.facebook.com/eunisaesea"><i class="fab fa-facebook"></i></a></li>
            <li><a href="/"><i class="fab fa-twitter-square"></i></a></li>
            <li><a href="https://plus.google.com/u/0/?tab=wX"><i class="fab fa-google-plus-square"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UC_iy_bG7yO2yX6S30sog-4w"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </ul>

      </div>

    </footer>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FrontFooter extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
