<template>
  <section class="hero is-fullheight is-main-hero">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <Navbar
        :class="{'is-transparent': overlapping, 'is-primary': !overlapping}"
        @navbar-scrolled="scrollFn"
      />
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-hidden-touch is-1">{{name}}</h1>
        <h2 class="subtitle is-3">{{label}}</h2>
        <p class="summary-text">{{summary}}</p>
      </div>
    </div>

    <!-- Hero Footer -->
    <div class="has-text-centered hero-footer">
      <p class="summary-text">
        <i @click="chevronClick" class="chevron-down"></i>
      </p>
    </div>
  </section>
</template>

<style lang="scss">
// Assorted Bulma utilities we need
$navbar-background-color: transparent;
$navbar-item-active-background-color: transparent;
// Import the stuff
@import "~bulma/sass/utilities/_all.sass";
@import "~bulma/sass/base/_all.sass";
@import "~bulma/sass/components/navbar.sass";
@import "~bulma/sass/elements/title.sass";
@import "~bulma/sass/layout/hero.sass";
@import "~bulma/sass/elements/container.sass";

// Keyframe definition to load the stuff on the page
@keyframes load {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.chevron-down {
  box-sizing: border-box;
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 5px solid white;
  border-top: 0;
  border-right: 0;
  transform: rotate(-45deg);
  border-radius: 3px;
  margin-bottom: 10px;
}
// Custom definitions for the hero
.is-main-hero {
  background-image: url("../assets/milky-way-man.jpg");
  background-size: cover;
  background-position: center 0;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  .title,
  .subtitle {
    color: #fff;
    text-shadow: 1px 1px 2px black;
  }
  .title,
  .subtitle,
  .summary-text {
    opacity: 0;
    transition: all 400ms ease-in-out;
    animation: load 800ms ease-in-out;
    animation-fill-mode: forwards;
  }
  .navbar-item {
    color: opacify(#fff, 0.8);
    &.active {
      color: #fff;
    }
  }
  .summary-text {
    text-shadow: 2px 2px 2px black, -1px -1px 1px black;
    animation-delay: 1000ms;
  }
  .navbar.is-transparent.scrolled {
    background-color: $primary;
  }
  .hero-footer {
    padding-bottom: 10px;
    .summary-text {
      animation-delay: 1400ms;
    }
  }
  &.no-animation {
    .title,
    .subtitle,
    .summary-text {
      opacity: 1;
      animation: none;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@components/Navbar.vue';
import Cookie from '../lib/Cookie';
import basics, { BasicData } from '../data/basics';
import { overlap } from '../lib/Helpers';

interface extendedBasicData extends BasicData {
  overlapping: boolean;
}

export default Vue.extend({
  // List of components we are using
  components: {
    Navbar
  },
  // Methods available for this component
  methods: {
    chevronClick(): void {
      if (this.$el.nextElementSibling) this.$el.nextElementSibling.scrollIntoView(true);
    },
    scrollFn(scrolled: boolean, navbarEl: Element): void {
      this.overlapping = overlap(navbarEl, this.$el);
    }
  },
  // The return data
  data(): extendedBasicData {
    return {
      ...basics,
      overlapping: true
    };
  },
  // mounted hook
  mounted() {
    if (Cookie.get('hasSeenAnimation')) this.$el.classList.add('no-animation');
    const summaryText = this.$el.querySelector('.hero-footer .summary-text');
    if (summaryText) {
      // This section is for if I want to do some stuff after my introduction animation ends
      const today = new Date();
      today.setDate(today.getDate() + 7);
      summaryText.addEventListener('animationend', () => {
        Cookie.set('hasSeenAnimation', 'true', today.toUTCString());
      });
    }
  }
});
</script>
