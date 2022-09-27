<template>
  <div class="container">
    <Nav @filterValue="current = $event" class="my-3"></Nav>
    <div v-for="job in filterJobs" :key="job.id">
      <SingleView :job="job" @deleteJob="deleteJob" @complete="completeJob" />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import SingleView from "../components/SingleView";
export default {
  components: {
    Nav,
    SingleView,
  },
  data() {
    return {
      jobs: [],
      current: "all",
    };
  },
  computed: {
    filterJobs() {
      if (this.current == "completed") {
        return this.jobs.filter((job) => {
          return job.complete;
        });
      }
      if (this.current == "ongoing") {
        return this.jobs.filter((job) => {
          return !job.complete;
        });
      }
      return this.jobs;
    },
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        this.jobs = datas;
      })
      .catch((error) => {
        console.log(error.message());
      });
  },
  methods: {
    deleteJob(id) {
      this.jobs = this.jobs.filter((job) => {
        return job.id != id;
      });
    },
    completeJob(id) {
      let completeProject = this.jobs.find((job) => {
        return job.id == id;
      });
      completeProject.complete = !completeProject.complete;
    },
  },
};
</script>

<style>
</style>
