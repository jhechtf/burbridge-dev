<template>
  <div class="home">
    <Hero />
    <Projects :limit="5" />
    <Social />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Hero from '@components/Hero.vue';
import Projects from '@components/Projects.vue';
import Footer from '@components/Footer.vue';
const Social = (): Promise<typeof import('@components/Social.vue')> => import(/* webpackChunkName: "Social" */'@components/Social.vue')
export default Vue.extend({
  components: {
    Hero,
    Projects,
    Footer,
    Social,
  },
  name: 'home'
});
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all.sass";
@import "~bulma/sass/grid/_all.sass";
.has-background-black-bis {
  * {
    color: $white-ter !important;
  }
}
</style>
