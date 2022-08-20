<template>
  <!-- <router-link class="event-link"> -->
  <div class="event-card">
    <h4>{{ people.name }} {{ people.surname }}</h4>
    <span>number of doses : {{ people.vaccine_status }}</span>
  </div>
  <!-- </router-link> -->
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
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
