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

<style>
.button {
  font-size: 1.7rem;
  padding: 10px 30px;
  background: none;
  border: white solid 2px;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.button::after {
  content: '';
  width: 0;
  height: 100%;
  position: absolute;
  background: white;
  left: 0;
  top: 0;
  z-index: -1;
  transition: 0.4s;
}
.button:hover {
  color: black;
}
.button:hover::after {
  width: 100%;
}
</style>
