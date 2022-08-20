<template>
  <div class="review-container">
    <h3>Comment:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }}
        "{{ review.review }}"
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['reviews']
}
</script>
