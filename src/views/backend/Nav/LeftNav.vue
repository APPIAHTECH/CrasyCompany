<template>
  <div id="left-nav">

    <div class="container-small" id="top-left-smal-nav">
      <ul id="ul-logo">
        <li><a><i class="fab fa-firstdraft"></i></a></li>
        <a id="under"><p>CrasyCompany</p></a>
      </ul>
    </div>


    <div class="container-small" id="center-left-nav">

      <div class="sub-list">
        <div class="type-section">
          <p>Work Side</p>
          <i class="fas fa-plus-circle"></i>
        </div>
        <ul>
          <li><a href="#">Search Offers</a></li>
          <li><a href="#">My CV's</a></li>
          <li><a href="#">Who See Me </a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>

      <div class="sub-list">
        <div class="type-section">
          <p>Candidates</p>
          <i class="fas fa-user-md"></i>
        </div>
        <ul>
          <li><a href="#">Android Developer</a></li>
          <li><a href="#">Web Developer</a></li>
          <li><a href="#">Software engineer</a></li>
          <li><a href="#" class="more-under">+6 More </a></li>
        </ul>
      </div>

      <div class="sub-list">
        <div class="type-section">
          <p>Chat</p>
          <i class="fas fa-comment-alt"></i>
        </div>
        <ul>
          <div class="profile-circle-small">
            <li><a class="profile-text">Google</a></li>
            <div class="cirlce-active"></div>
          </div>

          <div class="profile-circle-small">
            <li><a class="profile-text">Amazon</a></li>
            <div class="cirlce-active off"></div>
          </div>

          <div class="profile-circle-small">
            <li><a class="profile-text">Microsoft</a></li>
            <div class="cirlce-active"></div>
          </div>

          <li><a href="#" class="more-under">+26 More </a></li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { }
})
export default class LeftNav extends Vue {}
</script>
