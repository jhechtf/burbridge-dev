<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <section class="container">
      <div class="navbar-brand">
        <div class="navbar-item">
          <span class="is-hidden-desktop is-size-4">Jim Burbridge</span>
        </div>
        <a
          role="button"
          class="navbar-burger burger has-text-white"
          @click="toggleMenu"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{'is-active': isMenuVisible}">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item" exact>Home</router-link>
        </div>
      </div>
    </section>
  </nav>
</template>

<style lang="scss">
.navbar.is-fixed-top.is-primary {
  background-color: #00d1b2;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
</style>


<script lang="ts">
import Vue from 'vue';
// Import the Vue library

export default Vue.extend({
  methods: {
    onScroll(): void {
      this.$el.classList.toggle('is-fixed-top', window.scrollY > 50);
      this.$emit('navbar-scrolled', window.scrollY > 50, this.$el);
    },
    toggleMenu(): void {
      this.isMenuVisible = !this.isMenuVisible;
    }
  },
  data() {
    return {
      isMenuVisible: false
    };
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.onScroll);
  },
  created() {
    document.addEventListener('scroll', this.onScroll);
  }
});
</script>
