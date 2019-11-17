<template>
  <div class="carousel">
    <div class="carousel-control previous" @click="previous">
      <slot name="control-previous">&lt;</slot>
    </div>
    <div class="carousel-body" ref="body">
      <slot></slot>
    </div>
    <div class="carousel-control next" @click="next">
      <slot name="control-next">&gt;</slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Carousel',
  props: {
    startAt: {
      type: Number,
      default: 1
    },
    auto: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 2000
    },
    delay: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      currentSlide: this.startAt
    };
  },
  methods: {
    toSlide(slide: number): void {
      const slideCount = this.$slots.default ? this.$slots.default.length : -1;
      if (slide > slideCount || slide < 0) return;
      const body = this.$refs.body as HTMLElement;
      const slideEl = body.querySelector('.carousel-slide:nth-child(' + slide + ')');
      if (slideEl) {
        slideEl.scrollIntoView(true);
        this.currentSlide = slide;
      }
    },
    previous(): void {
      this.toSlide(this.currentSlide - 1);
    },
    next(): void {
      this.toSlide(this.currentSlide + 1);
    }
  }
});
</script>

<style lang="scss">
.carousel {
  display: flex;
  padding: 4px;
  width: 100%;
  .carousel-control {
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 4px;
  }
  .carousel-body {
    flex: 1 1 auto;
    display: flex;
    overflow-x: auto;
    min-height: fit-content;
    scroll-behavior: smooth;
    box-sizing: border-box;
    &::-webkit-scrollbar-thumb {
      height: 6px;
      width: 6px;
      background: #aaa;
    }
    .carousel-slide {
      flex: 0 0 100%;
    }
  }
}
</style>
