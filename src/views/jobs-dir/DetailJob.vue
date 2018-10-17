<template>
  <div id="detail-job">

    <div class="container-big">

      <div id="info" class="container-small">

        <div class="sub-info">
          <h2>Full Stack Developer</h2>
        </div>

        <div class="sub-info" id="inf">
          <ul class="list">
            <li>TopView Sightseeing</li>
            <li>Madrid, Madrid (España)</li>
            <li>Posted 5 hours ago</li>
          </ul>

          <ul class="list">
            <li>Salary: € 27,000 - € 36,000 Gross/year</li>
            <li>Minimum experience: at least 3 years</li>
            <li>Type of offer: full-time</li>
          </ul>

        </div>
      </div>

      <div class="container-small paragraf pa-small" id="details-offer">

        <h3>Requirements</h3>

        <h4>Minimum studies</h4>
        <p>Other titles, certifications and cards</p>

        <h4>Minimum experience</h4>
        <p>At least 3 years</p>

        <h4>Qualifications</h4>

        <h3>Minimum requirements</h3>
        <p>
          Minimum experience 3 years of experience in PHP programming<br/>
          Essential knowledge of HTML and DOM (xpath, xhtml, xml).<br/>
          Experience in agile methodologies: Scrum, Git, CleanCode, TDD, integration of external APIs, concurrency.<br/>
          Proven experience in Webservices (RESTful, SOAP)<br/>
          Experience with Repositories (GIT)<br/>
          Experience with regular expressions.<br/>
          Experience with CURL, Openssl and digital certificates, Guzzle.<br/>
          Experience with JavaScript and jQuery / AJAX<br/>
          Experience with Linux and scripts.<br/>
          Development of a script to automate processes<br/>
          Development of API's<br/>
        </p>

        <h3>Job Description</h3>
        <p class="paragraf">
          TopView Sightseeing is a New York-based double decker
          bus company offering a variety of sightseeing tours by bus, bike, and boat.
           Our growing team of native local experts serve over 1500 customers daily,
           and visitors to the Big Apple can experience New York City with unforgettable
           views. As we are building our new brand,
           we are growing tremendously and launching new websites
           to enhance the customer experience across our network of brands
           including Bike Rental Central Park and Water Tours New York.
           <br/><br/>
           The Marketing team, the heart of TopView’s Ecommerce & digital
           marketing strategy, is a significant driver of new customers and revenue
           and is looking for an experienced and strategic developer to focus on
           improving functionality for our digital properties and deepening customer
           experience and engagement by enhancing our technologies.
           This position is for a full-time, on-site Full Stack Developer with 3+
           years of experience. Infrastructure experience is a big plus.
        </p>

        <h3>Number of vacancies</h3>
        <p>5</p>

        <h3>Salary</h3>
        <p>27000 - 36000 Yr </p>

        <h4>2 registered to this offer</h4>
        <p>Our advice: register if you have the profile, it may fit more than the other registered</p>
        <button type="button" class="btn apply">Apply</button>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DetailJob extends Vue { }
</script>
