<template functional>
  <div class="carousel-slide">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  inheritAttrs: true
});
</script>
