<template>
  <div id="app">
    <router-view></router-view>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./components/sideMenu";
export default {
  name: "app",
  components: {
    Menu
  }
};
</script>

<style>
html body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
}
div {
  margin: 0;
  padding: 0;
}
</style>
