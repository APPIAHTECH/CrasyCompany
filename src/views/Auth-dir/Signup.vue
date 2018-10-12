<template>
  <div id="signup">
    <!-- navigation -->
    <FrontNav/>

    <div class="container-big">

      <div class="container-big">
        <form class="container form">
          <h4> Create new account </h4>

          <input type="text" id="user-name" name="user-name" placeholder=" Username ..."autofocus>
          <input type="email" id="user-email" name="user-email" placeholder=" Email ...">
          <input type="password" id="user-password" name="user-password" placeholder=" Password ...">

          <p id="terms"> By SignUp in CrasyCompany you agree with our <a href="/terms" id="aterms"> terms and conditions</a> </p>
          <button type="button" class="button" name="button"> Signup </button>
          <p>or sign in with</p>

          <div id="social-net">
            <button type="button" class="button social" id="go"> <i class="fab fa-google-plus-g"></i> </button>
            <button type="button" class="button social" id="fa"> <i class="fab fa-facebook-f"></i> </button>
            <button type="button" class="button social" id="ln"> <i class="fab fa-linkedin-in"></i> </button>
          </div>

        </form>

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
export default class Signup extends Vue {}
</script>
