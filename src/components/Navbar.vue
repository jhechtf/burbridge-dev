<template>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <section class="container">
            <div class="navbar-menu">
                <div class="navbar-end">
                    <router-link to="/" class="navbar-item">Home</router-link>
                    <router-link to="/something" class="navbar-item">Testing</router-link>
                </div>
            </div>
        </section>
    </nav>
</template>

<style lang="scss">
.navbar.is-fixed-top.is-primary{
    background-color: #00d1b2;
    box-shadow:0 0 15px rgba(0,0,0,0.5);
}
</style>


<script lang="ts">
import Vue from 'vue';
// Import the Vue library
import debounce from 'lodash.debounce';
// Import the Debounce function from lodash

export default Vue.extend({
    methods:{
        onScroll(this: any){
            this.$el.classList.toggle('is-fixed-top', window.scrollY > 50);
            this.$el.classList.replace('is-transparent','is-primary')
        }
    },
    beforeDestroy(){
        document.removeEventListener('scroll', this.onScroll);
    },
    created(){
        document.addEventListener('scroll', this.onScroll);
    }
});

</script>
