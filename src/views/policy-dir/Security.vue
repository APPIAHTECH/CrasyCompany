<template>
  <div id="security">
    <!-- navigation -->
    <FrontNav/>

    <div class="container-small" id="vision">
      <h1> Seguridad </h1>
    </div>

    <div class="container-big" id="about-paraf">

      <div class="container-small paragraf pa-small">
        <h3>WEB</h3>
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

@Component({
  components: { FrontNav , FrontFooter },
})
export default class Security extends Vue {}
</script>
