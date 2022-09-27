<template>
  <div>
    <button class="btn text-light btn-primary me-1" @click="project('all')">
      All
    </button>
    <button
      class="btn text-light btn-primary me-1"
      @click="project('completed')"
    >
      Completed
    </button>
    <button class="btn text-light btn-primary me-2" @click="project('ongoing')">
      OnGoing
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    project(value) {
      this.$emit("filterValue", value);
    },
  },
};
</script>

<style>
</style>
