<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  methods: {
    chevronClick() {
      if (this.$el.nextElementSibling) {
        this.$el.nextElementSibling.scrollIntoView(true);
      }
    }
  }
};
</script>

<style>
.hero-background {
  background-image: url("/milky-way-man.png");
  background-size: cover;
  background-position-x: center 0;
}
.main {
  text-shadow: 1px 1px 5px rgb(0,0,0),
               -1px -1px 5px rgb(0,0,0);
}
.text-shadow-none {
  text-shadow: none;
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
</style>

<template>
  <div
    class="h-screen bg-purple-600 text-gray-300 p-3 px-5 hero-background flex flex-col justify-center"
  >
    <header class="mb-auto">
      <Navbar />
    </header>
    <section class="main">
      <div class="max-w-screen-lg mx-auto">
        <h1 class="text-xl md:text-3xl font-display font-medium">Jim Burbridge</h1>
        <h2
          class="text-lg md:text-xl mb-3"
        >DevOps Engineer / Full-Stack Developer / Space Enthusiast</h2>
        <p class="text-md md:text-lg">
          My name is Jim, and I have been working with computers for as long as I can remember. I worked freelance starting in 2003,
          focusing largely on PHP and MySQL based applications. Being a naturally curious person, I branched out into other areas of technology including System Administration, Infrastructure,
          networking, and database management. I received my Bachelor's of Science in Mathematics from CSU East Bay in 2014. I love building things and mentoring.
        </p>
        <p class="mt-4">
          <nuxt-link
            to="/contact"
            class="text-green-400 md:text-xl rounded rounded-lg border border-3 border-green-400 px-3 py-2 hover:bg-green-400 hover:text-white text-shadow-none"
          >Contact Me</nuxt-link>
        </p>
      </div>
    </section>
    <footer class="mt-auto self-center">
      <div class="chevron-down" @click="chevronClick"></div>
    </footer>
  </div>
</template>