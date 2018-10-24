<template>
  <div id="company-zone">

    <!-- landing page for companies -->

    <div class="container" id="top-container">

      <!-- navigation -->
      <FrontNav/>

      <!-- intruduction meg -->
      <div class="container" id="introduction">
        <h1>Find the perfect canditate</h1>
        <p id="sub-description">Find or post the most killer job offer of the time :D </p>
        <div class="flex center">
          <button type="button" class="button"> <i class="fab fa-firstdraft"></i> Find Candidates</button>
          <button type="button" class="button" id="post-job"> <i class="fab fa-firstdraft"></i> Post a job offer </button>
        </div>
      </div>

    </div>

    <div class="container-big" id="about-paraf">

      <div class="container-small paragraf pa-small">
        <h1>Find Candidates</h1>
        <p class="paragraf">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation
          ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
          Duis aute irure dolor in
          reprehenderit in voluptate
          velit esse cillum dolore eu
          fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div>

      <div class="container-small paragraf pa-small">
        <h1>Jobs</h1>
        <p class="paragraf">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation
          ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
          Duis aute irure dolor in
          reprehenderit in voluptate
          velit esse cillum dolore eu
          fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div>

      <div class="container-small paragraf pa-small">
        <h1>More stuff xD ...</h1>
        <p class="paragraf">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation
          ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
          Duis aute irure dolor in
          reprehenderit in voluptate
          velit esse cillum dolore eu
          fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div>


    </div>

    <!-- footer -->
    <FrontFooter/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontNav from './../../components/navigation/FrontNav.vue';
import FrontFooter from './../../components/navigation/FrontFooter.vue';
import SearchBox from './../../components/navigation/SearchBox.vue';

@Component({
  components: { FrontNav , FrontFooter , SearchBox },
})
export default class CompanyZone extends Vue {}
</script>
