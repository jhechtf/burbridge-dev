<script>
import Hero from '@/components/index/Hero.vue';
import Projects from '@/components/index/Projects.vue';
import Social from '@/components/index/Social.vue';
export default {
  layout: 'hero',
  components: {
    Hero,
    Projects,
    Social
  }
}
</script>

<style>
.hero-background {
  background-image: url("/milky-way-man.png");
  background-size: cover;
  background-position-x: center 0;
}
</style>

<template>
  <div>
    <Hero />
    <Projects />
    <Social />
  </div>
</template>
