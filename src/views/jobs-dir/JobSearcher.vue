<template>
  <div id="job-searcher" class="flex">

    <div class="container-normal" id="filter-container">

      <div class="job-left-section">
        <p>Sort offers by</p>
        <div class="flex">
          <input type="checkbox" id="dateinput">
          <p>Publication date</p>
        </div>
      </div>


      <div class="job-left-section">
        <p>Keyword</p>
        <div class="flex">
          <input type="search" placeholder="software engineer">
          <button type="button" class="btn ok" id="okbnt">OK</button>
        </div>
      </div>


      <div class="job-left-section">
        <p>Date</p>
        <input type="radio" value="anydate"><span>Any date</span> <br>
        <input type="radio" value="last24h"><span>Last 24 hours</span> <br>
        <input type="radio" value="last7day"><span>Last 7 days</span> <br>
        <input type="radio" value="last15day"><span>Last 15 days</span> <br>
      </div>

      <div class="job-left-section">
        <p>Province</p>
        <input type="radio" name="Accra" value="Accra"><span>Accra</span> <br>
        <input type="radio" name="Kumassi" value="Kumassi"><span>Kumassi</span> <br>
      </div>


      <div class="job-left-section">
        <p>Minimum studies</p>
        <input type="checkbox" name="Engineer" value="Engineer"><span>Engineer</span> <br>
        <input type="checkbox" name="Bachelor's" value="Bachelor's"><span>Bachelor's</span> <br>
      </div>


      <div class="job-left-section">
        <p>Experience (years)</p>
        <p id="experience-value">2</p>
        <input type="range" min="0" max="10" value="4" class="slider" id="myRange">
      </div>

      <div class="job-left-section">
        <p>Minimum salary</p>
        <p id="range-value">60000</p>
        <input type="range" min="6000" max="90000" value="25000" class="slider" id="myRangeExpe">
        <div class="flex">
          <button type="button" class="btn salary">Year</button>
          <button type="button" class="btn salary">Month</button>
          <button type="button" class="btn salary">Hours</button>
        </div>
      </div>

      <div class="job-left-section">
        <p>Type of contract</p>
        <input type="checkbox" value="Indefinite"><span>Indefinite</span> <br>
        <input type="checkbox" value="Autonomous"> <span>Autonomous</span> <br>
        <input type="checkbox" value="Formative"><span>Formative</span> <br>
        <input type="checkbox" value="Other contracts"><span>Other contracts</span> <br>
      </div>


    </div>

    <div class="container-normal" id="list-jobs-container">
      <div id="card-list">

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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class JobSearcher extends Vue { }
</script>
