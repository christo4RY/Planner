<template>
  <form @submit.prevent>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label fs-4">Title</label>
      <input
        type="text"
        class="form-control"
        v-model="title"
        id="exampleInputEmail1"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="fs-4 form-label">Detail</label>
      <input
        type="text"
        class="form-control"
        v-model="detail"
        id="exampleInputPassword1"
      />
    </div>
    <button @click="addProject" class="btn btn-success mt-2 w-100">
      Add Project
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      api: "http://localhost:3000/jobs/",
      title: "",
      detail: "",
    };
  },
  methods: {
    addProject() {
      fetch(this.api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.detail,
          complete: false,
        }),
      }).then(() => {
        this.title = "";
        this.detail = "";
        alert("add project successful");
      });
    },
  },
};
</script>

<style>
</style>
