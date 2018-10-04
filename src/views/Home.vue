<template>
  <div id="home">

    <!-- landing page section -->

    <div class="container" id="top-container">

      <!-- navigation -->
      <FrontNav/>

      <!-- intruduction meg -->
      <div class="container" id="introduction">
        <h1>Find your perfect job</h1>
        <p id="sub-description">One intro to one random person in your crasy group. Once a week </p>
      </div>

      <!-- Search box -->
      <SearchBox/>

    </div>

    <!-- <div class="container-big"></div> -->

    <!-- <div class="container" id="bot-container">
      <!- 2 intruduction meg ->
      <div class="container" id="introduction">
        <h1>Ready to take the job ?</h1>
        <p id="sub-description">Apply for the job of your dreams </p>
        <button type="button" class="button"> <i class="fab fa-firstdraft"></i> Sign Up</button>
      </div>
    </div> -->

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
import { Component, Vue } from 'vue-property-decorator';
import FrontNav from './../components/navigation/FrontNav.vue'
import SearchBox from './../components/navigation/SearchBox.vue'

@Component({
  components: { FrontNav , SearchBox },
})
export default class Home extends Vue {}
</script>
