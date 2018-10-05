<template>
  <div id="login">
    <!-- navigation -->
    <FrontNav/>

    <div class="container" id="bot-container">
      <!-- 2 intruduction meg -->
      <div class="container" id="introduction">
        <h1>Welcome Back</h1>
        <p id="sub-description"> More than  1000k jobs are waiting for you </p>
      </div>
    </div>

    <div class="container-big"></div>
    <!-- footer -->
    <FrontFooter/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontNav from './../components/navigation/FrontNav.vue';
import FrontFooter from './../components/navigation/FrontFooter.vue';

@Component({
  components: { FrontNav , FrontFooter },
})
export default class Login extends Vue {}
</script>
