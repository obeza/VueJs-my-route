<template>
  home---
    <main-layout>
        <h1>Home</h1>
    </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      MainLayout
    }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>