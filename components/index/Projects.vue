<script>
const gitlabUserUrl =
  "https://gitlab.com/api/v4/users/jhechtf/projects?order_by=last_activity_at&sort=desc";

export default {
  data() {
    return {
      error: false,
      projects: []
    };
  },
  methods: {
    createTagLink(tag) {
      return (
        "https://gitlab.com/explore/projects?tag=" + encodeURIComponent(tag)
      );
    }
  },
  async created() {
    try {
      // get the values from my gitlab url
      const values = await fetch(gitlabUserUrl).then(
        // if the response is ok we return turn the response data into JSON.
        res => res.ok && res.json()
      );
      this.projects = values.slice(0, 5);
      // I only need the 5 most recent. I feel ok hard coding this value.
    } catch (e) {
      // If we get an error, let's log it out, and set the error to true.
      console.log(e);
      this.error = true;
    }
  }
};
</script>
<style>
.card-rows {
  grid-template-rows: auto 1fr auto;
}
</style>
<template>
  <section class="bg-gray-200 py-4">
    <h1 class="font-display text-center text-4xl text-gray-800 mb-3">Projects at a Glance</h1>
    <template v-if="error">
      <h1 class="text-2xl text-center">An Error has Occurred</h1>
      <p
        class="text-xl p-3"
      >Something has gone wrong in trying to request data from the GitLab API. Please checkout the GitLab link in the Social section.</p>
    </template>
    <div v-else class="w-10/12 mx-auto">
      <div class="grid md:grid-cols-5 gap-x-2 card-rows grid-flow-row grid-cols-1 overflow-auto">
        <section
          v-for="(project, index) in projects"
          style="display: contents"
          :key="`project-${index}`"
        >
          <h1
            class="bg-white text-xl rounded-t-md font-semi border border-b-0 pt-2 pb-3 text-center md:row-start-1 md:row-span-1"
          >
            <a :href="project.web_url" target="_blank">{{project.name}}</a>
          </h1>
          <div class="bg-white border border-t-0 border-b-0 p-2">{{project.description}}</div>
          <footer
            class="bg-white mb-3 p-2 rounded-b-md border border-t-0 md:row-start-3 md:row-span-1"
          >
            <template v-if="project.tag_list.length">
              <a
                v-for="tag in project.tag_list"
                :key="`tag-${project.id}-${tag}`"
                :href="createTagLink(tag)"
                target="_blank"
                class="inline-block text-sm capitalize rounded-sm bg-green-400 hover:bg-green-600 py-1 px-2 text-white m-1"
              >{{tag}}</a>
            </template>
            <div v-else class="text-center">
              <em>No tags available for this project</em>
            </div>
          </footer>
        </section>
      </div>
      <footer class="mt-6 md:mt-4 text-gray-600 text-center text-md md:text-xs">
        <p>
          Please note that these are just my
          <em>public</em> respositories &mdash;
          I keep quite a few private repositories that are work-in-progress, or simple tests
        </p>
      </footer>
    </div>
  </section>
</template>