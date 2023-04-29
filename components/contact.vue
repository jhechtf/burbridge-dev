

<script>
import config from "config";
export default {
  data() {
    return {
      has_info: false,
      info_type: null,
      message: null
    };
  },
  methods: {
    handleSubmit() {
      if (!this.$el.checkValidity()) return this.$el.reportValidity();
      const information = {};
      for (let i of this.$el.elements) {
        if (i.value) information[i.name] = i.value;
      }
      fetch(config.FORM_URL, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(information),
        method: "PUT"
      })
        .then(res => res.ok && res.text())
        .then(() => {
          this.has_info = true;
          this.info_type = "success";
          this.message = "Message successfully sent!";
        })
        .catch(err => {
          console.error(err);
          this.has_info = true;
          this.info_type = "error";
          this.message = "An Error has Occurred";
        })
        .finally(() => {
          setTimeout(() => {});
        });
    }
  }
};
</script>

<style>

input,
textarea {
  @apply p-1 px-3 border rounded-md w-full outline-none;
}
input:focus,
textarea:focus {
  @apply border-blue-300 !important;
}
</style>

<template>
  <form class="bg-gray-100 flex-grow p-3" @submit.prevent="handleSubmit">
    <div class="md:w-3/4 md:mx-auto wrapper">
      <section v-if="has_info"></section>
      <h1 class="text-4xl mb-5">Contact Me</h1>
      <section class="flex">
        <div class="flex-auto pr-3 pb-3">
          <label class="font-bold" aria-label="Name">
            Name
            <input
              type="text"
              placeholder="Your (full) Name"
              name="name"
              required
              aria-required="true"
            />
          </label>
        </div>
        <div class="flex-auto pl-2 pb-3">
          <label class="font-bold" aria-label="email">
            E-Mail
            <input
              type="email"
              placeholder="your.name@company.com"
              name="email"
              required
              class="focus:border-gray-200"
            />
          </label>
        </div>
      </section>
      <section class="flex pb-3">
        <div class="flex-auto">
          <label class="font-bold">
            Subject
            <input
              type="text"
              name="subject"
              placeholder="What do you want to talk about?"
              required
            />
          </label>
        </div>
      </section>
      <section class="flex pb-3">
        <div class="flex-auto">
          <label class="font-bold">
            Message
            <textarea
              required
              name="message"
              class="w-full h-32"
              placeholder="Enter any details here. If you are contacting me about a job, please include location, if it is possible to do remotely, and a salary range."
            ></textarea>
          </label>
        </div>
      </section>
      <section class="pb-3">
        <button type="submit" class="px-3 py-2 bg-green-500 text-gray-100 rounded-md">Submit</button>
      </section>
    </div>
  </form>
</template>