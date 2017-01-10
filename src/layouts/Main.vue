<template>
  <div class="container">
    <img src="../assets/logo.png">
    <h1>main layout</h1>
    <ul>
      <li>
        <router-link to="/">Go to home</router-link>
        <router-link to="/about">Go to aboute</router-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>