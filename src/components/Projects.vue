<template>
  <div class="section has-background-white-ter has-pt-1">
    <h1 class="title is-1 has-text-centered">Projects at a Glance</h1>
    <div class="container">
      <div class="columns is-deck is-variable is-2">
        <div
          class="column is-full-mobile"
          v-for="project in viewableProjects"
          :key="`project-${project.id}`"
        >
          <a :href="project.http_url_to_repo">
            <div class="card">
              <div class="card-header">
                <div class="card-header-title is-centered">{{project.name}}</div>
              </div>
              <div class="card-content">{{project.description}}</div>
              <div class="card-footer">
                <section class="card-footer-item">
                  <div class="tags is-justify-flex-end" v-if="project.tag_list.length">
                    <a
                      :href="createTagLink(tag)"
                      class="tag is-primary"
                      v-for="tag in project.tag_list"
                      :key="`project-${project.id}-tag-${tag}`"
                    >{{tag}}</a>
                  </div>
                </section>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="is-disclaimer has-text-centered">
      <p>
        Please note that these are just my
        <em>public</em> repositories &mdash; I keep quite a few private
        repositories that are work-in-progress, or simple tests.
      </p>
      <p>
        To view more of my activity, please go to my
        <a href="https://gitlab.com/jhechtf">Gitlab</a> page.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { gitlabUserUrl } from '../config/config';

export default Vue.extend({
  props: {
    limit: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      projects: [] as never[],
    };
  },
  methods: {
    createTagLink(tag: string): string {
      return 'https://gitlab.com/explore/projects?tag=' + encodeURIComponent(tag);
    }
  },
  computed: {
    viewableProjects(): never[] {
      // Computed properties are weird because they are mounted to the instance before some things
      // and after others, so in order to make sure that everything work correctly it's best to assume
      // that nothing is where it should be, and that you SHOULD have a fallback.
      if (!this.projects.length) return [];
      // we're just going to show the first $props.limit.
      return this.projects.slice(0, this.$props.limit);
    }
  },
  created() {
    axios
      .get(gitlabUserUrl)
      .then(({ data }) => {
        this.projects = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
</script>

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables.sass";
.is-deck {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  @media screen and (max-width: $tablet) {
    flex-direction: column;
  }
  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
    .card-content {
      flex-grow: 1;
      font-size: 0.8rem;
    }
    .card-footer {
      flex-grow: 1;
    }
  }
}
.is-disclaimer {
  font-size: 0.75rem;
  margin: 5px 0 10px;
}
.has-pt-1 {
  padding-top: 2rem;
}
</style>
