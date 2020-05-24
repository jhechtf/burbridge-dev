<script>
import Media from "@/components/Media.vue";
export default {
  components: {
    Media
  }
};
</script>

<template>
  <section class="p-5">
    <h1 class="font-display text-gray-700 text-4xl text-center">Connect with Me</h1>
    <p
      class="text-center text-md italic pb-2"
    >I'm on most of the usual developer hangouts, so if you'd like an idea of the sort of things I do, please follow these links below.</p>
    <section class="grid md:grid-rows-1 md:grid-cols-4 gap-3 w-10/12 mx-auto">
      <a
        href="https://gitlab.com/jhechtf"
        class="underline flex justify-center text-2xl border rounded-md my-2"
      >
        <Media>
          <template slot="media-left">
            <i class="mdi mdi-gitlab"></i>
          </template>
          <div class="pl-2">Gitlab</div>
        </Media>
      </a>
      <a
        href="https://linkedin.com/in/james-burbridge"
        class="underline flex justify-center text-2xl border rounded-md my-2"
      >
        <Media>
          <template slot="media-left">
            <i class="mdi mdi-linkedin"></i>
          </template>
          <div class="pl-2">LinkedIn</div>
        </Media>
      </a>

      <a
        href="https://stackoverflow.com/users/2825551/jhecht?tab=profile"
        class="underline flex justify-center text-2xl border rounded-md my-2"
      >
        <Media>
          <template slot="media-left">
            <i class="mdi mdi-stack-overflow"></i>
          </template>
          <div class="pl-2">StackOverflow</div>
        </Media>
      </a>
      <a
        href="https://dev.to/jhechtf"
        class="underline flex justify-center text-2xl border rounded-md my-2"
      >
        <Media>
          <template slot="media-left">
            <i class="mdi mdi-dev-to"></i>
          </template>
          <div class="pl-2">Dev.To</div>
        </Media>
      </a>
    </section>
  </section>
</template>