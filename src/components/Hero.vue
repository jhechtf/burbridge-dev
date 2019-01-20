<template>
    <section class="hero is-fullheight is-main-hero">
        <!-- Hero header: will stick at the top -->
        <div class="hero-head">
            <Navbar/>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1">
                    {{basics.name}}
                </h1>
                <h2 class="subtitle is-3">
                    {{basics.label}}
                </h2>
                <p class="summary-text">
                    {{basics.summary}}
                </p>
            </div>
        </div>

    </section>
</template>

<style lang="scss">
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/base/_all.sass';
@import '~bulma/sass/components/navbar.sass';
@import '~bulma/sass/elements/title.sass';
@import '~bulma/sass/layout/hero.sass';
@import '~bulma/sass/elements/container.sass';

@keyframes load {
    0%{
        opacity:0;
        transform: translateY(100%);
    }
    100%{
        opacity:1;
        transform: translateY(0);
    }
}
.is-main-hero{
  background-image: url('../assets/milky-way-man.jpg');
  background-size: cover;
  background-position: center 0;
  color: #fff;
  .title,
  .subtitle{
      color:#fff;
  }
  .title,
  .subtitle,
  .summary-text{
      opacity:0;
      transition:all 400ms ease-in-out;
      animation: load 800ms ease-in-out;
      animation-fill-mode: forwards;
  }
  .navbar-item{
      color:opacify(#fff, 0.8);
      &.active{
          color: #fff;
      }
  }
  .summary-text{
    text-shadow: 1px 1px 1px black, -1px -1px 1px black;
    animation-delay: 1000ms;
  }
}
</style>


<script lang="ts">
import Vue from 'vue';
import {mapState} from 'vuex';
import Navbar from '@components/Navbar.vue';

import basics from '../data/basics';

export default Vue.extend({
    components:{
      Navbar
    },
    data() {
        return {
            basics
        };
    },
    computed:{
        parsedHtml(): string{
            return this.basics.summary.split(/\n/g).map(item=>`<p>${item}</p>`).join('');
        }
    }
})
</script>
