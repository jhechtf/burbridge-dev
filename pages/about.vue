<script>
export default {};
</script>

<style>
#about {
  flex: 1 0 auto;
}
</style>

<template>
  <div id="about" class="px-5 py-3 w-full bg-gray-100">
    <section id="tech-stack" class="max-w-screen-xl mx-auto">
      <h1 class="text-4xl font-bold">Tech Stack</h1>
      <p>
        The site is built with
        <a
          href="https://nuxtjs.org/"
          class="underline text-blue-500"
          alt="Nuxt.JS"
        >Nuxt</a> (
        <a href="https://vuejs.org/" class="underline text-blue-500">Vue</a>-powered Server-Side renderer)
        and
        <a
          href="https://tailwindcss.com"
          class="underline text-blue-500"
        >Tailwind CSS</a>. To keep CSS files to a minimum, production builds are run through PurgeCSS.
      </p>
    </section>
  </div>
</template>