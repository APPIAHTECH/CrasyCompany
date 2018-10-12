<template>
  <div id="forgot-password">
    <!-- navigation -->
    <FrontNav/>

    <div class="container-big">
      <form class="container form">
        <h2> So you forgot your password ? :O </h2>
        <p>No worries :D . Enter your email address and we will send you are recover link for you to get a new password</p>
        <input type="email" id="user-name" name="user-name" placeholder=" email ..."autofocus>
        <button type="button" class="button" name="button">Recover</button>
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
  components: { FrontNav , FrontFooter }
})
export default class ForgotPassword extends Vue {}
</script>
