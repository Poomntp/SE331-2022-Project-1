<template>
  <h2>Information</h2>
  <table id="details">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
    </thead>
    <tr>
      <td>{{ people.name }}</td>
      <td>{{ people.surname }}</td>
      <td>{{ people.age }}</td>
      <td>{{ people.hometown }}</td>
    </tr>
  </table>
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
#details {
  justify-content: center;
}
#details td,
#details th {
  border: 1px solid #ddd;
  padding: 8px;
}
#details {
  margin: auto;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #002153;
  color: white;
}

#details tr:nth-child(even) {
  background-color: #ffffff;
  color: black;
}

#details tr:nth-child(even):hover {
  color: white;
  background: black;
}

h4 {
  font-size: 40px;
  color: white;
}
h2 {
  color: black;
}
</style>
