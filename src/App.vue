<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <NavBar />
  <router-view />
  <!-- <Hero /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import NavBar from "./components/Navbar.vue";
// import Hero from './components/Hero.vue'

export default {
  name: "App",
  components: {
    NavBar,
    // Hero
  },
};
</script>

<style>
/* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    } */
</style>
