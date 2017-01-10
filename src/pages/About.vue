<template>
    <main-layout>
        <h1>About</h1>
    </main-layout>
    
</template>

<script>
import MainLayout from '../layouts/Main.vue'

export default {
  name: 'about',
  data () {
    return {
      msg: 'About this Vue.js App'
    }
  },
  components: {
      MainLayout
    }
}
</script>