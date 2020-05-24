<style>
html {
  scroll-behavior: smooth;
}
</style>
<script>
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Footer
  }
}
</script>

<template>
  <section id="default-page">
    <nuxt />
    <Footer />
  </section>
</template>