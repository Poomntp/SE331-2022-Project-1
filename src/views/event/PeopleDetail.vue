<template>
  <h4>{{ people.name }} {{ people.surname }}</h4>
  <p>{{ people.age }}</p>
  <p>{{ people.hometown }}</p>
  <button @click="edit">Edit Detail</button>
</template>

<script>
export default {
  props: ['people'],
  inject: ['GStore'], // <---- Inject the Global Store
  methods: {
    edit() {
      // Assuming successful API call to register them
      this.GStore.flashMessage = ' Edit successfully '
      setTimeout(() => {
        // After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 5000)
      // Set a flash message to appear on the next page loaded which says
      // 'You are successfully registered for ' + this.event.title

      this.$router.push({
        name: 'PeopleDetail',
        params: { id: this.people.id }
      })
    }
  }
}
</script>
