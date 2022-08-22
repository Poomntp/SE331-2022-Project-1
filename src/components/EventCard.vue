<template>
  <!-- <router-link class="event-link"> -->
  <router-link
    class="event-link"
    :to="{ name: 'PeopleDetail', params: { id: people.id } }"
  >
    <div class="event-card">
      <img src="../assets/account.png" />
      <h4>{{ people.name }} {{ people.surname }}</h4>
      <span>number of doses : {{ people.vaccine_status }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    people: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
body {
  float: right;
}
.event-card {
  color: white;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  margin-bottom: 18px;
  border-radius: 29px;
}

.event-card:hover {
  transform: scale(1.01);
  background: white;
  color: black;
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
