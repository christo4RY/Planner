<template>
  <div class="router">
    <router-link to="/" class="link">Projects</router-link>
    <router-link to="/addproject" class="link">Add Project</router-link>
  </div>
  <router-view />
</template>

<style>
body {
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #2c3e50;
}
.router {
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
  font-size: 22px;
}
.link {
  margin: 5px;
  text-decoration: none;
  padding: 5px;
  color: lightsalmon;
}
.link:hover {
  color: lightseagreen;
}
.router-link-active {
  border-bottom: 3px solid lightseagreen;
  color: lightseagreen;
}
</style>
