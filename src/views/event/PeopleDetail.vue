<template>
  <h4>{{ people.name }} {{ people.surname }}</h4>
  <p>{{ people.age }}</p>
  <p>{{ people.hometown }}</p>
</template>

<script>
export default {
  props: ['people'],
  inject: ['GStore'], // <---- Inject the Global Store
  methods: {
    edit() {
      this.$router.push({
        name: 'PeopleDetail',
        params: { id: this.people.id }
      })
    }
  }
}
</script>

<style scoped>
h4 {
  font-size: 40px;
  color: white;
}
button {
  font-size: 1.7rem;
  padding: 10px 30px;
  background: none;
  border: white solid 2px;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
button::after {
  content: '';
  width: 0;
  height: 100%;
  position: absolute;
  background: white;
  left: 0;
  top: 0;
  z-index: -1;
  transition: 0.4s;
}
button:hover {
  color: black;
}
button:hover::after {
  width: 100%;
}
</style>
