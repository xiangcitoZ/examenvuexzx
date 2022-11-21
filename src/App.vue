<template>
  <MenuCubo/>
    <router-view></router-view>
</template>

<script>


import MenuCubo from './components/MenuCubo.vue'

export default {
  name: 'App',
  components: {
    MenuCubo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

