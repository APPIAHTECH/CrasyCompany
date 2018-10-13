<template>
  <div id="top-nav">

    <div id="top-menu-options">
      <li><a href=""><i class="fas fa-cloud-upload-alt"></i></a></li>
      <li><a href=""><i class="fas fa-cog"></i></a></li>
      <li><a href=""><i class="fas fa-ellipsis-v"></i></a></li>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { }
})
export default class TopNav extends Vue {}
</script>
