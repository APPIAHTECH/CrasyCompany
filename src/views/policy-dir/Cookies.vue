<template>
  <div id="cookies">
    <!-- navigation -->
    <FrontNav/>

    <div class="container-small" id="vision">
      <h1> Cookies Policy </h1>
    </div>

    <div class="container-big" id="about-paraf">
      <p id="p-update">Last update: August 20, 2018</p>
      <div class="container-small paragraf pa-small">

        <h3>What are cookies ?</h3>

        <p class="paragraf">

        This Cookie policy helps to explain the occasions when and why cookies may be sent to visitors to the Site (referred to in this policy as “we”, “us” or “our”).
        “Cookies” are text-only pieces of information that a website transfers to an individual’s hard drive or other website-browsing equipment for record-keeping purposes.
        Cookies allow the Site to remember important information that will make your use of the site more convenient.
        A cookie will typically contain the name of the domain from which the cookie has come, the “lifetime” of the cookie,
        and a randomly generated unique number or other value.
        Certain cookies will be used on the Site regardless of whether you are logged in to your account or not.
        Session Cookies are temporary cookies that remain in the cookie file of your browser until you leave the Site.

        Persistent Cookies remain in the cookie file of your browser for much longer
        (though how long will depend on the lifetime of the specific cookie).
        When we use session cookies to track the total number of visitors to our Site,
        this is done on an anonymous aggregate basis (as cookies do not in themselves
        carry any personal data). We may also employ cookies so that we remember
        your computer when it is used to return to the Site to help customize your CrasyCompany web experience.
        We may associate personal information with a cookie file in those instances.

        </p>

      </div>


      <div class="container-small paragraf pa-small">

        <h3>How CrasyCompany uses cookies</h3>

        <p class="paragraf">

          Like most websites, we use cookies for a variety of purposes in order to improve your online experience,
          for analytics and for marketing, but specifically we use Cookies on the Site for the following purposes:
          <!-- table here -->
        </p>

      </div>


      <div class="container-small paragraf pa-small">

        <h3>Managing cookies in your browser</h3>

        <p class="paragraf">

          Use the options in your web browser if you do not wish to receive a cookie or
          if you wish to set your browser to notify you when you receive a cookie.
          You can easily delete and manage any cookies that have been installed in the cookie folder
          of your browser by following the instructions provided by your particular browser manufacturer.

          <ul id="default-ul">
            <li><a href="https://support.google.com/chrome/answer/95647?hl=en-GB">Google Chrome</a></li>
            <li><a href="https://support.microsoft.com/en-us/help/260971/description-of-cookies">Internet Explorer</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/kb/ph21411?locale=en_US">Safari (Desktop)</a></li>
            <li><a href="https://support.apple.com/en-us/HT201265">Safari (Mobile)</a></li>

            <li><a href="http://support.google.com/ics/nexus/bin/answer.py?hl=en&answer=2425067">Android Browser</a></li>
            <li><a href="https://www.opera.com/es/help">Opera</a></li>
            <li><a href="https://www.opera.com/help/tutorials/security/privacy/">Opera Mobile</a></li>
          </ul>

          If your browser is not listed here, consult the documentation that your particular browser manufacturer provides.
          You may also consult your mobile device documentation for information on how to disable cookies on your mobile device.
          If you disable all cookies, you may not be able to take advantage of all the features of this Site.
          Please note that if you have not cleared your cookies or cache,
          the contents of which may affect autofill functions on the CrasyCompany site and you are responsible for any such actions.
        </p>

      </div>

      <div class="container-small paragraf pa-small">

        <h3>Third-Party Cookies</h3>

        <p class="paragraf">
          The following cookie table lists a selection of the third party cookies used on CrasyCompany.
          Although we may update this list periodically,
          please be advised that the names of cookies,
          pixels and other technologies are subject to change.

          <!-- table here -->
        </p>

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
export default class Cookies extends Vue {}
</script>
