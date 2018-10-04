<template>
  <div class="nav" id="frontNav">

    <ul id="ul-logo">
      <li><a href="/"><i class="fab fa-firstdraft"></i></a></li>
    </ul>

    <i class="fas fa-bars" id="bar-menu"></i>
    <ul id="menu">
      <li><a><i class="far fa-times-circle" id="close-bar"></i></a></li>
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

  public mounted(){

    const opeNavBar : any = document.getElementById('bar-menu');
    const closeNavBar : any = document.getElementById('close-bar');
    const menuBar : any = document.getElementById('menu');

    let open = false;

    opeNavBar.addEventListener('click' , (e) => {

      if(!open){
        open = true
        menuBar.style.display = "block"
        closeNavBar.style.display = "block"
      }

    });

    closeNavBar.addEventListener('click' , (e) => {

      if(open){
        open = false
        menuBar.style.display = "none"

      }

    });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
