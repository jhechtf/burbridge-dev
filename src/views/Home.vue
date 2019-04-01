<template>
  <div class="home">
    <Hero/>
    <section class="section has-background-black">
      <div class="container">
        <h1 class="title has-text-centered is-1 mt-1">Other info</h1>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Hero from '@components/Hero.vue';
export default Vue.extend({
  components: {
    Hero
  },
  name: 'home'
});
</script>
