<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />
    <label for="review">Comment:</label>
    <textarea id="review" v-model="review"></textarea>

    <input class="button" type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  name: 'DoctorCommentForm',
  data() {
    return {
      name: '',
      review: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '') {
        alert('Review is incomplete. Please fill out every field.')
        return
      }
      let productReview = {
        name: this.name,
        review: this.review
      }
      this.$emit('review-submitted', productReview)

      this.name = ''
      this.review = ''
    }
  }
}
</script>
