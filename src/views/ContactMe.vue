<template>
    <section class="contact-me">
        <Navbar class="is-secondary" />
        <section class="container">
            <div class="columns">
                <div class="column">
                    <h1 class="title is-1">Contact Me</h1>
                </div>
            </div>
        </section>
        <section class="container">
            <form @submit.prevent="formSubmit">
                <div class="columns">
                    <div class="column box is-12">
                        <h2 class="title has-text-centered">Basic Info</h2>
                        <div class="columns">
                            <div class="column">
                                <div class="field">
                                    <label class="label">Your Name*</label>
                                    <div class="control has-icons-left">
                                        <input class="input" type="text" placeholder="Alex McDougal" name="representative_name"
                                            required aria-required="true">
                                        <span class="icon is-small is-left">
                                            <i class="mdi mdi-account"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="field">
                                    <label class="label">Email</label>
                                    <div class="control has-icons-left">
                                        <input type="text" class="input" name="email" placeholder="jsmit@company.com"
                                            aria-required="false">
                                        <span class="icon is-small is-left">
                                            <i class="mdi mdi-factory"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="columns">
                            <div class="column">
                                <div class="field">
                                    <label class="label">Your Title</label>
                                    <div class="control has-icons-left">
                                        <input type="text" name="company_position" class="input" placeholder="e.g. Senior Recruiter, Project Manager, etc.">
                                        <span class="icon is-small is-left">
                                            <i class="mdi mdi-subtitles-outline"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="field">
                                    <label class="label">Company Name</label>
                                    <div class="control has-icons-left">
                                        <input type="text" class="input" name="company_name" placeholder="Company, Inc."
                                            aria-required="false">
                                        <span class="icon is-small is-left">
                                            <i class="mdi mdi-factory"></i>
                                        </span>
                                        <p class="help">If you are a recruiter contacting me about a specific client, please use their name here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <div class="field">
                                    <label for="" class="label">On</label>
                                    <div class="control has-icons-left">
                                        <input type="date" name="call_date" class="input">
                                        <span class="icon is-small is-left">
                                            <i class="mdi mdi-calendar"></i>
                                        </span>
                                    </div>
                                    <p class="help">If You would like to schedule a call with me, please put in a suggested date/time here</p>
                                </div>
                            </div>
                            <div class="column">
                                <div class="field">
                                    <label for="" class="label">At</label>
                                    <div class="control has-icons-left">
                                        <input type="time" name="call_time" class="input">
                                        <span class="icon is-small is-left">
                                            <i class="mdi mdi-clock-in"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
export default Vue.extend({
    components: {
        Navbar
    },
    methods: {
        formSubmit() {
            return false;
        }
    }
});
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/grid/_all.sass';
@import '~bulma/sass/elements/_all.sass';
</style>
