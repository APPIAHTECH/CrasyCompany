<template>
  <div id="profile">

    <div class="container-big" id="dash">
      <!-- navigation -->
      <LeftNav/>

      <div class="container-big dash-section">
        <TopNav/>
        <div class="dash-section-content">

          <div class="container-small" id="profile-container">

            <p>Profile stuff here ...</p>

          </div>

        </div>

      </div>

    </div>
    <!-- footer -->
    <FrontFooter/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontFooter from './../../components/navigation/FrontFooter.vue';
import LeftNav from './Nav/LeftNav.vue';
import TopNav from './Nav/TopNav.vue';

@Component({
  components: { LeftNav , TopNav , FrontFooter },
})
export default class Profile extends Vue {}
</script>
