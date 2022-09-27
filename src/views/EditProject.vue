<template>
  <div class="container">
    <router-link to="/"
      ><span class="material-symbols-outlined text-light btn btn-primary">
        arrow_back
      </span></router-link
    >
    <div class="card mt-3 p-4">
      <h2 class="text-primary">Edit Project</h2>
      <div class="card-body">
        <form @submit.prevent>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label fs-4"
              >Title</label
            >
            <input
              type="text"
              class="form-control"
              v-model="title"
              id="exampleInputEmail1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="fs-4 form-label"
              >Detail</label
            >
            <input
              type="text"
              class="form-control"
              v-model="detail"
              id="exampleInputPassword1"
            />
          </div>
          <button @click="editProject" class="btn btn-success mt-2 w-100">
            Add Project
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      detail: "",
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.title = data.title;
        this.detail = data.detail;
      });
  },
  methods: {
    editProject() {
      fetch("http://localhost:3000/jobs/" + this.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.detail,
        }),
      }).then(() => {
        this.$router.push({ name: "home" });
      });
    },
  },
};
</script>

<style>
</style>
