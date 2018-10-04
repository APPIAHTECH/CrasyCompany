<template>
  <div class="nav" id="frontNav">

    <ul id="ul-logo">
      <li><a href="/"><i class="fab fa-firstdraft"></i></a></li>
    </ul>

    <ul>
      <li><a href="/post-job" id="post-job">Post a Job</a></li>
      <li><a href="/singup">Sign Up</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/company-zone">Company Zone</a></li>
      <li><a href="/find-candidate">Find Candidates</a></li>
    </ul>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FrontNav extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
