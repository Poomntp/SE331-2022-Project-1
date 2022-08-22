<template>
  <div v-if="GStore.people">
    <nav>
      <div class="container">
        <router-link :to="{ name: 'PeopleDetail' }">Details</router-link>
        <router-link :to="{ name: 'VaccineDetail' }">Vaccines</router-link>
        <router-link :to="{ name: 'DoctorView' }">Comment</router-link>
        <div class="animation start-home"></div>
      </div>
    </nav>
    <router-view :people="GStore.people" />
  </div>
</template>
<script>
export default {
  inject: ['GStore']
}
</script>

<style scoped>
nav {
  display: inline-block;
  /* justify-content: space-between; */
  position: relative;
  width: 310px;
  height: 50px;
  background: #34495e;
  border-radius: 8px;
  font-size: 0;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 0;
  margin-bottom: 20px;
}

nav .container {
  position: relative;
  display: flex;
  justify-content: space-between;
  left: 0;
  top: 0;
  /* background: red; */
  width: 100%;
  height: 100%;
}

nav a {
  font-size: 15px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  line-height: 50px;
  position: relative;
  z-index: 1;
  display: inline-block;
  text-align: center;
}

nav .animation {
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 0;
  background: #1abc9c;
  border-radius: 8px;
  transition: all 0.5s ease 0s;
}
nav a:nth-child(1) {
  width: 100px;
}
nav .start-home,
a:nth-child(1):hover ~ .animation {
  width: 100px;
  left: 0;
}
nav a:nth-child(2) {
  width: 110px;
}
nav a:nth-child(2):hover ~ .animation {
  width: 110px;
  left: 100px;
}
nav a:nth-child(3) {
  width: 100px;
}
nav a:nth-child(3):hover ~ .animation {
  width: 100px;
  left: 210px;
}
</style>
