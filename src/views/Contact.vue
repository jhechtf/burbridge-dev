<template>
  <section class="content">
    <div
      class="notification is-primary has-text-centered"
      v-if="hasNotification"
    >testing{{notification}}</div>
    <Navbar class="is-dark" />
    <main class="section">
      <div class="container">
        <form @submit="handleSubmit">
          <h1 class="title is-3">Contact Me</h1>
          <div class="columns">
            <div class="column">
              <div class="field is-full-mobile">
                <label class="label">Name</label>
                <input
                  type="text"
                  class="input"
                  placeholder="Your FULL Name"
                  v-model="name"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div class="column is-full-mobile">
              <label class="label">E-Mail</label>
              <input
                type="email"
                class="input"
                placeholder="E-Mail address to reach you"
                v-model="email"
                required
                aria-required="true"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Subject</label>
            <input
              type="text"
              class="input"
              placeholder="Sum up what you want to talk about?"
              v-model="subject"
              required
              aria-required="true"
            />
          </div>
          <div class="field">
            <label class="label">Message</label>
            <textarea
              class="textarea"
              placeholder="What do you want to talk about?"
              v-model="message"
            />
          </div>
          <div class="field">
            <button class="button is-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </main>
    <Footer />
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default Vue.extend({
  components: {
    Navbar,
    Footer,
  },
  methods: {
    handleSubmit(e: Event): void {
      e.preventDefault();
      if ((e.target as HTMLFormElement).checkValidity()) {
        axios.put(process.env.VUE_APP_LINK, {
          name: this.name,
          email: this.email,
          message: this.message,
          subject: this.subject
        }, { withCredentials: true }).finally(() => {
          this.hasNotification = true;
          this.notification = 'Sent!'
          this.name = '';
          this.email = '';
          this.message = '';
          this.subject = '';
          setTimeout(() => this.hasNotification = false, 1500);
        });
      }
    }
  },
  data() {
    return {
      hasNotification: false,
      notification: '',
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
});
</script>

<style lang="scss">
.is-full-height {
  height: 100%;
}
section.content {
  height: 100%;
  display: flex;
  flex-direction: column;
}
main.section {
  flex: 1 0 auto;
}
footer {
  flex: 1 1 50px;
}
</style>