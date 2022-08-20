<template>
  <h4>{{ people.name }} {{ people.surname }}</h4>
  <p>{{ people.age }}</p>
  <p>{{ people.hometown }}</p>
</template>

<script>
export default {
  props: ['people']
}
</script>
