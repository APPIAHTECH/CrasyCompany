<template>
  <div id="signup">
    <!-- navigation -->
    <FrontNav/>

    <div class="container" id="bot-container">
      <!-- 2 intruduction meg -->
      <div class="container" id="introduction">
        <h1>Ready to take the job ?</h1>
        <p id="sub-description"> Deep inside the job market place </p>
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
export default class Signup extends Vue {}
</script>
