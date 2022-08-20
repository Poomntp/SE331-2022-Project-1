<template>
  <h4>{{ people.vaccine_status }}</h4>
  <p>{{ people.age }}</p>
  <p>{{ people.hometown }}</p>
</template>

<script>
export default {
  props: ['people']
}
</script>
