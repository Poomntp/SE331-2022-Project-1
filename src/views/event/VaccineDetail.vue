<template>
  <h4>{{ people.vaccine_status }}</h4>
  <p v-if="people.vaccine_status == 1">
    {{ people.vaccine_types[0] }} {{ people.vaccine_dates[0] }}
  </p>
  <p v-if="people.vaccine_status == 2">
    {{ people.vaccine_types[0] }} {{ people.vaccine_dates[0] }}
    {{ people.vaccine_types[1] }} {{ people.vaccine_dates[1] }}
  </p>
</template>

<script>
export default {
  props: ['people']
}
</script>
