<template>
  <div id="frontfooter">

    <!--  Footer seccion  -->
    <footer>

      <div id="footer-nav">

        <ul>
          <h3>Company</h3>
          <li><a href="/about">About us</a></li>
        </ul>

        <ul>
          <h3>Resources</h3>
          <li><a href="/work">Work with us</a></li>
          <li><a href="/find-jobs">Job vacancies</a></li>
          <li><a href="/csuport">Customer Support</a></li>
        </ul>


        <ul>
          <h3>Policy</h3>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/security">Security</a></li>
          <li><a href="/cookies">Cookies policy</a></li>
          <li><a href="/service">Use of the service</a></li>
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
