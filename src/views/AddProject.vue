<template>
  <div class="container">
    <router-link to="/"
      ><span class="material-symbols-outlined text-light btn btn-primary">
        arrow_back
      </span></router-link
    >
    <div class="card mt-3 p-4">
      <h2 class="text-primary">Add Project</h2>
      <div class="card-body">
        <FormView></FormView>
      </div>
    </div>
  </div>
</template>

<script>
import FormView from "../components/FormView";
export default {
  components: { FormView },
};
</script>

<style>
</style>
