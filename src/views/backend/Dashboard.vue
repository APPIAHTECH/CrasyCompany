<template>
  <div id="dashboard">

    <div class="container-big" id="dash">
      <!-- navigation -->
      <LeftNav/>
      <TopNav/>

      <div class="container-big dash-section">

        <div class="dash-section-content">
          <h1>Hey im a dashboard</h1>
          <h2>put some stuff ! :D</h2>
        </div>

      </div>

    </div>
    <!-- footer -->
    <FrontFooter/>

  </div>
</template>

<style scoped lang="sass">
  #frontfooter
    display: none

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontFooter from './../../components/navigation/FrontFooter.vue';
import LeftNav from './Nav/LeftNav.vue';
import TopNav from './Nav/TopNav.vue';

@Component({
  components: { LeftNav , TopNav , FrontFooter }
})
export default class Dashboard extends Vue {}
</script>
