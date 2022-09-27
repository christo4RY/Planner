<template>
  <div class="single" :class="{ complete: job.complete }">
    <div class="flexbox">
      <div>
        <h3 @click="show = !show">{{ job.title }}</h3>
      </div>
      <div>
        <span class="material-symbols-outlined" @click="deleteJob">
          delete
        </span>
        <router-link :to="{ name: 'EditProject', params: { id: job.id } }"
          ><span class="material-symbols-outlined text-dark">
            edit
          </span></router-link
        >
        <span class="material-symbols-outlined" @click="completeProject()">
          done
        </span>
      </div>
    </div>

    <div v-if="show">
      <h5>{{ job.detail }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["job"],
  data() {
    return {
      show: false,
      api: "http://localhost:3000/jobs/",
    };
  },
  methods: {
    deleteJob() {
      fetch(this.api + this.job.id, {
        method: "DELETE",
      }).then(() => {
        this.$emit("deleteJob", this.job.id);
      });
    },
    completeProject() {
      let completeRoute = this.api + this.job.id;
      fetch(completeRoute, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          complete: !this.job.complete,
        }),
      }).then(() => {
        this.$emit("complete", this.job.id);
      }).catch;
    },
  },
};
</script>

<style>
.single {
  padding: 10px;
  margin: 10px 0;
  background-color: rgb(240, 238, 238);
  border-radius: 5px;
  cursor: pointer;
  border-left: 5px solid crimson;
}
.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  margin-left: 7px;
  user-select: none;
}
span:hover {
  color: crimson;
}
.complete {
  border-left-color: lightseagreen;
}
</style>
