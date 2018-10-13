<template>
  <div id="dashboard">

    <div class="container-big" id="dash">
      <!-- navigation -->
      <LeftNav/>

      <div class="container-big dash-section">
        <TopNav/>
        <div class="dash-section-content">

          <div class="container-small" id="card-container">

            <div class="card">
              <h3>4 Job offers</h3>
              <ul>
                <li><a href=""> 2 de java in Barcelona </a> </li>
                <li><a href=""> 1 de javascript in Barcelona </a> </li>
                <li><a href=""> 1 de web in Barcelona </a> </li>
              </ul>
            </div>

            <div class="card">
              <h3>Who find out your CV's</h3>
              <p>
                Here you will see the number of companies that find
                your CV in CrasyCompany. Remember to keep it updated.
              </p>
              <ul>
                <li><a href=""> Go to My CVs </a> </li>
              </ul>
            </div>

            <div class="card">
              <h3>0 Candidaturas activas</h3>
              <p>
                You have not registered for any offers recently
              </p>
              <ul>
                <li><a href=""> Search job offers </a> </li>
              </ul>
            </div>

          </div>

          <div class="container-small" id="offer-list">

            <h3>Jobs of your intrest</h3>
            <p>Based on your last job</p>

            <div class="card offer">

              <a href="#"><h4>Web developer</h4></a>
              <p id="company">Google</p>
              <hr/>
              <p>
                Full Stack developer is responsible
                for front and back-end web development.
                We are seeking a Full Stack Developers in Reston,
                VA – Must be local or willing to...
              </p>

              <div class="flex">
                <p><i class="fas fa-map-marker-alt"></i> Barcelona</p>
                <p class="right-side"><i class="fas fa-hourglass-half"></i>3D Ago</p>
              </div>

              <div class="flex">
                <p><i class="fas fa-people-carry"></i> Full time</p>
                <p class="right-side"><i class="fas fa-money-bill"></i> 50000 - 70000 yr</p>
                <a href="#" class="right-side"><p><i class="fas fa-grin-hearts"></i> Save offer </p></a>
              </div>

            </div>


            <div class="card offer">

              <a href="#"><h4>Android developer</h4></a>
              <p id="company">Microsoft</p>
              <hr/>
              <p>
                We are looking for experienced mobile developers
                with an agile development mindset. In this role,
                you will work on the Volvo Cars mobile apps for iOS and.
              </p>

              <div class="flex">
                <p><i class="fas fa-map-marker-alt"></i> Barcelona</p>
                <p class="right-side"><i class="fas fa-hourglass-half"></i>1M Ago</p>
              </div>

              <div class="flex">
                <p><i class="fas fa-people-carry"></i> Full time</p>
                <p class="right-side"><i class="fas fa-money-bill"></i> 90000 - 100000 yr</p>
                <a href="#" class="right-side"><p><i class="fas fa-grin-hearts"></i> Save offer </p></a>
              </div>

            </div>

          </div>

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
