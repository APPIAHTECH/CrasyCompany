<template>
  <div id="home">

    <!-- landing page section -->

    <div class="container" id="top-container">

      <!-- navigation -->
      <FrontNav/>

      <!-- intruduction meg -->
      <div class="container" id="introduction">
        <h1>Find your perfect job</h1>
        <p id="sub-description">Apply for the job of your dreams </p>
      </div>

      <!-- Search box -->
      <SearchBox/>

    </div>

    <!-- <div class="container-big"></div>

    <div class="container" id="bot-container">
      <!- 2 intruduction meg ->
      <div class="container" id="introduction">
        <h1>Ready to take the job ?</h1>
        <p id="sub-description"> Deep inside the market place </p>
        <button type="button" class="button"> <i class="fab fa-firstdraft"></i> Sign Up</button>
      </div>
    </div> -->

    <!-- footer -->
    <FrontFooter/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontNav from './../components/navigation/FrontNav.vue';
import FrontFooter from './../components/navigation/FrontFooter.vue';
import SearchBox from './../components/navigation/SearchBox.vue';

@Component({
  components: { FrontNav , FrontFooter , SearchBox },
})
export default class Home extends Vue {}
</script>
