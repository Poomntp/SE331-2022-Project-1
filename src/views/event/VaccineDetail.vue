<template>
  <h2>History of vaccine</h2>
  <table class="details">
    <thead>
      <tr>
        <th>Amount</th>
        <th>First Dose</th>
        <th>Date</th>
        <th>Second Dose</th>
        <th>Date</th>
      </tr>
    </thead>
    <tr>
      <td>
        <a>{{ people.vaccine_status }}</a>
      </td>
      <td>
        <p v-if="people.vaccine_status == 1 || 2">
          {{ people.vaccine_types[0] }}
        </p>
      </td>
      <td>
        <p v-if="people.vaccine_status == 1 || 2">
          {{ people.vaccine_dates[0] }}
        </p>
      </td>
      <td>
        <p v-if="people.vaccine_status == 2">
          {{ people.vaccine_types[1] }}
        </p>
      </td>
      <td>
        <p v-if="people.vaccine_status == 2">
          {{ people.vaccine_dates[1] }}
        </p>
      </td>
    </tr>
  </table>
  <!-- <p v-if="people.vaccine_status == 1">
    {{ people.vaccine_types[0] }} {{ people.vaccine_dates[0] }}
  </p>
  <p v-if="people.vaccine_status == 2">
    {{ people.vaccine_types[0] }} {{ people.vaccine_dates[0] }}
    {{ people.vaccine_types[1] }} {{ people.vaccine_dates[1] }}
  </p> -->
</template>

<script>
export default {
  props: ['people']
}
</script>

<style scoped>
.details {
  margin: auto;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #002153;
  color: white;
  justify-content: center;
}
.details td,
.details th {
  border: 1px solid #ddd;
  padding: 8px;
}

.details tr:nth-child(even) {
  background-color: #ffffff;
  color: black;
}

.details tr:nth-child(even):hover {
  color: white;
  background: black;
}
h2 {
  color: black;
}
</style>
