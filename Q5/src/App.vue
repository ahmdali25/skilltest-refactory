<template>
  <div class="app">
    <Navbar/>
    <Home/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500:700&display=swap');

.app {
  font-family: 'Roboto', sans-serif;
  background-color: #FBFCFF;
}
</style>
