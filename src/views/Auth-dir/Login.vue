<template>
  <div id="login">
    <!-- navigation -->
    <FrontNav/>

    <div class="container-big">
      <form class="container form">
        <h4>Sign in</h4>
        <input type="email" id="user-name" name="user-name" placeholder=" Username ..."autofocus>
        <input type="password" id="user-password" name="user-password" placeholder=" Password ...">
        <a href="/forgot-password">Forgot Password ? </a>

        <button type="button" class="button" name="button"> Login </button>
        <p>or sign in with</p>

        <div id="social-net">
          <button type="button" class="button social" id="go"> <i class="fab fa-google-plus-g"></i> </button>
          <button type="button" class="button social" id="fa"> <i class="fab fa-facebook-f"></i> </button>
          <button type="button" class="button social" id="ln"> <i class="fab fa-linkedin-in"></i> </button>
        </div>

      </form>

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
export default class Login extends Vue {}
</script>
