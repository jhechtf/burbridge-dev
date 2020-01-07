<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>


<style lang="scss">
// I like this font.
@import url("https://fonts.googleapis.com/css?family=Nunito:400,700");
// Need this, otherwise the next line won't work
$mdi-font-path: "~@mdi/font/fonts";
// Importing the icons to be used later on.
@import "~@mdi/font/scss/materialdesignicons.scss";
@import "bulma/bulma.sass";
@import "buefy/src/scss/buefy.scss";
body,
html,
#app {
  scroll-behavior: smooth;
  height: 100%;
}
</style>
