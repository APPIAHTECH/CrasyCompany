<template>
  <div class="container" id="searchbox">

    <div class="input-container">
      <input type="search" id="search" placeholder="eg. Software engineer" autofocus/>
      <button class="icon"><i class="fa fa-search"></i></button>
    </div>


    <div class="input-container">
      <input type="search" id="search" placeholder="eg. Barcelona "/>
      <button class="icon"><i class="fas fa-map-marker-alt"></i></button>
    </div>

    <button type="button" name="findJob" class="button"> Find jobs </button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SearchBox extends Vue {


  public data(){
    return { }
  }

  public created() { }

  public mounted() { }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
