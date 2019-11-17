<template>
  <div class="container skill-container">
    <carousel>
      <carousel-slide
        v-for="(skillGroup, index) in grouped"
        :key="`skill-group-${index}`"
      >{{sillGroup.length}}</carousel-slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import skills, { Skill, Level } from '@data/skills';
import Carousel from '@components/Carousel/Carousel.vue';
import CarouselSlide from '@components/Carousel/CarouselSlide.vue';
import { group } from '@/lib/Helpers';

export default Vue.extend({
  components: {
    Carousel,
    CarouselSlide
  },
  data() {
    return {
      skills
    };
  },
  methods: {
    getLevel(level: number): string {
      return Level[level];
    }
  },
  computed: {
    sortedSkills(): Skill[] {
      if (!this.skills.length) return [];

      return this.skills.slice(0).sort((a, b) => a.level - b.level);
    },
    grouped(): Skill[][] {
      if (!this.skills.length) return [];
      return group(this.sortedSkills, 3);
    }
  }
});
</script>

<style lang="scss">
.skill-container {
  padding: 10px 0;
}
</style>
