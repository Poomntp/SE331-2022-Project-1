<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <nav>
    <router-link :to="{ name: 'PeopleList' }">Home</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  inject: ['GStore'] // <----
}
</script>

<style>
@keyframes yellowfade {
  from {
    background-image: linear-gradient(
      0deg,
      rgba(0, 161, 255, 1) 0%,
      rgba(0, 255, 143, 1) 100%
    );
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-image: linear-gradient(
    45deg,
    rgba(45, 56, 138, 1) 1%,
    rgba(0, 174, 239, 1) 100%
  );
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
@import '~bootstrap/dist/css/bootstrap.css';
</style>
